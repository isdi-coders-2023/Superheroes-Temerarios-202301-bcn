import { RecipesActionType } from "../actions/recipes/types";
import recipesReducer from "./recipesReducer";

describe("Given a recipesReducer function", () => {
  describe("When it receives a list of 2 recipes through the loadRecipes action", () => {
    test("Then it should return a list of 2 recipes", () => {
      const recipeList = {
        from: 2,
        to: 2,
        _links: { next: { href: "" } },
        hits: [],
      };
      const action = {
        type: RecipesActionType.loadRecipes,
        payload: recipeList,
      };

      const newRecipeList = recipesReducer(recipeList, action);

      expect(newRecipeList).toStrictEqual(recipeList);
    });
  });

  describe("When it receives a list of 2 recipes through an action it doesn't recognize", () => {
    test("then it should return the same list", () => {
      const recipeList = {
        from: 2,
        to: 2,
        _links: { next: { href: "" } },
        hits: [],
      };
      const action = {
        type: "" as unknown as RecipesActionType,
        payload: recipeList,
      };

      const newRecipeList = recipesReducer(recipeList, action);

      expect(newRecipeList).toStrictEqual(recipeList);
    });
  });
});
