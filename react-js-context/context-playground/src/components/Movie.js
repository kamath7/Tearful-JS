import React from "react";

const Movie = props => {
  return (
    <div>
      <h3 key={props.key}>{props.movieName}</h3>
      <p>Year of Release = {props.releaseYear}</p>
    </div>
  );
};

export default Movie;
