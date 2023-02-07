import { HitsStructure } from "../../../data/data";

export enum RecipesActionType {
  loadRecipes,
}

export interface RecipeAction {
  type: RecipesActionType;
  payload?: unknown;
}

export interface LoadRecipesAction extends RecipeAction {
  type: RecipesActionType.loadRecipes;
  payload: HitsStructure;
}
