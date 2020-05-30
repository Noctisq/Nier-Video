import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "../assets/styles/App.scss";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";

const Home = ({ mylist, trends, originals, search }) => {
  let orAndtr = [...trends, ...originals];
  let results = [];
 
  
  orAndtr.forEach(video => {
    if (video.title.toLowerCase().search(search.toLowerCase()) == -1){
      console.log("Este no");
    }else{
      results.push(video)
    }
  });

  console.log(results);
  return (
    <>
      <Search />
      {search != "" && (
        <Categories title="Results">
          <Carousel>
            {results.map((item) => {
              return <CarouselItem key={item.id} {...item}/>;
            })}
          </Carousel>
        </Categories>
      )}

      {search == "" && mylist.length > 0 && (
        <Categories title="My Upgrades">
          <Carousel>
            {mylist.map((item) => {
              return <CarouselItem key={item.id} {...item} isList />;
            })}
          </Carousel>
        </Categories>
      )}
      {search == "" && (
        <Categories title="Upgrade trends">
          <Carousel>
            {trends.map((item) => {
              return <CarouselItem key={item.id} {...item} />;
            })}
          </Carousel>
        </Categories>
      )}

      {search == "" && (
        <Categories title="Original upgrades">
          <Carousel>
            {originals.map((item) => {
              return <CarouselItem key={item.id} {...item} />;
            })}
          </Carousel>
        </Categories>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    search: state.search,
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};
export default connect(mapStateToProps, null)(Home);
