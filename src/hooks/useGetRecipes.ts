import { useCallback, useContext } from "react";
import { RecipeListStructure } from "../data/types";
import { loadRecipesActionCreator } from "../store/actions/recipes/recipesActionCreator";
import RecipesContext from "../store/contexts/recipes/RecipesContext";

const apiUrl = process.env.REACT_APP_HACKANDEAT_URL!;
const apiParams = process.env.REACT_APP_PARAMS!;
const apiKey = process.env.REACT_APP_API_KEY!;
const dietParam = process.env.REACT_APP_DIET_PARAM!;

const useApiRequest = () => {
  const { dispatch } = useContext(RecipesContext);

  const getApiRecipes = useCallback(async () => {
    try {
      const listResponse = await fetch(
        `${apiUrl}${apiParams}${apiKey}${dietParam}`
      );

      const result = (await listResponse.json()) as RecipeListStructure;
      dispatch(loadRecipesActionCreator(result));
    } catch (error) {
      return (error as Error).message;
    }
  }, [dispatch]);

  return { getApiRecipes };
};

export default useApiRequest;
