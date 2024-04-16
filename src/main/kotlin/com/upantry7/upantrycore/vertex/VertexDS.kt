package com.upantry7.upantrycore.vertex

import org.springframework.util.MimeType

interface VertexDS {
    fun getIngredientsFromImage(image: ByteArray, mimeType: MimeType): String
    fun getIngredientsFromImageBase64(imageBase64: String): String
}
