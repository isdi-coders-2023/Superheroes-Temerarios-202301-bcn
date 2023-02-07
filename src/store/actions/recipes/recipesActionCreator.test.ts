import { HitsStructure } from "../../../data/data";
import { loadRecipesActionCreator } from "./recipesActionCreators";
import { RecipesActionType } from "./types";

describe("Given a recipesActionCreators function", () => {
  describe("When it recieves a list of two recipes", () => {
    test("Then it should return an action with type 'LoadRecipes' and the two recipes as payload", () => {
      const recipes: HitsStructure = [
        {
          recipe: {
            label: "diet",
            image: "",
            dietLabels: [],
            healthLabels: [],
            ingredients: [],
            calories: 10,
            totalTime: 20,
            cuisineType: [],
            totalNutrients: {
              ENERC_KCAL: { label: "", quantity: 1, unit: "" },
              FAT: { label: "", quantity: 1, unit: "" },
              CHOCDF: { label: "", quantity: 1, unit: "" },
              FIBTG: { label: "", quantity: 1, unit: "" },
              SUGAR: { label: "", quantity: 1, unit: "" },
              PROCNT: { label: "", quantity: 1, unit: "" },
              CHOLE: { label: "", quantity: 1, unit: "" },
              VITA_RAE: { label: "", quantity: 1, unit: "" },
              VITC: { label: "", quantity: 1, unit: "" },
            },
            totalDaily: {
              ENERC_KCAL: { label: "", quantity: 1, unit: "" },
              FAT: { label: "", quantity: 1, unit: "" },
              CHOCDF: { label: "", quantity: 1, unit: "" },
              FIBTG: { label: "", quantity: 1, unit: "" },
              SUGAR: { label: "", quantity: 1, unit: "" },
              PROCNT: { label: "", quantity: 1, unit: "" },
              CHOLE: { label: "", quantity: 1, unit: "" },
              VITA_RAE: { label: "", quantity: 1, unit: "" },
              VITC: { label: "", quantity: 1, unit: "" },
            },
          },
        },
        {
          recipe: {
            label: "vegetarian",
            image: "",
            dietLabels: [],
            healthLabels: [],
            ingredients: [],
            calories: 100,
            totalTime: 30,
            cuisineType: [],
            totalNutrients: {
              ENERC_KCAL: { label: "", quantity: 1, unit: "" },
              FAT: { label: "", quantity: 1, unit: "" },
              CHOCDF: { label: "", quantity: 1, unit: "" },
              FIBTG: { label: "", quantity: 1, unit: "" },
              SUGAR: { label: "", quantity: 1, unit: "" },
              PROCNT: { label: "", quantity: 1, unit: "" },
              CHOLE: { label: "", quantity: 1, unit: "" },
              VITA_RAE: { label: "", quantity: 1, unit: "" },
              VITC: { label: "", quantity: 1, unit: "" },
            },
            totalDaily: {
              ENERC_KCAL: { label: "", quantity: 1, unit: "" },
              FAT: { label: "", quantity: 1, unit: "" },
              CHOCDF: { label: "", quantity: 1, unit: "" },
              FIBTG: { label: "", quantity: 1, unit: "" },
              SUGAR: { label: "", quantity: 1, unit: "" },
              PROCNT: { label: "", quantity: 1, unit: "" },
              CHOLE: { label: "", quantity: 1, unit: "" },
              VITA_RAE: { label: "", quantity: 1, unit: "" },
              VITC: { label: "", quantity: 1, unit: "" },
            },
          },
        },
      ];
      const expectedLoadRecipesAction = {
        type: RecipesActionType.loadRecipes,
        payload: recipes,
      };

      const loadRecipesAction = loadRecipesActionCreator(recipes);

      expect(loadRecipesAction).toStrictEqual(expectedLoadRecipesAction);
    });
  });
});
