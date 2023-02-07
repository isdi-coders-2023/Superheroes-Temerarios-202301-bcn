import { createContext } from "react";
import { HitsStructure } from "../../../data/data";
import { RecipeAction } from "../../actions/recipes/types";

interface RecipesContextStructure {
  recipes: HitsStructure;
  dispatch: React.Dispatch<RecipeAction>;
}

const RecipesContext = createContext({} as RecipesContextStructure);

export default RecipesContext;
