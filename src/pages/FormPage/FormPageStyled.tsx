import styled from "styled-components";

const FormPageStyled = styled.section`
  padding-left: 20px;
  padding-right: 20px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .button-recipe {
    width: 348px;
    height: 64px;
    margin-top: 100px;
  }

  .button-recipe-container {
    display: flex;
    flex-direction: row;
    gap: 12px;
  }
  .button-recipe-content {
    font-style: normal;
    font-family: barlow, sans-serif;
    color: #1f1d2b;
  }

  .searchbar {
    min-width: 92vw;
    height: 53;
  }

  .form-titles {
    color: #2edb73;
    font-size: 20px;
    font-weight: medium;
    margin-top: 38px;
    margin-bottom: 20px;
    text-align: left;
  }

  h2 {
    margin-top: 50px;
  }
`;

export default FormPageStyled;
