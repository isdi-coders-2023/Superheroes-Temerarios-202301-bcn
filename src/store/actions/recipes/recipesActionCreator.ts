import { HitsStructure } from "../../../data/data";
import { LoadRecipesAction, RecipesActionType } from "./types";

export const loadRecipesActionCreator = (
  recipesList: HitsStructure[]
): LoadRecipesAction => ({
  type: RecipesActionType.loadRecipes,
  payload: recipesList,
});
