import { HitsStructure } from "../data/types";
import {
  LoadRecipesAction,
  RecipeAction,
  RecipesActionType,
} from "../store/actions/recipes/types";

export const dispatch: React.Dispatch<RecipeAction> = jest.fn();
export const recipes: HitsStructure = [];

export const mockStore = { dispatch, recipes: [] as HitsStructure };
export const mockDispatch = jest.spyOn(mockStore, "dispatch");
export const mockLoadRecipesAction: LoadRecipesAction = {
  type: RecipesActionType.loadRecipes,
  payload: recipes,
};
