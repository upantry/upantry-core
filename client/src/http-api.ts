import { Api, GetRecipeGalleryRequest, GetRecipeGalleryResponse, GetRecipeRequest, GetRecipeResponse, SaveFinalRecipeRequest, SaveFinalRecipeResponse } from "./Api";

export class HttpApi implements Api {

    private fakeWait(): Promise<void> {
        return new Promise(r => setTimeout(r, 1000));
    }

    async getRecipe(request: GetRecipeRequest): Promise<GetRecipeResponse> {
        await this.fakeWait();
        return {
            pictureAnalysis: {
                items: [
                    'beans',
                    'oil',
                    'chicken',
                ]
            },
            recipe: {
                title: "Bean-oil-chicken grandma recipe",
                description: "You mix it all together",
            },
        }
    }

    async sendPicture(request: SaveFinalRecipeRequest): Promise<SaveFinalRecipeResponse> {
        await this.fakeWait();
        throw new Error("Method not implemented.");
    }

    async getRecipeGallery(request: GetRecipeGalleryRequest): Promise<GetRecipeGalleryResponse> {
        await this.fakeWait();
        throw new Error("Method not implemented.");
    }
}

export function useApi(): Api {
    return new HttpApi();
}
