import React, { useContext, useEffect } from 'react';
import MovieList from './MovieList';
//context
import HeaderContext from '../contexts/Header/HeaderContext';
const GenreList = () => {
  const { moviesList, getByGenre } = useContext(HeaderContext);

  useEffect(() => {
    getByGenre();
  }, []);

  return <MovieList movies={moviesList} />;
};

export default GenreList;
