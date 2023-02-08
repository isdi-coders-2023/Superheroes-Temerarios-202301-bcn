import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button Component", () => {
  describe("When rendered with content '+'", () => {
    test("Then it should show a button with '+' text on it", () => {
      const butonContent = "+";

      render(<Button className="" content={butonContent} />);
      const button = screen.getByRole("button", { name: butonContent });

      expect(button).toBeInTheDocument();
    });
  });
});
