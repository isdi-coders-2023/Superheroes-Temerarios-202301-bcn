import styled from "styled-components";

const CardListStyled = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    flex-direction: row;
    min-width: 500px;
  }
  .meal-list {
    padding: 0;
  }
`;

export default CardListStyled;
