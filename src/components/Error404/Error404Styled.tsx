import styled from "styled-components";

const Error404Styled = styled.div`
  .error404 {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    text-align: center;

    &__title {
      width: 535px;
      height: 60px;
      text-transform: uppercase;
      font-weight: 800;
      font-size: 2.25rem;
      color: #2edb73;
      border-bottom: 3px solid #2edb73;
    }

    &__number {
      width: 535px;
      height: 100px;
      font-weight: 800;
      font-size: 4rem;
      border-bottom: 3px solid #2edb73;
    }

    &__image {
      width: 160px;
    }
  }
`;

export default Error404Styled;
