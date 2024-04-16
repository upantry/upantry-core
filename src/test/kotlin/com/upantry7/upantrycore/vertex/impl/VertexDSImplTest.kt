package com.upantry7.upantrycore.vertex.impl

import com.upantry7.upantrycore.fixtures.ingredientsPngBase64
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
import org.springframework.util.MimeTypeUtils
import java.util.Base64

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class VertexDSImplTest(@Autowired val vertexDSImpl: VertexDSImpl) {
    @Test
    fun `Test get ingredients`() {
//        val response = vertexDSImpl.getIngredientsFromImageBase64(ingredientsPngBase64)
//        println(response)
    }
}
