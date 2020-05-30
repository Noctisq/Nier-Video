import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getVideoSource, getSearch} from "../actions";
import NotFound from "./NotFound";
const Player = (props) => {
  const { id } = props.match.params;
  const hasPlaying = Object.keys(props.playing).length > 0;
  
  useEffect(() => {
    props.getVideoSource(id);
    props.getSearch("");
  }, []);
 
  return hasPlaying ? (
    <div className="player">
      <video controls autoPlay>
        <source src={props.playing.source} type="video/mp4" />
      </video>
      <div className="player_back">
        <button type="button" onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) : (
    <NotFound />
  );
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
  getSearch
};
export default connect(mapStateToProps, mapDispatchToProps)(Player);
