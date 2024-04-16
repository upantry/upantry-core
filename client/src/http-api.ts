import {
  Api, GenerateRecipeRequest, GenerateRecipeResponse, TranscribeIngredientsRequest, TranscribeIngredientsResponse
} from "./Api";

export class HttpApi implements Api {
  constructor(readonly base: string) {

  }

  async transcribeIngredients(request: TranscribeIngredientsRequest): Promise<TranscribeIngredientsResponse> {
    const resp = await fetch(this.base + '/transcribeIngredients', {
      method: 'POST',
      body: JSON.stringify(request)
    })
    if (!resp.ok) {
      throw new Error(`Response status ${resp.status}`);
    }
    return await resp.json();
  }

  async generateRecipe(request: GenerateRecipeRequest): Promise<GenerateRecipeResponse> {
    const resp = await fetch(this.base + '/generateRecipe', {
      method: 'POST',
      body: JSON.stringify(request)
    })
    if (!resp.ok) {
      throw new Error(`Response status ${resp.status}`);
    }
    return await resp.json();
  }
}

export function useApi(): Api {
  return new HttpApi('http://localhost:8080');
}
