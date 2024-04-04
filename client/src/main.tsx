import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Root } from './routes/root.tsx';
import ErrorPage from './error.tsx';
import { PictureAnalysisPage } from './routes/picture-analysis.tsx';
import { Home } from './routes/home.tsx';
import { RecipePage } from './routes/recipe.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/picture-analysis",
        element: <PictureAnalysisPage />
      },
      {
        path: "/recipe",
        element: <RecipePage />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
