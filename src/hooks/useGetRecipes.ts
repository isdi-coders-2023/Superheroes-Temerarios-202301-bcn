import { hitsStructure, LinksStructure } from "../data/data";

export interface recipeListStructure {
  from: number;
  to: number;
  _links: LinksStructure;
  hits: hitsStructure[];
}

export const useApiRequest = () => {
  const baseUrl =
    "https://api.edamam.com/api/recipes/v2?type=public&app_id=09cb5146&app_key=%20f097ebbc5080ade5ceb4e2f3a105d5b9&diet=balanced";

  const recipeList = async (): Promise<recipeListStructure> => {
    const list = await fetch(baseUrl);
    const response = await list.json();
    return response;
  };
  return recipeList;
};
