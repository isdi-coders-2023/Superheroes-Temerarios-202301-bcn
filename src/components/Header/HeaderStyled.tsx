import styled from "styled-components";

const HeaderStyled = styled.header`
  background-color: #1f1d2b;
  height: 150px;
  color: white;
  font-size: 25px;
  border-bottom: 3px solid #2edb73;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;

  nav {
    display: flex;
    gap: 20px;
  }

  .side-header {
    display: flex;
    gap: 20px;
  }

  .title-container h2 {
    display: flex;
    flex-direction: column;
    align-items: start;
    font-size: 24px;
    color: #2edb73;
  }

  .title-container h1 {
    align-items: start;
  }

  .logo {
    height: 100px;
    width: 200;
  }
`;

export default HeaderStyled;
