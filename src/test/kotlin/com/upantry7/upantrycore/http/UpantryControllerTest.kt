package com.upantry7.upantrycore.http

import com.upantry7.upantrycore.http.model.GenerateRecipeRequest
import com.upantry7.upantrycore.http.model.GenerateRecipeResponse
import com.upantry7.upantrycore.http.model.HelloResponse
import com.upantry7.upantrycore.http.model.TranscribeIngredientsRequest
import com.upantry7.upantrycore.http.model.TranscribeIngredientsResponse
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.web.client.TestRestTemplate
import org.springframework.boot.test.web.client.getForEntity
import org.springframework.boot.test.web.client.postForEntity
import org.springframework.http.HttpStatus

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class UpantryControllerTest(@Autowired val restTemplate: TestRestTemplate) {

    @Test
    fun `Hello world`() {
        val entity = restTemplate.getForEntity<HelloResponse>("/hello")
        assertThat(entity.statusCode).isEqualTo(HttpStatus.OK)
        assertThat(entity.body).isEqualTo(HelloResponse())
    }

    @Test
    fun `Test sample ingredients`() {
        val entity = restTemplate.postForEntity<TranscribeIngredientsResponse>(
            "/transcribeIngredients",
            request = TranscribeIngredientsRequest("")
        )
        assertThat(entity.statusCode).isEqualTo(HttpStatus.OK)
        assertThat(entity.body).isEqualTo(TranscribeIngredientsResponse(UpantryController.sampleIngredients))
    }

    @Test
    fun `Test sample recipe`() {
        val entity = restTemplate.postForEntity<GenerateRecipeResponse>(
            "/generateRecipe",
            request = GenerateRecipeRequest("", "")
        )
        assertThat(entity.statusCode).isEqualTo(HttpStatus.OK)
        assertThat(entity.body).isEqualTo(GenerateRecipeResponse(UpantryController.sampleRecipe))
    }

}
