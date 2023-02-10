import styled from "styled-components";

const HeaderStyled = styled.header`
  background-color: #1f1d2b;
  height: 144px;
  color: white;
  font-size: 20px;
  border-bottom: 3px solid #2edb73;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;

  nav {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
    font-size: 24px;
    bottom: -4px;
  }

  .side-header {
    display: flex;
    gap: 30px;
  }

  .title-container h2 {
    display: flex;
    flex-direction: column;
    align-items: start;
    font-size: 20px;
    font-weight: 00;
    color: #2edb73;
  }

  .title-container h1 {
    align-items: start;
    font-weight: bold;
  }

  .logo {
    display: none;
    height: 75px;
    width: 150;
  }

  @media (min-width: 1100px) {
    padding-left: 40px;
    padding-right: 40px;
    font-size: 30px;
    .logo {
      position: relative;
      display: initial;
      bottom: -15px;
    }
    nav {
      flex-direction: row;
      gap: 40px;
    }
    .title-container h2 {
      font-size: 24;
    }
  }
`;

export default HeaderStyled;
