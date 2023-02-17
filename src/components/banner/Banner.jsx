import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

import "../banner/banner.css";

function Banner() {
  return (
    <header className="header">
      <div>
        <img src={Logo} alt="Logo Kasa" />
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

export default Banner;
