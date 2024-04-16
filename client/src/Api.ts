import { PictureAnalysis, Recipe } from "./Model";

export interface TranscribeIngredientsRequest {
  image: string;
}

export interface TranscribeIngredientsResponse {
  pictureAnalysis: PictureAnalysis;
  recipe: Recipe;
}

export interface GenerateRecipeRequest {
  ingredients: string;
  choice: string;
}

export interface GenerateRecipeResponse {
  recipe: string;
}

export interface Api {
  transcribeIngredients(request: TranscribeIngredientsRequest): Promise<TranscribeIngredientsResponse>;
  generateRecipe(request: GenerateRecipeRequest): Promise<GenerateRecipeResponse>;
}
