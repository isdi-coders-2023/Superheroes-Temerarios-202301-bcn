import { HitsStructure } from "../data/types";
import RecipesContext from "../store/contexts/recipes/RecipesContext";

interface MockContextProviderProps {
  children: JSX.Element | JSX.Element[];
  mockStore: RecipeStructure;
}

interface RecipeStructure {
  dispatch: React.Dispatch<any>;
  recipes: HitsStructure;
}

const MockContextProvider = ({
  children,
  mockStore,
}: MockContextProviderProps): JSX.Element => {
  return (
    <RecipesContext.Provider value={mockStore}>
      {children}
    </RecipesContext.Provider>
  );
};

export default MockContextProvider;
