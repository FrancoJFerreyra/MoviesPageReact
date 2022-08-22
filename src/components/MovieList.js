import React, {useEffect} from "react";
import Card from "./Card";

const MovieList = ({ movies }) => {

  const moviesList = movies.map(({ title, poster_path, overview, popularity, id }) => {
		if (poster_path == null) {
			return '';
		}
		return(
      <div data-aos='fade'data-aos-duration="1000" className="card" key={id.toString()}>
        <Card path={poster_path} title={title} popularity={popularity}/>
      </div>
        
    ) 
	});
  return (
    <div className='ui five stackable cards'>
      {moviesList}
    </div>
  )
 }

 export default MovieList