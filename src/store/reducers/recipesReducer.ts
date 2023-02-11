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
    return (newRecipes = { ...(action as LoadRecipesAction).payload });
  }
  newRecipes = currentRecipes;

  return newRecipes;
};

export default recipesReducer;
