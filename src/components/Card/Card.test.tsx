import { render, screen } from "@testing-library/react";
import { HitStructure } from "../../data/types";
import Card from "./Card";

describe("Given a Card component", () => {
  describe("When rendered", () => {
    const fakeRecipe: HitStructure = {
      recipe: {
        label: "Patatetas",
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
    };

    test("Then it should show an image", () => {
      render(<Card recipe={fakeRecipe} />);
      const imageRecipe = screen.getByRole("img");

      expect(imageRecipe).toBeInTheDocument();
    });

    test("Then it should show text with the name Patatetas", () => {
      render(<Card recipe={fakeRecipe} />);
      const expectedText = "Patatetas";

      const textResult = screen.getByText(expectedText);

      expect(textResult).toBeInTheDocument();
    });
  });
});
