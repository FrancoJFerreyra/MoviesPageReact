import React, { useContext, useEffect } from 'react';
import MovieList from './MovieList';
import Header from './Header';
import HeaderContext from '../contexts/General/GeneralContext';
import useMovies from '../hooks/useMovies';

const Home = () => {
  const { moviesList, updateMovies } = useContext(HeaderContext);
  const { getPopularMovies } = useMovies();
  useEffect(() => {
    (async () => {
      const list = await getPopularMovies();
      updateMovies(list);
    })();
  }, []);
  return (
    <>
      <Header />
      <div className='container-xxl'>
        <MovieList movies={moviesList} />
      </div>
    </>
  );
};

export default Home;
