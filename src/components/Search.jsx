import React from "react";
import "../assets/styles/components/Search.scss"
import { connect } from "react-redux";
import {getSearch} from "../actions"

const Search = (props) => {

  
  
  const handleChange = () =>{
    props.getSearch(event.target.value);
  }
 
  
  
  return(
    <section className="main">
      <h2 className="main__title">Be glorious, search for an update.</h2>
      <input name ="search" onChange={handleChange} className="input" type="text" placeholder="Search" />
    </section>
  )
    

}

const mapStateToProps = (state) => {
  return {
    search: state.search,
  };
};

const mapDispatchToProps = {
  getSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);