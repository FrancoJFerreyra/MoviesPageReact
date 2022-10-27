import React, { useContext, useEffect } from 'react';
import MovieList from './MovieList';
import Header from './Header';
import HeaderContext from '../contexts/General/GeneralContext';

const Home = () => {
  const { moviesList, getPopular } = useContext(HeaderContext);

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <>
      <Header />
      <MovieList movies={moviesList} />
    </>
  );
};

export default Home;
