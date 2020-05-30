import React from "react";
import { connect } from "react-redux";
import "../assets/styles/components/Header.scss";
import gravatar from "../utils/gravatar";
import { Link } from "react-router-dom";
import {logoutRequest} from "../actions";
import logo from "../assets/IMG/yorha.png";
import profilePic from "../assets/IMG/2B.png";
//Se hace de esta forma porque no hay lógica detrás del header
const Header = (props) => {
  const { user } = props;
  

  const hasUser = Object.keys(user).length > 0;

  const handleLogOut = () => {
    props.logoutRequest({});
  }

  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={logo} alt="LogoYorha" />
      </Link>

      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ? (
            <img src={gravatar(user.email)} alt="ImagenPerfil" />
          ) : (
            <img src={profilePic} alt="ImagenPerfil" />
          )}
          <p>Profile</p>
        </div>
        <ul>
          {hasUser ? 
            <li>
              <a href="/">{user.name}</a>
            </li>
          : null
          }
          {

            hasUser ? <li>
            <Link to="/login" onClick={handleLogOut}>Cerrar Sesión</Link>
            </li>
            :<li>
            <Link to="/login">Iniciar Sesión</Link>
            </li>

          }

          
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (state) =>{
  return {
    logoutRequest
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
