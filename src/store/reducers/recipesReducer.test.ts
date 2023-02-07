import { RecipesActionType } from "../actions/recipes/types";
import recipesReducer from "./recipesReducer";

describe("Given a recipesReducer function", () => {
  describe("When it receives a list of 2 recipes through the loadRecipes action", () => {
    test("Then it should return a list of 2 recipes", () => {
      const recipeList = [
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
      const recipeList = [
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
      const action = {
        type: RecipesActionType.defaultTest,
        payload: recipeList,
      };

      const newRecipeList = recipesReducer(recipeList, action);

      expect(newRecipeList).toStrictEqual(recipeList);
    });
  });
});
