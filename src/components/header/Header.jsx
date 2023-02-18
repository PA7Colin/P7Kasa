import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

import "../header/header.css";

function Header() {
  return (
    <header className="header">
      <div>
        <Link id="home" to='/'>
        <img src={Logo} alt="Logo Kasa" className="logo" />
        </Link>
      </div>
      <nav className="navbar">
        <Link id="home" to="/">
          Accueil
        </Link>

        <Link id="about" to="/about">
          A propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
