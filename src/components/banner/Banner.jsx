import React from "react";
import "./Banner.css";
import bannerhome from "../../assets/LOGO.svg";

function Banner() {
    return (
      <section className="banner">
        <img src={bannerhome} className="banner__img" alt="baniere accueil" />
        <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
      </section>
    )
}

  export default Banner