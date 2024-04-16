import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/root.tsx";
import ErrorPage from "./error.tsx";
import {
  PictureAnalysisPage,
  loader as pictureAnalysisLoader,
} from "./routes/picture-analysis.tsx";
import { Home } from "./routes/home.tsx";
import {
  RecipePage,
  loader as recipeLoader,
} from "./routes/recipe.tsx";
import {
  IngredientsPicturePage,
  action as ingredientsPictureAction,
} from "./routes/ingredients-picture.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/ingredients-picture",
        action: ingredientsPictureAction,
        element: <IngredientsPicturePage />,
      },
      {
        path: "/picture-analysis",
        loader: pictureAnalysisLoader,
        element: <PictureAnalysisPage />,
      },
      {
        path: "/recipe",
        loader: recipeLoader,
        element: <RecipePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
