import { createContext } from "react";
import { RecipeListStructure } from "../../../data/types";
import { RecipeAction } from "../../actions/recipes/types";

export interface RecipesContextStructure {
  recipes: RecipeListStructure;
  dispatch: React.Dispatch<RecipeAction>;
}

const RecipesContext = createContext<RecipesContextStructure>(
  {} as RecipesContextStructure
);

export default RecipesContext;
