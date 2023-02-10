import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: #2edb73;
  width: ${(props) => (props.className === "button-add" ? "55px" : "43px")};
  height: ${(props) => (props.className === "button-add" ? "55px" : "43px")};
  border: none;
  border-radius: 10px;
  font-weight: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #abd7bc;
  }

  i {
    font-size: ${(props) =>
      props.className === "button-add" ? "2rem" : "1.3rem"};
    color: #1f1d2b;
  }
`;

export default ButtonStyled;
