import React, { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import MovieList from './MovieList';

const Home = ({ setMovies }) => {
  const popularMovies = async () => {
    const { data } = await movieDB.get('/movie/popular');
    setMovies(data.results);
  };

  useEffect(() => {
    popularMovies();
  }, [setMovies]);
};

export default Home;
