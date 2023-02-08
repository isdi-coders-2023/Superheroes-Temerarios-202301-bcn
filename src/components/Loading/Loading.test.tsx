import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

describe("Given a Loading component", () => {
  describe("When rendered", () => {
    test("Then it should show a loader", () => {
      const ariaName = "the page is loading";

      render(<Loading />);

      const loading = screen.getByLabelText(ariaName);

      expect(loading).toBeInTheDocument();
    });
  });
});
