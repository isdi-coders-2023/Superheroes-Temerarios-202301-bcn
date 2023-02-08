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

  switch (action.type) {
    case RecipesActionType.loadRecipes:
      newRecipes = [...(action as LoadRecipesAction).payload];
      break;
    default:
      newRecipes = currentRecipes;
  }

  return newRecipes;
};

export default recipesReducer;
