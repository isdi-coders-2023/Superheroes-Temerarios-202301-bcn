import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button Component", () => {
  describe("When rendered", () => {
    test("Then it should show buttons", () => {
      render(<Button type="" content="" />);

      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
    });
  });
});
