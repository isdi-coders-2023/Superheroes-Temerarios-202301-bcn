import { HitStructure } from "../data/data";

describe("Given a useApiRequest function", () => {
  describe("When it receives a list of recipes", () => {
    test("Then it should return a recipes with type 'hitsStructure'", async () => {
      const recipes: HitStructure = {
        recipe: {
          label: "paella de Victor",
          image: "",
          dietLabels: ["lactose-free"],
          healthLabels: [],
          ingredients: [],
          calories: 50,
          totalTime: 40,
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
      };
      expect(recipes).toBe("");
    });
  });
});
