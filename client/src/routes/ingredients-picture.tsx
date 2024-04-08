import { useRef, useState } from "react";
import { Form, redirect, useNavigation, useSubmit } from "react-router-dom";
import { useApi } from "../http-api";
import { useStore } from "../store";
import { Camera } from "../camera";
import { Content, NavBar, Page } from "../layout";
import Button from "react-bootstrap/Button";

export async function action(args: any) {
  const formData = await args.request.formData();

  const store = useStore();
  store.pantryPicture = formData.get("picture");
  store.freeFromInstructions = [];

  const api = useApi();
  const response = await api.getRecipe({
    picture: store.pantryPicture!,
    freeFormInstructions: store.freeFromInstructions,
  });

  store.getRecipeResponse = response;

  return redirect(`/picture-analysis`);
}

export function IngredientsPicturePage() {
  const handleSubmit = useSubmit();

  const [picture, setPicture] = useState<string>('');

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <Page>
      <Content>
        {/* <h1>Take a picture of your ingredients ({navigation.state})</h1> */}
        <Form method="post" ref={formRef} style={{height: '100%'}}>
          <Camera
            onPictureTaken={(pic) => {
              setPicture(pic);
              setTimeout(() => handleSubmit(formRef.current), 0);
            }}
          />
          <input type="hidden" name="picture" value={picture} />
        </Form>
      </Content>
    </Page>
  );
}
