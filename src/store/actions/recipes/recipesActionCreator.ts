import { RecipeListStructure } from "../../../data/types";
import { LoadRecipesAction, RecipesActionType } from "./types";

export const loadRecipesActionCreator = (
  recipesList: RecipeListStructure
): LoadRecipesAction => ({
  type: RecipesActionType.loadRecipes,
  payload: recipesList,
});
