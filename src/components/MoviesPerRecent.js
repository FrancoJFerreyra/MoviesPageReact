import { useContext, useEffect } from 'react';
import Header from './Header';
import MovieList from './MovieList';
//context
import GeneralContext from '../contexts/General/GeneralContext';
import { useParams } from 'react-router-dom';

const MoviesPerRecent = () => {
  const { moviesList, getByCategory } = useContext(GeneralContext);
  const { categoryName } = useParams();
  useEffect(() => {
    getByCategory(categoryName);
  }, []);

  return (
    <>
      <Header />
      <MovieList movies={moviesList} />
    </>
  );
};

export default MoviesPerRecent;
