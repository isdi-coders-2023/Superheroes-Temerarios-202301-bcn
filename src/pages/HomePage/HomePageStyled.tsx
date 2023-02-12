import styled from "styled-components";

const HomePageStyled = styled.main`
  text-align: center;
  font-size: 24px;
  font-weight: normal;
  margin-top: 65px;
  padding-left: 20px;
  padding-right: 20px;

  h2 {
    font-size: 1.7rem;
  }

  div {
    display: flex;
    justify-content: center;
  }
  div input {
    margin-top: 24px;
  }

  .search-container {
    display: flex;
    gap: 20px;
  }
`;

export default HomePageStyled;
