import { RecipeListStructure } from "../../data/types";
import {
  LoadRecipesAction,
  RecipeAction,
  RecipesActionType,
} from "../actions/recipes/types";

const recipesReducer = (
  currentRecipes: RecipeListStructure,
  action: RecipeAction
): RecipeListStructure => {
  let newRecipes: RecipeListStructure;

  if (action.type === RecipesActionType.loadRecipes) {
    newRecipes = { ...(action as LoadRecipesAction).payload };
    return newRecipes;
  }

  newRecipes = currentRecipes;

  return newRecipes;
};

export default recipesReducer;
