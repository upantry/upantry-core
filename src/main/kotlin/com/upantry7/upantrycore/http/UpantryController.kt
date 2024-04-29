package com.upantry7.upantrycore.http
import com.upantry7.upantrycore.http.model.*
import com.upantry7.upantrycore.vertex.VertexDS
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class UpantryController(
    @Autowired private val vertexDS: VertexDS
) {

    @GetMapping("/hello")
    fun hello() = HelloResponse()

    @PostMapping("/transcribeIngredients")
    @CrossOrigin
    fun transcribeIngredients(@RequestBody body: TranscribeIngredientsRequest): TranscribeIngredientsResponse {
        if(body.image.isEmpty()) return TranscribeIngredientsResponse(sampleIngredients)
        val ingredients = vertexDS.getIngredientsFromImageBase64(body.image)
        return TranscribeIngredientsResponse(ingredients)
    }

    @PostMapping("/generateRecipe")
    @CrossOrigin
    fun generateRecipe(@RequestBody body: GenerateRecipeRequest): GenerateRecipeResponse {
        if(body.ingredients.isEmpty()) return GenerateRecipeResponse(sampleRecipe)
        val recipe = vertexDS.getRecipe(body.ingredients, body.choice)
        return GenerateRecipeResponse(recipe)
    }

    // @todo
    //"uPantry's design includes a real-time global impact tracker. Currently, this displays placeholder data."
    //"The full implementation will utilize Cloud SQL to dynamically update savings and CO2 metrics based on user actions."

    // @GetMapping("/globalImpact")
    // fun getGlobalImpact() = GetGlobalImpactResponse(93.75,1.86,1000.0)

    companion object {
        val sampleIngredients = """
                The image contains the following items:

                * A bag of Samyook Fresh Bean Sprouts
                * A package of frozen chicken fryers
                * A bag of frozen shrimp
                * A head of lettuce
                * A package of noodles

                Here are some meal ideas using the ingredients in the picture:

                1. [Chicken and Shrimp Stir-fry with Bean Sprouts and Noodles](#idea1)
                2. [Chicken Noodle Soup with Bean Sprouts](#idea2)
                3. [Shrimp and Lettuce Wraps](#idea3)
            """.trimIndent()
        val sampleRecipe = """
                ## 1. Chicken and Shrimp Stir-fry with Bean Sprouts and Noodles:
                
                *Ingredients:*
                
                * 1 lb chicken fryers, cut into bite-sized pieces
                * 1 lb frozen shrimp, peeled and deveined
                * 1 bag Samyook Fresh Bean Sprouts
                * 1 bag noodles (your choice - rice noodles, egg noodles, etc.)
                * Your favorite stir-fry sauce
                * Oil for stir-frying
                * Vegetables of your choice (optional - e.g., bell peppers, onions, carrots)
                
                *Instructions:*
                
                1. *Cook the noodles:* Follow the package instructions to cook the noodles until al dente. Drain and set aside. 
                2. *Stir-fry the chicken:* Heat oil in a wok or large skillet over medium-high heat. Add the chicken and cook until browned and cooked through. Remove from the pan and set aside.
                3. *Stir-fry the shrimp:* Add the shrimp to the pan and cook until pink and cooked through. Remove from the pan and set aside.
                4. *Stir-fry the vegetables (optional):* If using, add your vegetables of choice to the pan and stir-fry until tender-crisp.
                5. *Combine everything:* Add the cooked noodles, chicken, shrimp, and bean sprouts to the pan. Pour in your stir-fry sauce and toss everything together until well combined and heated through.
                6. *Serve immediately:* Enjoy your delicious and healthy stir-fry! 
                
                ---
                
                ## 3. Lettuce Wraps with Chicken, Shrimp, and Bean Sprouts:
                
                *Ingredients:*
                
                * 1 head of iceberg lettuce, leaves separated
                * 1 lb chicken fryers, cooked and shredded
                * 1 lb frozen shrimp, cooked and chopped
                * 1 bag Samyook Fresh Bean Sprouts
                * Your favorite sauce (e.g., peanut sauce, sweet chili sauce)
                * Optional toppings: chopped peanuts, cilantro, lime wedges
                
                *Instructions:*
                
                1. *Prepare the lettuce:* Wash and dry the lettuce leaves. Arrange them on a platter.
                2. *Combine the filling:* In a bowl, combine the shredded chicken, chopped shrimp, and bean sprouts. 
                3. *Assemble the wraps:* Spoon the filling mixture into the lettuce leaves. 
                4. *Add sauce and toppings:* Drizzle your favorite sauce over the filling and add any desired toppings.
                5. *Serve and enjoy:* These lettuce wraps are a refreshing and flavorful appetizer or main course.
            """.trimIndent()
    }
}
