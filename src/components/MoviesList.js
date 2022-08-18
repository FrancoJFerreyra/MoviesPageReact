import React, { useEffect, useState } from 'react';
import axios from 'axios';

const KEY = '31c0c7df511b4db72c1685cb89986505';

const MoviesList = () => {
	const [movies, setMovies] = useState([]);

  useEffect(()=> {
    const request = async () => {
		const { data } = await axios.get('https://api.themoviedb.org/3/movie/popular', {
			params: {
				api_key: KEY,
				page: 1,
			},
		});
    setMovies(data.results);
    }
    request()
  },[]);

  const renderedList = movies.map(({title, poster_path, overview})=> {
    return (
      <div>
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`}/>
        <h1>{title}</h1>
        <p>{overview}</p>
        <hr/>
      </div>
    )
  })

  return(
    <div>
      {renderedList}
    </div>
  )
};

export default MoviesList;
