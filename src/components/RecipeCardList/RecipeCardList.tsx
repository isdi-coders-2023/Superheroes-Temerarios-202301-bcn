import { useContext } from "react";
import { HitsStructure } from "../../data/types";
import RecipesContext from "../../store/contexts/recipes/RecipesContext";
import RecipeCard from "../RecipeCard/RecipeCard";
import RecipeCardListStyled from "./RecipeCardListStyled";

interface RecipeCardListProps {
  recipes: HitsStructure;
}

const RecipeCardList = ({ recipes }: RecipeCardListProps): JSX.Element => {
  useContext(RecipesContext);

  return (
    <RecipeCardListStyled className="recipe-list">
      {recipes.map((recipe) => (
        <li key={recipe.recipe.label.length + recipe.recipe.calories}>
          <RecipeCard recipe={recipe}></RecipeCard>
        </li>
      ))}
    </RecipeCardListStyled>
  );
};

export default RecipeCardList;
