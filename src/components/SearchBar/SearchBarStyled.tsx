import styled from "styled-components";

const SearchBarStyled = styled.div`
  display: flex;
  gap: 17px;

  .searchbar {
    box-sizing: border-box;
    height: 43px;
    width: 300px;
    padding: 0;
    padding-left: 15px;
    font-family: inherit;
    background-color: #393c49;
    border: none;
    outline: none;
    border-radius: 10px;

    &::placeholder {
      font-weight: 400;
      color: #7f859d;
      font-size: 1rem;
    }
  }
`;

export default SearchBarStyled;
