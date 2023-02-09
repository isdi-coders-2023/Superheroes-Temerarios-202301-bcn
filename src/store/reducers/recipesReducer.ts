import { HitsStructure } from "../../data/types";
import {
  LoadRecipesAction,
  RecipeAction,
  RecipesActionType,
} from "../actions/recipes/types";

const recipesReducer = (
  currentRecipes: HitsStructure,
  action: RecipeAction
): HitsStructure => {
  let newRecipes: HitsStructure;

  if (action.type === RecipesActionType.loadRecipes) {
    newRecipes = [...(action as LoadRecipesAction).payload];
  } else {
    newRecipes = currentRecipes;
  }

  return newRecipes;
};

export default recipesReducer;
