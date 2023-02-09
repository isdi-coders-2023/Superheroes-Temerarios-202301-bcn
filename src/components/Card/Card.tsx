import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import { CardStyled } from "./CardStyled";

export interface CardProps {
  image: string;
  name: string;
  category: string;
  infoLeft?: string;
  infoRight?: string;
}

export const Card = ({
  image,
  name,
  category,
  infoLeft,
  infoRight,
}: CardProps) => {
  return (
    <CardStyled className="recipe-card">
      <img
        src={image}
        alt={name}
        width="300"
        height="320"
        className="recipe-card__image"
      ></img>

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
          <div className="info__stats-kcal">
            <span className="stats__left">{infoLeft}</span>
            <i className="fa-regular fa-heart"></i>
            <div />
          </div>
          <div className="info__stats-minutes">
            <i className="fa-regular fa-clock"></i>
            <span className="stats__right">{infoRight}</span>
          </div>
        </div>
      </div>
    </CardStyled>
  );
};
