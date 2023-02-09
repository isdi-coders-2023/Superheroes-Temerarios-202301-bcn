import styled from "styled-components";

export const CardStyled = styled.article`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  height: 300px;
  background: #1f1d2b;
  color: #ffffff;
  font-size: 20px;
  border-radius: 15px;
  position: relative;
  padding-top: 150px;

  &info {
    &__name {
      font-weight: 600;
      font-size: 24px;
      padding-bottom: 5px;
    }
    &__category {
      font-weight: 400;
      font-size: 20px;
      margin-bottom: 45px;
    }

    &__stats {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 35px;
      .fa-heart {
        color: red;
        position: absolute;
        left: 145px;
        bottom: 20px;
      }

      .fa-clock {
      }

      .stats__right {
        color: #2edb73;
        gap: 30px;
      }
    }
  }

  &__image {
    max-width: 194px;
    max-height: 187px;
    border-radius: 50%;
    top: -50px;
    position: absolute;
  }
`;
