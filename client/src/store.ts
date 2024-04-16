export class Store {
  image: string | null = null;
  choice: string | null = null;
  ingredients: string | null = null;
  recipe: string | null = null;
}

const STORE = new Store();

export function useStore() {
  return STORE;
}
