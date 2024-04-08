import { redirect, useLoaderData, useNavigate } from "react-router-dom";
import { GetRecipeResponse } from "../Api";
import { useStore } from "../store";
import { useApi } from "../http-api";
import Button from "react-bootstrap/Button";

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

export async function action() {
  const store = useStore();
  store.freeFromInstructions = [];

  const api = useApi();
  const response = await api.getRecipe({
    picture: store.pantryPicture!,
    freeFormInstructions: store.freeFromInstructions,
  });

  store.getRecipeResponse = response;

  return redirect(`/picture-analysis`);
}

export function RecipePage() {
  const navigate = useNavigate();
  const { getRecipeResponse } = useLoaderData() as LoaderResult;

  const onStartOverClicked = () => {
    navigate("/");
  };

  const onTryAgainClicked = () => {
    navigate("/refine");
  };

  const onTakePictureClicked = () => {
    // TODO
  };

  return (
    <>
      <h1>{getRecipeResponse.recipe.title}</h1>
      <p>{getRecipeResponse.recipe.description}</p>

      <div className="d-grid mx-2 my-2 gap-2">
            <Button variant="primary" onClick={onStartOverClicked}>Start over</Button>
            <Button variant="primary" onClick={onTakePictureClicked}>Take a picture</Button>
            <Button variant="secondary" onClick={onTryAgainClicked}>Try something else</Button>
      </div>
    </>
  );
}
