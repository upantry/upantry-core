import { useRef, useState } from "react";
import { Form, redirect, useSubmit } from "react-router-dom";
import { useStore } from "../store";
import { Camera } from "../camera";
import { Content, Page } from "../layout";

export async function action(args: any) {
  const formData = await args.request.formData();

  const store = useStore();
  store.image = formData.get("picture");
  return redirect(`/picture-analysis`);
}

export function IngredientsPicturePage() {
  const handleSubmit = useSubmit();

  const [picture, setPicture] = useState<string>("");

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <Page>
      <Content>
        {/* <h1>Take a picture of your ingredients ({navigation.state})</h1> */}
        <Form method="post" ref={formRef} style={{ height: "100%" }}>
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
