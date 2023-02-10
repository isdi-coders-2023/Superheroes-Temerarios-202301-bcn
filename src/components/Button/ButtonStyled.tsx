import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: #2edb73;
  width: ${(props) => (props.className === "add-button" ? "55px" : "43px")};
  height: ${(props) => (props.className === "add-button" ? "55px" : "43px")};
  border: none;
  border-radius: 10px;
  font-weight: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    font-size: ${(props) =>
      props.className === "add-button" ? "2rem" : "1.3rem"};
  }
`;

export default ButtonStyled;
