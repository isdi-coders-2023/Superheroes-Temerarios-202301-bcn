import { useContext, useEffect } from "react";
import Button from "../../components/Button/Button";
import CardList from "../../components/CardList/CardList";
import SearchBar from "../../components/SearchBar/SearchBar";
import useApiRequest from "../../hooks/useGetRecipes";
import RecipesContext from "../../store/contexts/recipes/RecipesContext";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  const {
    recipes: { hits },
  } = useContext(RecipesContext);

  const { getApiRecipes } = useApiRequest();

  useEffect(() => {
    getApiRecipes();
  }, [getApiRecipes]);

  return (
    <HomePageStyled>
      <h2>What do you want to eat?</h2>
      <SearchBar />
      <Button
        aria-label="add-button"
        className="button-add"
        content={<i className="fa-solid fa-plus"></i>}
      />
      <CardList recipes={hits} />
    </HomePageStyled>
  );
};

export default HomePage;
