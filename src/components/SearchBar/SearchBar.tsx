import "@fortawesome/fontawesome-free/css/all.min.css";
import Button from "../Button/Button";
import SearchBarStyled from "./SearchBarStyled";

const SearchBar = (): JSX.Element => {
  return (
    <SearchBarStyled>
      <input
        aria-label="search-input"
        type="text"
        className="searchbar"
        placeholder="Find your recipe"
      ></input>
      <Button
        aria-label="search"
        className="button-submit"
        content={<i className="fa-solid fa-arrow-right"></i>}
      />
    </SearchBarStyled>
  );
};

export default SearchBar;
