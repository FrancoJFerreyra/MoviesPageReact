import React from 'react';
import useFetchMovies from '../hooks/useFetchMovies';
import MovieList from './MovieList';
import NavBar from './NavBar';

const Home = () => {
  const movies = useFetchMovies('movie/popular');

  return (
    <div>
      <NavBar />
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
