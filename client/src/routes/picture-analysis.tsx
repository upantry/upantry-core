import { redirect, useLoaderData, useNavigate } from "react-router-dom";
import { GetRecipeResponse } from "../Api";
import { useStore } from "../store";
import Button from "react-bootstrap/Button";
import { ActionBar, Content, Page } from "../layout";

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
    navigate("/ingredients-picture");
  };

  const onConfirmClicked = () => {
    navigate("/recipe");
  };

  return (
    <Page>
      <Content>
        <p>Are those the ingredients?</p>
        <ul>
          {pictureAnalysis.items.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </Content>

      <ActionBar>
        <div className="d-grid mx-2 my-2 gap-2">
          <Button variant="primary" onClick={onConfirmClicked}>
            That looks right
          </Button>
          <Button variant="secondary" onClick={onCancelClicked}>
            That's not it
          </Button>
        </div>
      </ActionBar>
    </Page>
  );
}
