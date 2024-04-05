import { Form, redirect, useLoaderData, useNavigate } from "react-router-dom";
import { GetRecipeResponse } from "../Api";
import { useStore } from "../store";
import { useApi } from "../http-api";

export interface LoaderResult {
    readonly getRecipeResponse: GetRecipeResponse;
}

export async function loader() {
    const store = useStore();
    const { getRecipeResponse, pantryPicture } = store;
    if (!getRecipeResponse || !pantryPicture) {
        return redirect("/");
    }

    return { getRecipeResponse };
}

export async function action(args: any) {
    const formData = await args.request.formData();
    const store = useStore();

    const instruction = formData.get('instruction');
    if (instruction) {
        store.freeFromInstructions.push(instruction);
    }

    const api = useApi();
    const response = await api.getRecipe({
        picture: store.pantryPicture!,
        freeFormInstructions: store.freeFromInstructions,
    });

    store.getRecipeResponse = response;

    return redirect(`/recipe`);
}

export function RefinePage() {
    return <>
        <h1>Provide more instructions</h1>

        <Form method="post">
            <input type="text" name="instruction" />
            <button type="submit">Submit</button>
        </Form>
    </>
}
