import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import FavouritesPage from "./pages/FavouritesPage/FavouritesPage";
import RecipesContextProvider from "./store/contexts/recipes/RecipesContextProvider";
import ErrorFourOFourPage from "./pages/Error404Page/Error404Page";
import Header from "./components/Header/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <>
        <Header />
        <ErrorFourOFourPage />
      </>
    ),
    children: [
      { path: "/", element: <HomePage /> },
      { path: "favourites", element: <FavouritesPage /> },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecipesContextProvider>
      <RouterProvider router={router} />
    </RecipesContextProvider>
  </React.StrictMode>
);
