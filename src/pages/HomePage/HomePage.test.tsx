import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

describe("Given a Home component", () => {
  describe("When its rendered with a heading", () => {
    test("Then it should show a heading on the screen", () => {
      render(<HomePage />);

      const heading = screen.getByRole("heading", {
        level: 1,
        name: "Hack'n'Eat",
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
