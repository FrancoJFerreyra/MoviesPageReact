import React, { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import MovieList from './MovieList';

const Filter = ({ selected, setSelected, genreDetails }) => {
	const [open, setOpen] = useState(false);
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const genreMovies = async () => {
      const {data} = await movieDB.get('/discover/movie', {
        params: {
          with_genres: selected.id
        }
      })
      setMovies(data.results)
    }
    genreMovies()
  }, [selected])

  const genreList = genreDetails.map((genre) => {
    if (genre.name === selected.name) {
      return null
    }
    return(
      <div onClick={() => setSelected(genre)} key={genre.id} className='item' >
        {genre.name}
      </div>   
    )
  })

	return (
    <>
		<div className='ui form'>
			<div className='field'>
				<div className={`ui selection dropdown ${open ? 'visible active' : ''}`} onClick={() => setOpen(!open)}>
				  <i className='dropdown icon'></i>
				  <div className='text'>{selected.name}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>{genreList}</div>
				</div>
			</div>
		</div>
      <MovieList movies={movies}/>
    </>
	);
};
export default Filter;
