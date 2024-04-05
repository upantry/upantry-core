import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Root } from './routes/root.tsx';
import ErrorPage from './error.tsx';
import { PictureAnalysisPage, loader as pictureAnalysisLoader } from './routes/picture-analysis.tsx';
import { Home, action as homeAction } from './routes/home.tsx';
import { RecipePage, loader as recipeLoader, action as recipeAction } from './routes/recipe.tsx';
import { RefinePage, loader as refineLoader, action as refineAction } from './routes/refine.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        action: homeAction,
        element: <Home />,
      },
      {
        path: "/picture-analysis",
        loader: pictureAnalysisLoader,
        element: <PictureAnalysisPage />,
      },
      {
        path: "/recipe",
        loader: recipeLoader,
        action: recipeAction,
        element: <RecipePage />,
      },
      {
        path: "/refine",
        loader: refineLoader,
        action: refineAction,
        element: <RefinePage />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
