import React, { useContext, useEffect } from 'react';
import MovieList from './MovieList';
//context
import NavbarContext from '../contexts/Navbar/NavbarContext';
const GenreList = () => {
  const { genreMovies, getByGenre } = useContext(NavbarContext);

  useEffect(() => {
    getByGenre();
  }, []);

  return <MovieList movies={genreMovies} />;
};

export default GenreList;
