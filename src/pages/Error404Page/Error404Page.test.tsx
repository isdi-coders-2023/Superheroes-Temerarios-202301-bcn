import { render, screen } from "@testing-library/react";
import ErrorFourOFourPage from "./Error404Page";

describe("Given an Error404 page", () => {
  describe("When rendered on the screen", () => {
    test("Then it should show a 'Page not found' message", () => {
      const expectedErrorMessage = "Page not found";

      render(<ErrorFourOFourPage />);
      const errorFourOFourPage = screen.getByText(expectedErrorMessage);

      expect(errorFourOFourPage).toBeInTheDocument();
    });
  });
});
