import { redirect, useLoaderData, useNavigate } from "react-router-dom";
import { GetRecipeResponse } from "../Api";
import { useStore } from "../store";

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

export function PictureAnalysisPage() {
  const navigate = useNavigate();
  const store = useStore();

  const { getRecipeResponse } = useLoaderData() as LoaderResult;
  const { pictureAnalysis } = getRecipeResponse;

  const onCancelClicked = () => {
    store.getRecipeResponse = null;
    store.pantryPicture = null;
    navigate("/");
  };

  const onConfirmClicked = () => {
    navigate("/recipe");
  };

  return (
    <>
      <p>Are those the ingredients?</p>
      <ul>
        {pictureAnalysis.items.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <button onClick={onConfirmClicked}>That looks right</button>
      <button onClick={onCancelClicked}>That's not it</button>
    </>
  );
}
