import { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import SearchBar from "../../components/SearchBar/SearchBar";
import useApiRequest from "../../hooks/useGetRecipes";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  const { getApiRecipes } = useApiRequest();

  useEffect(() => {
    getApiRecipes();
  }, [getApiRecipes]);

  return (
    <HomePageStyled>
      <h2>What do you want to eat?</h2>
      <div className="search-container">
        <SearchBar
          arialabel="search-input"
          type="text"
          className="searchbar"
          placeholder="Find your recipe"
        />
        <Button
          aria-label="search"
          className="button-submit"
          content={<i className="fa-solid fa-arrow-right"></i>}
        />
      </div>
      <Link to="/form">
        <Button
          aria-label="add-button"
          className="button-add"
          content={<i className="fa-solid fa-plus"></i>}
        />
      </Link>
    </HomePageStyled>
  );
};

export default HomePage;
