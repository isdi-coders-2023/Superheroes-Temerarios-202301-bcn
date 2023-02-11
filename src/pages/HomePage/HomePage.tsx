import { useContext, useEffect } from "react";
import Button from "../../components/Button/Button";
import CardList from "../../components/CardList/CardList";
import useApiRequest from "../../hooks/useGetRecipes";
import RecipesContext from "../../store/contexts/recipes/RecipesContext";

const HomePage = (): JSX.Element => {
  const { getApiRecipes } = useApiRequest();

  const {
    recipes: { hits },
  } = useContext(RecipesContext);

  useEffect(() => {
    getApiRecipes();
  }, [getApiRecipes]);

  return (
    <>
      <Button
        aria-label="add-button"
        className="button-add"
        content={<i className="fa-solid fa-plus"></i>}
      />

      {hits && <CardList recipes={hits} />}
    </>
  );
};

export default HomePage;
