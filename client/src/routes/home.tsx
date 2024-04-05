import { Form, redirect, useNavigation, useSubmit } from "react-router-dom";
import { useStore } from "../store";
import { useApi } from "../http-api";
import { Camera } from "../camera";

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
    const navigation = useNavigation();

    const loading = navigation.state !== 'idle';

    return <>
        <Camera onPictureTaken={(pic) => console.log(pic)} />

        <Form method="post">
            <button type="submit" disabled={loading}>{!loading ? 'Get Started' : 'Loading...'}</button>
        </Form>
    </>
}
