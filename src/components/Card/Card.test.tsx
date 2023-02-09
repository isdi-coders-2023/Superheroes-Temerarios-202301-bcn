import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Given a Card component", () => {
  describe("When rendered", () => {
    test("Then it should show text with the name Patatetas", () => {
      render(
        <Card
          category=""
          image=""
          name="Patatetas"
          calories="500"
          totalTime="20"
        />
      );
      const expectedText = "Patatetas";

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
