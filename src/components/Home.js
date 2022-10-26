import React, { useContext, useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import MovieList from './MovieList';
import Header from './Header';
import HeaderContext from '../contexts/Header/HeaderContext';

const Home = () => {
  const { moviesList, getPopular } = useContext(HeaderContext);

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <div>
      <Header />
      <MovieList movies={moviesList} />
    </div>
  );
};

export default Home;
