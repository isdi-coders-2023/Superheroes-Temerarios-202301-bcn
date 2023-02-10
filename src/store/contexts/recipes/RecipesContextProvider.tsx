import { useReducer, useMemo } from "react";
import { RecipeListStructure } from "../../../data/types";
import recipesReducer from "../../reducers/recipesReducer";
import RecipesContext from "./RecipesContext";

interface RecipesContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const RecipesContextProvider = ({
  children,
}: RecipesContextProviderProps): JSX.Element => {
  const initialRecipes: RecipeListStructure = {
    from: 0,
    to: 0,
    _links: { next: { href: "" } },
    hits: [],
  };

  const [recipes, dispatch] = useReducer(recipesReducer, {
    ...initialRecipes,
  });

  const store = useMemo(() => ({ recipes, dispatch }), [recipes]);

  return (
    <RecipesContext.Provider value={store}>{children}</RecipesContext.Provider>
  );
};

export default RecipesContextProvider;
