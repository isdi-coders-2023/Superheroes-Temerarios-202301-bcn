import { render, screen } from "@testing-library/react";
import ErrorFourOFour from "./ErrorFourOFour";

describe("Given an Error404 component", () => {
  describe("When rendered on the screen", () => {
    test("Then it should display a 'Page not found' message", () => {
      const expectedErrorMessage = "Page not found";

      render(<ErrorFourOFour />);
      const errorMessage = screen.getByText(expectedErrorMessage);

      expect(errorMessage).toBeInTheDocument();
    });
  });
});
