import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("Given a SearchBar component", () => {
  describe("When rendered on the screen", () => {
    test("Then it should show an input on the screen", () => {
      render(
        <SearchBar
          arialabel="search-input"
          type="text"
          className="searchbar"
          placeholder="Find your recipe"
        />
      );
      const input = screen.getByRole("textbox", { name: /search-input/i });

      expect(input).toBeInTheDocument();
    });
  });
});
