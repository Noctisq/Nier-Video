import React from "react";
import "../assets/styles/components/Header.scss";
import logo from '../assets/IMG/yorha.png'
import profilePic from '../assets/IMG/2B.png'
//Se hace de esta forma porque no hay lógica detrás del header
const Header = () => (
  <header className="header">
    <img className="header__img" src={logo} alt="LogoYorha" />
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={profilePic} alt="ImagenPerfil" />
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