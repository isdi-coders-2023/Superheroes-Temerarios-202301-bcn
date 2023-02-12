import { useContext, useEffect } from "react";
import Button from "../../components/Button/Button";
import RecipeCardList from "../../components/RecipeCardList/RecipeCardList";
import SearchBar from "../../components/SearchBar/SearchBar";
import useApi from "../../hooks/useApi";
import RecipesContext from "../../store/contexts/recipes/RecipesContext";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  const {
    recipes: { hits },
  } = useContext(RecipesContext);

  const { getApiRecipes } = useApi();

  useEffect(() => {
    getApiRecipes();
  }, [getApiRecipes]);

  return (
    <HomePageStyled>
      <h2 className="heading">What do you want to eat?</h2>
      <SearchBar />
      <Button
        aria-label="add-button"
        className="button-add"
        content={<i className="fa-solid fa-plus"></i>}
      />
      <RecipeCardList recipes={hits} />
    </HomePageStyled>
  );
};

export default HomePage;
