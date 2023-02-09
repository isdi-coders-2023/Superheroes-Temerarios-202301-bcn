import styled from "styled-components";

export const CardStyled = styled.article`
  box-sizing: border-box;
  height: 300px;
  width: 320px;
  border: 2px black solid;
  border-radius: 15px;
  background-color: #1f1d2b;
  position: absolute;
  text-align: center;
  color: #ffff;

  .image {
    height: 180px;
    width: 190px;
    border-radius: 50%;
    position: relative;
    top: -45px;
  }

  .info {
    bottom: 55px;
    padding-top: 10px;
    position: relative;
    &__name {
      font-weight: 600;
      font-size: 24px;
      padding-bottom: 5px;
      padding-top: 5px;
    }
    &__category {
      font-weight: 400;
      font-size: 20px;
      margin-bottom: 25px;
    }

    &__stats {
      display: flex;
      justify-content: space-around;
      font-size: 20px;
      padding: 0 20px 0 20px;
      gap: 130px;
      padding-top: 20px;

      .fa-heart {
        box-sizing: border-box;
        color: #ffff;
        position: absolute;
        left: 137px;
        bottom: -8px;
        transition: color 0.5s;
      }

      .fa-heart:hover {
        color: red;
        font-size: 2.55rem;
      }

      .fa-clock {
      }

      &_kcal {
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
