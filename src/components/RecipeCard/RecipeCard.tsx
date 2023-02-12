import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";
import { HitStructure } from "../../data/types";
import { RecipeCardStyled } from "./RecipeCardStyled";

interface RecipeCardProps {
  recipe: HitStructure;
}

const RecipeCard = ({
  recipe: {
    recipe: { calories, cuisineType, image, label, totalTime },
  },
}: RecipeCardProps): JSX.Element => {
  const [isActive, setIsActive] = useState(false);

  const isFavorite = (event: any) => {
    setIsActive((current) => !current);
  };

  return (
    <RecipeCardStyled className="recipe-card">
      <img src={image} alt={label} className="image"></img>

      <div className="info">
        <div className="info__name">
          <span role="definition" aria-label={label} className="name__tittle">
            {label}
          </span>
        </div>

        <div className="info__category">
          <span className="category__tittle">{cuisineType}</span>
        </div>

        <div className="info__stats">
          <div className="info__stats_kcal">
            <span className="kcal">{calories.toFixed(2)}Kcal</span>
            <i
              onClick={isFavorite}
              className={
                isActive
                  ? "fa-regular fa-heart fa-2x active"
                  : "fa-regular fa-heart fa-2x"
              }
            ></i>
            <div />
          </div>
          <div className="info__stats_minutes">
            <i className="fa-regular fa-clock"></i>
            <span className="minutes">{totalTime}min</span>
          </div>
        </div>
      </div>
    </RecipeCardStyled>
  );
};

export default RecipeCard;
