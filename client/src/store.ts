import { GetRecipeResponse } from "./Api";

export class Store {
  pantryPicture: string | null = null;
  freeFromInstructions: string[] = [];
  getRecipeResponse: GetRecipeResponse | null = null;
}

const STORE = new Store();

export function useStore() {
  return STORE;
}
