import React, { useEffect, useState } from "react";
import {connect} from 'react-redux';
import "../assets/styles/components/Login.scss";
import {loginRequest} from '../actions';
import googleIcon from "../assets/IMG/google.png";
import twitterIcon from "../assets/IMG/twitter.png";
import { Link } from "react-router-dom";

const Login = (props) => {

  const [form, setValues] = useState({
    email:"",
  });

  const handleInput = event =>{

    setValues({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
    
  }
  return (
    <section className="login">
      <section className="login__container">
        <h2 tabIndex="0" className="login__container--title">
          Inicia Sesión
        </h2>
        <form className="login__container--form" onSubmit = {handleSubmit}>
          <input  onChange = {handleInput} name ="email" className="inputLogin" type="text" placeholder="Correo" />
          <input
            name = "contraseña"
            className="inputLogin"
            type="password"
            placeholder="Contraseña"
            onChange = {handleInput}
          />
          <button className="button">Iniciar sesión</button>
          <div className="login__container--remember">
            <label>
              <input type="checkbox" id="ckbox1" value="recordar" />
              Recuérdame
            </label>
            <a href="/">Olvidé mi contraseña</a>
          </div>
        </form>

        <section className="login__container--social-media">
          <div className="login__container--social-media-img">
            <img
              width="30px"
              height="30px"
              src={googleIcon}
              alt="Iniciar sesión con google"
            />
            <span>Inicia sesión con Google</span>
          </div>

          <div className="login__container--social-media-img">
            <img
              width="30px"
              height="30px"
              src={twitterIcon}
              alt="Iniciar sesión con twitter"
            />
            <span>Inicia sesión con Twitter</span>
          </div>
        </section>
        <p className="login__container--noaccount">
          No cuentas con ninguna cuenta
          <Link to="/register">Regístrate</Link>
        </p>
      </section>
    </section>
  );
};

const mapDispatchToProps ={
  loginRequest
}
export default connect(null, mapDispatchToProps)(Login)