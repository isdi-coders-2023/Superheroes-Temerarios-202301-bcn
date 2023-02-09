import { render, screen } from "@testing-library/react";
import Error404 from "./Error404";

describe("Given an Error404 component", () => {
  describe("When rendered on the screen", () => {
    test("Then it should display a 'Page not found' message", () => {
      const expectedErrorMessage = "Page not found";

      render(<Error404 />);
      const errorMessage = screen.getByText(expectedErrorMessage);

      expect(errorMessage).toBeInTheDocument();
    });
  });
});
