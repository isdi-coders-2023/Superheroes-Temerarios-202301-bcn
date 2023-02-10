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
    const listResponse = await fetch(
      `${apiUrl}${apiParams}${apiKey}${dietParam}`
    );

    const result = (await listResponse.json()) as RecipeListStructure;
    dispatch(loadRecipesActionCreator(result));
  }, [dispatch]);

  return { getApiRecipes };
};

export default useApiRequest;
