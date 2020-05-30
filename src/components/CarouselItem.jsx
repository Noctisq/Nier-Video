import React from "react";
import { connect } from "react-redux";

import { setFavorite, deleteFavorite} from "../actions";
import PropTypes from "prop-types";
import "../assets/styles/components/CarouselItem.scss";
import playVideo from "../assets/IMG/A2.png";
import addFav from "../assets/IMG/robot.png";
import removeicon from "../assets/IMG/A2B.png";
import { Link } from "react-router-dom";


const CarouselItem = (props) => {
  
  const { id, cover, title, year, contentRating, duration, isList } = props;
  const handleSetFavorite = () =>{
    props.setFavorite({ id, cover, title, year, contentRating, duration, })
  }

  const handleDeleteFavorite = (itemId) => {

    props.deleteFavorite(itemId);
  }

  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt="2b" />
      <div className="carousel-item__details">
        <div>
          
          {
            isList 
            ? 
            <img onClick={() => handleDeleteFavorite(id)} src={removeicon} width="25px" height="25px" alt="nover" />
            :
            <img onClick={handleSetFavorite} src={addFav} width="25px" height="25px" alt="ver" /> 
            
          }
          <Link to = {`/player/${id}`}>

          <img src={playVideo} width="25px" height="25px" alt="nover" />
          </Link>
          
        </div>
        
        <h3 className="carousel-item__details--title">{title}</h3>
        <p className="carousel-item__details--title">{`${year} ${contentRating} ${duration}`}</p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  //Los tipos de datos que está recibiendo
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapDispatchToProps = { //Le paso setFavorite a props
  setFavorite,
  deleteFavorite
};

export default connect(null, mapDispatchToProps)(CarouselItem); //No vamos a mapear el estado que llega si no que se despacha a props lo que hay en mapDispatch
