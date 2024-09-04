import {
  HeaderContainer,
  HeaderTypography,
  HeaderImg,
} from "../../styles/header";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  console.log(token);
  const handleClick = (e) => {
    setToken("");
  };

  return (
    <HeaderContainer>
      <Link to="/">
        <HeaderImg src={logo} />
      </Link>

      {token === null ? (
        <Link to="/" style={{ textDecoration: "none" }}>
          <HeaderTypography> Connexion </HeaderTypography>
        </Link>
      ) : (
        <Link to="/" onClick={handleClick} style={{ textDecoration: "none" }}>
          <HeaderTypography> Deconnexion</HeaderTypography>
        </Link>
      )}
    </HeaderContainer>
  );
}

export default Header;
