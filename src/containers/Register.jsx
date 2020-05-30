import React, { useEffect, useState } from "react";
import "../assets/styles/components/Register.scss";
import { Link } from "react-router-dom";

const Register = () => (
  <section className="register">
    <section className="register__container">
      <h2 className="register__container--title">REGISTRO</h2>
      <form className="register__container--form">
        <input className="inputRegister" type="text" placeholder="Nombre" />
        <input className="inputRegister" type="text" placeholder="Correo" />
        <input className="inputRegister" type="password" placeholder="Contraseña" />
        <button className="button">REGISTRARSE</button>
      </form>

      <p className="register__container--noaccount">
        <Link to="/login">
          Iniciar Sesión
        </Link>
      </p>
    </section>
  </section>
);

export default Register;
