import {
  Form,
  redirect,
  useNavigate,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import { GetRecipeResponse } from "../Api";
import { useStore } from "../store";
import { useApi } from "../http-api";
import Button from "react-bootstrap/Button";
import { FormGroup } from "react-bootstrap";
import { ActionBar, Content, Page } from "../layout";
import { useRef } from "react";

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
  const navigate = useNavigate();
  const navigation = useNavigation();
  const handleSubmit = useSubmit();
  const loading = navigation.state !== "idle";
  const formRef = useRef(null);

  return (
    <Page>
      <Content>
        <h1>Provide more instructions</h1>

        <Form method="post" ref={formRef}>
          <p>
            Sorry this recipe didn't work out for you. If you provide more
            instructions, we can find a better one:
          </p>
          <FormGroup>
            <input
              className="form-control"
              type="text"
              name="instruction"
              placeholder="Make dinner, give me a cake, something hot..."
            />
          </FormGroup>
          <FormGroup></FormGroup>
        </Form>
      </Content>

      <ActionBar>
        <div className="d-grid mx-2 my-2 gap-2">
          <Button
            variant="primary"
            disabled={loading}
            onClick={() => handleSubmit(formRef.current)}
          >
            {!loading ? "Submit" : "Loading..."}
          </Button>

          <Button
            variant="secondary"
            disabled={loading}
            onClick={() => navigate("/recipe")}
          >
            Cancel
          </Button>
        </div>
      </ActionBar>
    </Page>
  );
}
