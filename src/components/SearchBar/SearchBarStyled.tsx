import styled from "styled-components";

const SearchBarStyled = styled.div`
  display: flex;
  gap: 17px;

  .searchbar {
    box-sizing: border-box;
    height: 50px;
    width: 279px;
    padding: 0;
    padding-left: 15px;
    font-family: inherit;
    background-color: #1f1d2b;
    border: none;
    outline: none;
    border-radius: 10px;
    color: inherit;
    font-size: 1.1rem;

    &::placeholder {
      font-weight: 400;
      color: #7f859d;
      font-size: 1rem;
    }
  }
`;

export default SearchBarStyled;
