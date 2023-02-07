import { hitsStructure } from "../../../data/data";
import { LoadRecipesAction, RecipesActionType } from "./types";

export const loadRecipesActionCreator = (
  recipesList: hitsStructure
): LoadRecipesAction => ({
  type: RecipesActionType.loadRecipes,
  payload: recipesList,
});
