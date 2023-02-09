import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

describe("Given a Home component", () => {
  describe("When its rendered with a nutton", () => {
    test("Then it should show a button on the screen", () => {
      render(<HomePage />);

      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
    });
  });
});
