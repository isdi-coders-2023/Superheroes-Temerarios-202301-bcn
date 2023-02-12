import RecipeCardList from "./RecipeCardList";
import { render, screen } from "@testing-library/react";
import { HitsStructure } from "../../data/types";

describe("Given a CardList component", () => {
  describe("When rendered", () => {
    test("Then it should show a list of cards", () => {
      const recipes: HitsStructure = [
        {
          recipe: {
            label: "",
            image: "",
            dietLabels: [],
            healthLabels: [],
            ingredients: [],
            calories: 200,
            cuisineType: [],
            totalNutrients: {
              ENERC_KCAL: { label: "", quantity: 50, unit: "" },
              FAT: { label: "", quantity: 50, unit: "" },
              CHOCDF: { label: "", quantity: 50, unit: "" },
              FIBTG: { label: "", quantity: 50, unit: "" },
              SUGAR: { label: "", quantity: 50, unit: "" },
              PROCNT: { label: "", quantity: 50, unit: "" },
              CHOLE: { label: "", quantity: 50, unit: "" },
              VITA_RAE: { label: "", quantity: 50, unit: "" },
              VITC: { label: "", quantity: 50, unit: "" },
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
            totalTime: 50,
          },
        },
      ];

      render(<RecipeCardList recipes={recipes} />);

      const cardList = screen.getByRole("list");

      expect(cardList).toBeInTheDocument();
    });
  });
});
