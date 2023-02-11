import { useContext } from "react";
import { HitsStructure } from "../../data/types";
import RecipesContext from "../../store/contexts/recipes/RecipesContext";
import Card from "../Card/Card";
import CardListStyled from "./CardListStyled";

interface CardListProps {
  recipes: HitsStructure;
}

const CardList = ({ recipes }: CardListProps): JSX.Element => {
  useContext(RecipesContext);

  return (
    <CardListStyled className="recipe-list">
      {recipes.map((recipe) => (
        <li key={recipe.recipe.label.length}>
          <Card recipe={recipe}></Card>
        </li>
      ))}
    </CardListStyled>
  );
};

export default CardList;
