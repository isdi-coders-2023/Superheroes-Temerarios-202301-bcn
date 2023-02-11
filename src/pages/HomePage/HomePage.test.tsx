import { render, screen } from "@testing-library/react";
import RecipesContextProvider from "../../store/contexts/recipes/RecipesContextProvider";
import HomePage from "./HomePage";

describe("Given a HomePage component", () => {
  describe("When rendered", () => {
    test("Then it should show the heading 'What do you want to eat?'", () => {
      const headerText = "What do you want to eat?";

      render(
        <RecipesContextProvider>
          <HomePage />
        </RecipesContextProvider>
      );

      const expectedHeader = screen.getByRole("heading", { name: headerText });

      expect(expectedHeader).toBeInTheDocument();
    });
  });
});
