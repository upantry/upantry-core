import { PictureAnalysis, Recipe, SavedRecipe } from "./Model"

export interface GetRecipeRequest {
    picture: string // Base 64 of the picture
    freeFormInstructions: string[] // List of the instructions given by the user
}

export interface GetRecipeResponse {
    pictureAnalysis: PictureAnalysis
    recipe: Recipe
}

export interface SaveFinalRecipeRequest {
    picture: string
    recipe: Recipe
}

export interface SaveFinalRecipeResponse {
    
}

export interface GetRecipeGalleryRequest {

}

export interface GetRecipeGalleryResponse {
    savedRecipes: SavedRecipe[]
}

export interface Api {
    getRecipe(request: GetRecipeRequest): Promise<GetRecipeResponse>
    sendPicture(request: SaveFinalRecipeRequest): Promise<SaveFinalRecipeResponse>
    getRecipeGallery(request: GetRecipeGalleryRequest): Promise<GetRecipeGalleryResponse>
}
