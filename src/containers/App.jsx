import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../assets/styles/App.scss";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";
import useinitialState from "../hooks/useinitialState";

const API = "http://localhost:3000/initalState";

const App = () => {
  const initalState = useinitialState(API);

  return (
    <div className="App">
      <Header />
      <Search />

      {Object.keys(initalState).map((category) => {
        return (
          initalState[category].length != 0 && (
            <Categories key={category} title={category}>
              <Carousel>
                {initalState[category].map((item) => {
                  return <CarouselItem key={item.id} {...item} />;
                })}
              </Carousel>
            </Categories>
          )
        );
      })}

      <Footer />
    </div>
  );
};

export default App;
