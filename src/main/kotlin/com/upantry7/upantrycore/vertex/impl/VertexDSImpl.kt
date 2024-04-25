package com.upantry7.upantrycore.vertex.impl

import com.google.cloud.vertexai.VertexAI
import com.upantry7.upantrycore.vertex.VertexDS
import org.springframework.ai.chat.messages.AssistantMessage
import org.springframework.ai.chat.messages.Media
import org.springframework.ai.chat.messages.Message
import org.springframework.ai.chat.messages.UserMessage
import org.springframework.ai.chat.prompt.Prompt
import org.springframework.ai.vertexai.gemini.VertexAiGeminiChatClient
import org.springframework.ai.vertexai.gemini.VertexAiGeminiChatOptions
import org.springframework.util.MimeType
import org.springframework.util.MimeTypeUtils
import java.util.Base64


class VertexDSImpl : VertexDS {

    override fun getIngredientsFromImage(image: ByteArray, mimeType: MimeType): String {
        val chatResponse = chatClient.call(
            Prompt(
                UserMessage(
                    INGREDIENT_PROMPT,
                    listOf(Media(MimeTypeUtils.IMAGE_PNG, image))
                )
            )
        )

        return chatResponse.result.output.content
    }

    override fun getIngredientsFromImageBase64(imageBase64: String): String {
        val prefix = imageBase64.findAnyOf(prefixMap.keys)!!.second
        val mimeType = prefixMap[prefix]!!
        val bytes = Base64.getDecoder().decode(imageBase64.removePrefix(prefix)).toList().toByteArray()
        return getIngredientsFromImage(bytes, mimeType)
    }

    override fun getRecipe(ingredientsBlob: String, choice: String): String {

        val chatResponse = chatClient.call(
            Prompt(
                listOf(
                    UserMessage(INGREDIENT_PROMPT),
                    AssistantMessage(ingredientsBlob),
                    UserMessage("Please provide a recipe for the user's choice: $choice\nUse markdown headers to separate sections.")
                )
            )
        )

        return chatResponse.result.output.content
    }

    companion object{
        private val chatClient: VertexAiGeminiChatClient

        init {
            val vertexAI = VertexAI("fluid-griffin-419114", "us-east1")
            val chatOptions = VertexAiGeminiChatOptions()
            chatOptions.model = "gemini-1.5-pro-preview-0409"
            chatClient = VertexAiGeminiChatClient(
                vertexAI,
                chatOptions
            )
        }

        private val prefixMap = mapOf(
            "data:image/png;base64," to MimeTypeUtils.IMAGE_PNG,
            "data:image/jpg;base64," to MimeTypeUtils.IMAGE_JPEG,
            "data:image/jpeg;base64," to MimeTypeUtils.IMAGE_JPEG,
        )
        private const val INGREDIENT_PROMPT = "The image shows what the person has to cook a meal with, please describe all items in the picture and a number list of meal ideas. The section titles should be in header 1 markdown format\n" +
                "Modify the output so that the meal ideas indexes are linkable. For example, '1. [Chicken and Shrimp Stir-fry with Bean Sprouts and Noodles](#idea1)'. Do not include this example recipe in the response. Don't add anything else to the output."
    }
}
