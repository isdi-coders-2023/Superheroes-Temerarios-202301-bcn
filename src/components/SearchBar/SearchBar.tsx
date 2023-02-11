import "@fortawesome/fontawesome-free/css/all.min.css";
import SearchBarStyled from "./SearchBarStyled";

interface SearchBarProps {
  arialabel: string;
  type: string;
  className: string;
  placeholder: string;
}

const SearchBar = ({
  arialabel,
  type,
  className,
  placeholder,
}: SearchBarProps): JSX.Element => {
  return (
    <SearchBarStyled>
      <input
        aria-label={arialabel}
        type={type}
        className={className}
        placeholder={placeholder}
      ></input>
    </SearchBarStyled>
  );
};

export default SearchBar;
