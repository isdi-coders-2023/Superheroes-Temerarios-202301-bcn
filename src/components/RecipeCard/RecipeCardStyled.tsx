import styled from "styled-components";

export const RecipeCardStyled = styled.article`
  box-sizing: border-box;
  height: 300px;
  width: 320px;
  border-radius: 15px;
  background-color: #1f1d2b;
  text-align: center;
  color: #ffff;
  margin: 80px 10px -10px 15px;

  .image {
    height: 180px;
    width: 190px;
    border-radius: 50%;
    position: relative;
    top: -45px;
  }

  .info {
    display: flex;
    flex-direction: column;
    bottom: 55px;
    padding-top: 10px;
    position: relative;
    &__name {
      padding: 0 10px;
      font-weight: 600;
      font-size: 24px;
      padding-bottom: 5px;
      padding-top: 5px;
    }
    &__category {
      font-weight: 400;
      font-size: 20px;
    }

    &__stats {
      display: flex;
      justify-content: space-around;
      font-size: 20px;
      padding: 0 20px 0 20px;
      gap: 130px;
      padding-top: 30px;

      .fa-heart {
        box-sizing: border-box;
        color: #ffff;
        position: absolute;
        left: 137px;
        bottom: -8px;
        transition: color 0.5s;
      }

      .fa-heart:active {
        color: red;
        font-size: 2.55rem;
      }

      &_minutes {
        display: flex;
        position: relative;
        justify-content: space-between;
        .minutes {
          color: #2edb73;
        }

        .fa-clock {
          position: absolute;
          right: 60px;
          align-self: center;
        }
      }
    }
  }
`;
