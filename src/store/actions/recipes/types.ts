import { HitsStructure } from "../../../data/types";

export enum RecipesActionType {
  loadRecipes,
  defaultTest,
}

export interface RecipeAction {
  type: RecipesActionType;
  payload?: unknown;
}

export interface LoadRecipesAction extends RecipeAction {
  type: RecipesActionType.loadRecipes;
  payload: HitsStructure;
}
