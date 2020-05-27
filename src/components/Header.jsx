import React from "react";
import "../assets/styles/components/Header.scss";
//Se hace de esta forma porque no hay lógica detrás del header
const Header = () => (
  <header className="header">
    <img className="header__img" src="../../public/img/yorha.png" alt="LogoYorha" />
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src="../../public/img/2B.png" alt="ImagenPerfil" />
        <p>Profile</p>
      </div>
      <ul>
        <li>
          <a href="/">Cuenta</a>
        </li>
        <li>
          <a href="">Cerrar Sesión</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;