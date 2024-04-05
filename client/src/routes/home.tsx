import { Form, redirect } from "react-router-dom";
import { useStore } from "../store";
import { useApi } from "../http-api";

export async function action(args: any) {
    const formData = await args.request.formData();

    const store = useStore();
    store.pantryPicture = 'TODOPIC';
    store.freeFromInstructions = [];

    const api = useApi();
    const response = await api.getRecipe({
        picture: store.pantryPicture,
        freeFormInstructions: store.freeFromInstructions,
    });

    store.getRecipeResponse = response;

    return redirect(`/picture-analysis`);
}

export function Home() {
    return <>
        <Form method="post">
            <button type="submit">Get Started</button>
        </Form>
    </>
}
