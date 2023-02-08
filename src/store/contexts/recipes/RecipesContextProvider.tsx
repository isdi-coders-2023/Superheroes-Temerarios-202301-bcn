import { useReducer, useMemo } from "react";
import recipesReducer from "../../reducers/recipesReducer";
import RecipesContext from "./RecipesContext";

interface RecipesContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const RecipesContextProvider = ({
  children,
}: RecipesContextProviderProps): JSX.Element => {
  const [recipes, dispatch] = useReducer(recipesReducer, []);
  const recipesProviderProps = useMemo(
    () => ({ recipes, dispatch }),
    [recipes]
  );

  return (
    <RecipesContext.Provider value={recipesProviderProps}>
      {children}
    </RecipesContext.Provider>
  );
};

export default RecipesContextProvider;