import React from "react";
import '../assets/styles/components/CarouselItem.scss'
const CarouselItem = () => (
  <div className="carousel-item">
    <img className="carousel-item__img" src="../../public/img/2.jpg" alt="2b" />
    <div className="carousel-item__details">
      <div>
        <img src="../../public/img/A2.png" width="25px" height="25px" alt="ver" />
        <img src="../../public/img/robot.png" width="25px" height="25px" alt="nover" />
      </div>

      <h3 className="carousel-item__details--title">Upgrade</h3>
      <p className="carousel-item__details--title">SPD +85</p>
    </div>
  </div>
);

export default CarouselItem;