import React from "react";

const MovieImg = ({path}) => {
  return (
    <img className="cardImage" src={`https://image.tmdb.org/t/p/w500/${path}`}/>
  )
}

export default MovieImg