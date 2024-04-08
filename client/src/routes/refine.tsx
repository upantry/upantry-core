import { Form, redirect, useNavigation } from "react-router-dom";
import { GetRecipeResponse } from "../Api";
import { useStore } from "../store";
import { useApi } from "../http-api";
import Button from "react-bootstrap/Button";
import { FormGroup } from "react-bootstrap";

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

  const instruction = formData.get("instruction");
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
  const navigation = useNavigation();
  const loading = navigation.state !== "idle";

  return (
    <>
      <h1>Provide more instructions</h1>

      <Form method="post">
        <p>Sorry this recipe didn't work out for you. If you provide more instructions, we can find a better one:</p>
        <FormGroup>
          <input className="form-control" type="text" name="instruction" placeholder="Make dinner, give me a cake, something hot..." />
        </FormGroup>
        <FormGroup>
          <Button variant="primary" type="submit" disabled={loading}>
            {!loading ? "Submit" : "Loading..."}
          </Button>
        </FormGroup>
      </Form>
    </>
  );
}
