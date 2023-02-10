import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button Component", () => {
  describe("When rendered with an icon of a plus", () => {
    test("Then it should show a button with a plus icon in it", () => {
      const buttonContent = <i className="fa-solid fa-plus"></i>;

      render(<Button aria-label="add" className="" content={buttonContent} />);
      const button = screen.getByRole("button", { name: /add/i });

      expect(button).toBeInTheDocument();
    });
  });
});
