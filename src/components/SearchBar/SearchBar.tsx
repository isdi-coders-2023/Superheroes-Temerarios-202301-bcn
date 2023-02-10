import "@fortawesome/fontawesome-free/css/all.min.css";
import Button from "../Button/Button";

const SearchBar = (): JSX.Element => {
  return (
    <div>
      <input placeholder="Find your recipe"></input>
      <Button
        aria-label="search"
        className="button button-submit"
        content=<i className="fa-solid fa-arrow-right"></i>
      />
    </div>
  );
};

export default SearchBar;
