import React from "react";
import "./App.css";
import { HitsStructure, LinksStructure } from "./data/data";
import Home from "./pages/home/home";

interface responseStructure {
  from: number;
  to: number;
  _links: LinksStructure;
  hits: HitsStructure;
}

function App() {
  const baseUrl =
    "https://api.edamam.com/api/recipes/v2?type=public&app_id=09cb5146&app_key=%20f097ebbc5080ade5ceb4e2f3a105d5b9&diet=balanced";

  const recipeList = async (): Promise<responseStructure> => {
    const list = await fetch(baseUrl);
    const response = await list.json();
    console.log(response);
    return response;
  };

  recipeList();
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
