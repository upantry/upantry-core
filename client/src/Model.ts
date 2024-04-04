export interface Recipe {
    title: string;
    description: string;
}

export interface SavedRecipe {
    recipe: Recipe
    picture: string
}

export interface PictureAnalysis {
    items: string[];
}

