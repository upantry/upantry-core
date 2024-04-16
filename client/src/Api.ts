export interface TranscribeIngredientsRequest {
  image: string;
}

export interface TranscribeIngredientsResponse {
  ingredients: string;
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
