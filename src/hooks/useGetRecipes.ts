import { useCallback, useContext } from "react";
import { RecipeListStructure } from "../data/data";
import { loadRecipesActionCreator } from "../store/actions/recipes/recipesActionCreators";
import RecipesContext from "../store/contexts/recipes/RecipesContext";

export const useApiRequest = () => {
  const { dispatch } = useContext(RecipesContext);

  const getApiRecipes = useCallback(async () => {
    try {
      const list = await fetch(`${process.env.REACT_APP_HACKANDEAT_URL!}`);
      const response = (await list.json()) as RecipeListStructure;
      dispatch(loadRecipesActionCreator(response.hits));
    } catch (error) {
      return (error as Error).message;
    }
  }, [dispatch]);

  return { getApiRecipes };
};

export default useApiRequest;
