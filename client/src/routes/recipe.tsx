import { redirect, useLoaderData, useNavigate } from "react-router-dom";
import { useStore } from "../store";
import Button from "react-bootstrap/Button";
import { ActionBar, Content, Page } from "../layout";
import Markdown from "react-markdown";
import { useApi } from "../http-api";
import React from "react";

export interface LoaderResult {
  readonly recipe: string;
}

export async function loader() {
  const store = useStore();
  const { ingredients, choice } = store;
  if (!ingredients || !choice) {
    return redirect("/");
  }

  const api = useApi();

  const { recipe } = await api.generateRecipe({ ingredients, choice });

  return { recipe };
}

export function RecipePage() {
  const navigate = useNavigate();
  const { recipe } = useLoaderData() as LoaderResult;

  const onStartOverClicked = () => {
    navigate("/");
  };

  return (
    <Page>
      <Content>
        <Markdown>{recipe}</Markdown>
      </Content>

      <ActionBar>
        <div className="d-grid mx-2 my-2 gap-2">
          <Button variant="secondary" onClick={onStartOverClicked}>
            Start over
          </Button>
        </div>
      </ActionBar>
    </Page>
  );
}
