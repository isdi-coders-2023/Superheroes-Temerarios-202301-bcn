import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

describe("Given a Home component", () => {
  describe("When its rendered with buttons", () => {
    test("Then it should show a more than 1 button on the screen", () => {
      render(<HomePage />);

      const button = screen.getAllByRole("button");

      expect(button.length).toBeGreaterThan(1);
    });
  });
});
