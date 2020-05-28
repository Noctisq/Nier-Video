import React from "react";
import "../assets/styles/components/CarouselItem.scss";
import playVideo from "../assets/IMG/A2.png";
import addFav from "../assets/IMG/robot.png";
const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
  <div className="carousel-item">
    <img className="carousel-item__img" src={cover} alt="2b" />
    <div className="carousel-item__details">
      <div>
        <img src={playVideo} width="25px" height="25px" alt="ver" />
        <img src={addFav} width="25px" height="25px" alt="nover" />
      </div>

      <h3 className="carousel-item__details--title">{title}</h3>
      <p className="carousel-item__details--title">{`${year} ${contentRating} ${duration}`}</p>
    </div>
  </div>
);

export default CarouselItem;
