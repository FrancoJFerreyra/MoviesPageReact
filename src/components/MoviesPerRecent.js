import { useContext, useEffect, useState } from 'react';
import Header from './Header';
import MovieList from './MovieList';
//context
import HeaderContext from '../contexts/Header/HeaderContext';

const MoviesPerRecent = () => {
  const { moviesList, getByCategory } = useContext(HeaderContext);

  useEffect(() => {
    getByCategory();
  }, []);

  return (
    <>
      <Header />
      <MovieList movies={moviesList} />
    </>
  );
};

export default MoviesPerRecent;
