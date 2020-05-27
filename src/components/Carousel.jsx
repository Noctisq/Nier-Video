import React from 'react';
import '../assets/styles/components/Carousel.scss'

const Carousel  = ({children}) => (
    <section className="carousel">
      
      <div className="carousel__cointainer">
          {children}
      </div>
    </section>
)

export default Carousel;