import { HitStructure, LinksStructure } from "../data/types";

export interface RecipeListStructure {
  from: number;
  to: number;
  _links: LinksStructure;
  hits: HitStructure[];
}

export const useApiRequest = () => {
  const baseUrl =
    "https://api.edamam.com/api/recipes/v2?type=public&app_id=09cb5146&app_key=%20f097ebbc5080ade5ceb4e2f3a105d5b9&diet=balanced";

  const recipeList = async (): Promise<RecipeListStructure> => {
    const list = await fetch(baseUrl);
    const response = await list.json();
    return response;
  };
  return recipeList;
};
