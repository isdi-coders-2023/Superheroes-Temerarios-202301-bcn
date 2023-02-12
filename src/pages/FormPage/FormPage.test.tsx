import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RecipesContextProvider from "../../store/contexts/recipes/RecipesContextProvider";
import FormPage from "./FormPage";

describe("Given a FormPage component", () => {
  describe("When rendered", () => {
    test("Then it should show the heading 'Create your recipe'", () => {
      const headerText = "Create your recipe";

      render(
        <BrowserRouter>
          <RecipesContextProvider>
            <FormPage />
          </RecipesContextProvider>
        </BrowserRouter>
      );

      const expectedHeader = screen.getByRole("heading", { name: headerText });

      expect(expectedHeader).toBeInTheDocument();
    });
  });
});
