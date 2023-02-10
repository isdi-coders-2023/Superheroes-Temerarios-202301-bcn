import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("Given an App Component", () => {
  describe("When rendered with title 'Hack'n'Eat'", () => {
    test("Then it should show a header with 'Hack'n'Eat' title text on it", () => {
      const headerTitle = "Hack'n'Eat";

      render(<App />, { wrapper: BrowserRouter });
      const expectedText = screen.getByText(headerTitle);

      expect(expectedText).toBeInTheDocument();
    });
  });
});
