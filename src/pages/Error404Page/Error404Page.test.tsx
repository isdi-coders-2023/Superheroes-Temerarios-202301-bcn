import { render, screen } from "@testing-library/react";
import Error404Page from "./Error404Page";

describe("Given an Error404 page", () => {
  describe("When rendered on the screen", () => {
    test("Then it should show a 'Page not found' message", () => {
      const expectedErrorMessage = "Page not found";

      render(<Error404Page />);
      const error404Page = screen.getByText(expectedErrorMessage);

      expect(error404Page).toBeInTheDocument();
    });
  });
});
