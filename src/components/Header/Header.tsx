import { Link, NavLink } from "react-router-dom";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled className="main-header">
      <div className="side-header">
        <img className="logo" src="/img/logo.png" alt="hack'n'eat logo" />
        <Link to="/">
          <div className="title-container">
            <h1>Hack'n'Eat</h1>
            <h2>Eat. Code. Repeat.</h2>
          </div>
        </Link>
      </div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/favourites">Favourites</NavLink>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
