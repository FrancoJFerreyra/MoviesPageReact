import React, { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import MovieList from './MovieList';
import NavBar from './NavBar';

const Home = () => {
  const [movies, setMovies] = useState([]);

  const query = async () => {
    const { data } = await movieDB.get('/movie/popular');
    setMovies(data.results);
  };
  useEffect(() => {
    query();
  }, []);

  return (
    <div>
      <NavBar />
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
