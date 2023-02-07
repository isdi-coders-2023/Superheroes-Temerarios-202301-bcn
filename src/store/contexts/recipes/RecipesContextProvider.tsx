import { useReducer } from "react";
import recipesReducer from "../../reducers/recipesReducer";
import RecipesContext from "./RecipesContext";

interface RecipesContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const RecipesContextProvider = ({
  children,
}: RecipesContextProviderProps): JSX.Element => {
  const [recipes, dispatch] = useReducer(recipesReducer, []);

  return (
    <RecipesContext.Provider value={{ recipes, dispatch }}>
      {children}
    </RecipesContext.Provider>
  );
};

export default RecipesContextProvider;
