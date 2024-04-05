import { useRef, useState } from "react";
import { Form, redirect, useNavigation, useSubmit } from "react-router-dom";
import { useApi } from "../http-api";
import { useStore } from "../store";
import { Camera } from "../camera";

export async function action(args: any) {
  const formData = await args.request.formData();
  console.log(Object.fromEntries(formData));

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
  const navigation = useNavigation();

  const [picture, setPicture] = useState<string>();

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <>
      <h1>Take a picture of your ingredients</h1>
      <Form method="post" ref={formRef}>
        {navigation.state}
        <Camera
          onPictureTaken={(pic) => {
            setPicture(pic);
            handleSubmit(null);
          }}
        />
        <input type="hidden" name="picture" value={picture} />
      </Form>
    </>
  );
}
