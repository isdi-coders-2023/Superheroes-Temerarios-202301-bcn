import { render, screen } from "@testing-library/react";
import FavouritesPage from "./FavouritesPage";

describe("Given a favourites page", () => {
  describe("When rendered with title 'Your Favorite Recipes'", () => {
    test("Then it should show a header with 'Your Favorite Recipes' title text on it", () => {
      const favouritesTitle = "Your Favorite Recipes";

      render(<FavouritesPage />);
      const title = screen.getByText(favouritesTitle);

      expect(title).toBeInTheDocument();
    });
  });
});
