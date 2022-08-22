import React from "react";
import MovieImg from "./MoviesImg";

const Card = ({ path, title, popularity}) => {
  return (
    <>
      <div className="image">
        <MovieImg path={path}/>
      </div>
      <div className="content">
        <a className="header">{title}</a>
      </div>
      <div className="extra content">
        <a>
          <i className="eye icon"></i>
          {popularity}
        </a>
      </div>
    </>
  )
}

export default Card;