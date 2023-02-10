import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

describe("Given a Header Component", () => {
  describe("When rendered with title 'Hack'n'Eat'", () => {
    test("Then it should show a header with 'Hack'n'Eat' title text on it", () => {
      const headerTitle = "Hack'n'Eat";

      render(<Header />, { wrapper: BrowserRouter });
      const header = screen.getByText(headerTitle);

      expect(header).toBeInTheDocument();
    });
  });
});
