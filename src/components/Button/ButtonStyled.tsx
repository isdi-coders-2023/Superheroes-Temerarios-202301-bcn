import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: #2edb73;
  width: 55px;
  height: 55px;
  border: none;
  border-radius: 10px;
  font-size: 45px;
  font-weight: 5px;
  position: fixed;
  bottom: 20px;
  right: 20px;

  @media (min-width: 1000px) {
    display: none;
  }
`;

export default ButtonStyled;
