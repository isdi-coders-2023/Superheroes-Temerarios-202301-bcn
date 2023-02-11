import {
  LoadRecipesAction,
  RecipeAction,
  RecipesActionType,
} from "../store/actions/recipes/types";
import { RecipesContextStructure } from "../store/contexts/recipes/RecipesContext";

export const dispatch: React.Dispatch<RecipeAction> = jest.fn();
export const recipes = {
  from: 2,
  to: 2,
  _links: { next: { href: "" } },
  hits: [],
};

export const mockStore: RecipesContextStructure = { dispatch, recipes };
export const mockDispatch = jest.spyOn(mockStore, "dispatch");

export const mockLoadRecipesAction: LoadRecipesAction = {
  type: RecipesActionType.loadRecipes,
  payload: recipes,
};
