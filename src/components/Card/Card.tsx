import "@fortawesome/fontawesome-free/css/all.min.css";
import { CardProps } from "../../data/types";
import { CardStyled } from "./CardStyled";

const Card = ({
  image,
  name,
  category,
  calories,
  totalTime,
}: CardProps): JSX.Element => {
  return (
    <CardStyled className="recipe-card">
      <img src={image} alt={name} className="image"></img>

      <div className="info">
        <div className="info__name">
          <span role="definition" aria-label={name} className="name__tittle">
            {name}
          </span>
        </div>

        <div className="info__category">
          <span className="category__tittle">{category}</span>
        </div>

        <div className="info__stats">
          <div className="info__stats_kcal">
            <span className="kcal">{calories}</span>
            <i className="fa-regular fa-heart fa-2x"></i>
            <div />
          </div>
          <div className="info__stats_minutes">
            <i className="fa-regular fa-clock"></i>
            <span className="minutes">{totalTime}</span>
          </div>
        </div>
      </div>
    </CardStyled>
  );
};

export default Card;
