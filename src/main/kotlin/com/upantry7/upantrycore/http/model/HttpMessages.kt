package com.upantry7.upantrycore.http.model

data class HelloResponse(val response: String = "Hello world!")


data class TranscribeIngredientsRequest(val image: String)
data class TranscribeIngredientsResponse(val ingredients: String)

data class GenerateRecipeRequest(val ingredients: String, val choice: String)
data class GenerateRecipeResponse(val ingredients: String)
