import RecipesContext, {
  RecipesContextStructure,
} from "../store/contexts/recipes/RecipesContext";

interface MockContextProviderProps {
  children: JSX.Element | JSX.Element[];
  mockStore: RecipesContextStructure;
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
