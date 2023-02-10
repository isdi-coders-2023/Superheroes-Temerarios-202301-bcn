import Button from "../../components/Button/Button";
import SearchBar from "../../components/SearchBar/SearchBar";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  return (
    <HomePageStyled>
      <h2>What do you want to eat?</h2>
      <SearchBar />
      <Button
        aria-label="add-button"
        className="button-add"
        content=<i className="fa-solid fa-plus"></i>
      />
    </HomePageStyled>
  );
};

export default HomePage;
