import SearchBar from "../SearchBar/SearchBar";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled className="main-header">
      <div className="side-header">
        <img className="logo" src="/img/logo.png" alt="hack'n'eat logo" />
        <div className="title-container">
          <h1>Hack'n'Eat</h1>
          <h2>Eat. Code. Repeat.</h2>
        </div>
      </div>
      <SearchBar />
      <nav>
        <a href="home">Home</a>
        <a href="favourites">Favourites</a>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
