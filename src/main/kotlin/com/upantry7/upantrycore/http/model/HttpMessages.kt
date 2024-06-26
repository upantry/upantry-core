package com.upantry7.upantrycore.http.model

data class HelloResponse(val response: String = "Hello world!")

// todo:
//"uPantry's design includes a real-time global impact tracker. Currently, this displays placeholder data."
//"The full implementation will utilize Cloud SQL to dynamically update savings and CO2 metrics based on user actions."
//data class GetGlobalImpactResponse(val co2Reduction:Double=93.75, val treePlanted:Double=1.86, val dollarSaving:Double=1000.0)

data class TranscribeIngredientsRequest(val image: String)
data class TranscribeIngredientsResponse(val ingredients: String)

data class GenerateRecipeRequest(val ingredients: String, val choice: String)
data class GenerateRecipeResponse(val recipe: String)
