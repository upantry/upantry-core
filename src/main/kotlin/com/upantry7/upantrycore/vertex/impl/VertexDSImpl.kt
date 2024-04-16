package com.upantry7.upantrycore.vertex.impl

import com.google.cloud.vertexai.VertexAI
import com.upantry7.upantrycore.vertex.VertexDS

class VertexDSImpl : VertexDS {
    private val vertexAI = VertexAI("fluid-griffin-419114", "us-east1")
    override fun getIngredientsFromImage(image: ByteArray): String {
        vertexAI.
        TODO("Not yet implemented")
    }
}