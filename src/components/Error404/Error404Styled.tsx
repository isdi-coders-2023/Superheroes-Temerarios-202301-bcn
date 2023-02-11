import styled from "styled-components";

const Error404Styled = styled.div`
  margin-top: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;

  .error404__title {
    width: 535px;
    height: 60px;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 2.25rem;
    color: #2edb73;
    border-bottom: 3px solid #2edb73;
  }

  .error404__number {
    width: 535px;
    height: 100px;
    font-weight: 800;
    font-size: 4rem;
    border-bottom: 3px solid #2edb73;
  }

  .error404__image {
    width: 160px;
  }
`;

export default Error404Styled;
