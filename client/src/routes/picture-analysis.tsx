import { redirect, useLoaderData, useNavigate } from "react-router-dom";
import { useStore } from "../store";
import { Content, Page } from "../layout";
import Markdown from "react-markdown";
import { useApi } from "../http-api";

export interface LoaderResult {
  readonly ingredients: string;
}

export async function loader() {
  const store = useStore();

  const { image } = store;
  if (!image) {
    return redirect("/");
  }

  const api = useApi();
  const { ingredients } = await api.transcribeIngredients({ image });
  store.ingredients = ingredients;
  return { ingredients };
}

export function PictureAnalysisPage() {
  const navigate = useNavigate();
  const store = useStore();
  const { ingredients } = useLoaderData() as LoaderResult;

  return (
    <Page>
      <Content>
        <div
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();

            const target = e.target as HTMLAnchorElement;
            if (!target.href) return;

            store.choice = (e.target as HTMLElement).innerText;
            navigate("/recipe");
          }}
        >
          <Markdown>{ingredients}</Markdown>
        </div>
      </Content>
    </Page>
  );
}
