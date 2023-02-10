import { RecipeListStructure } from "../../../data/types";
import { loadRecipesActionCreator } from "./recipesActionCreator";
import { RecipesActionType } from "./types";

describe("Given a recipesActionCreators function", () => {
  describe("When it recieves a list of two recipes", () => {
    test("Then it should return an action with type 'LoadRecipes' and the two recipes as payload", () => {
      const recipes: RecipeListStructure = {
        from: 2,
        to: 2,
        _links: { next: { href: "" } },
        hits: [],
      };
      const expectedLoadRecipesAction = {
        type: RecipesActionType.loadRecipes,
        payload: recipes,
      };

      const loadRecipesAction = loadRecipesActionCreator(recipes);

      expect(loadRecipesAction).toStrictEqual(expectedLoadRecipesAction);
    });
  });
});
