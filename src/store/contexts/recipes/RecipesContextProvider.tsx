import { useReducer } from "react";
import recipesReducer from "../../reducers/recipesReducer";
import RecipesContext from "./RecipesContext";
import { useMemo } from "react";

interface RecipesContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const RecipesContextProvider = ({
  children,
}: RecipesContextProviderProps): JSX.Element => {
  const [recipes, dispatch] = useReducer(recipesReducer, []);
  const foo = useMemo(() => ({ recipes, dispatch }), [recipes]);

  return (
    <RecipesContext.Provider value={foo}>{children}</RecipesContext.Provider>
  );
};

export default RecipesContextProvider;
