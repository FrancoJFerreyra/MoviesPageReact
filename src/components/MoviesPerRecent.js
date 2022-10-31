import { useContext, useEffect } from 'react';
import Header from './Header';
import MovieList from './MovieList';
//context
import GeneralContext from '../contexts/General/GeneralContext';
import { useParams } from 'react-router-dom';
import useMovies from '../hooks/useMovies';

const MoviesPerRecent = () => {
  const { moviesList, updateMovies } = useContext(GeneralContext);
  const { categoryName } = useParams();
  const { getByCategory } = useMovies();

  useEffect(() => {
    (async () => {
      const list = await getByCategory(categoryName);
      updateMovies(list);
    })();
  }, [categoryName]);

  return (
    <>
      <Header />
      <div className='container-xxl'>
        <MovieList movies={moviesList} />
      </div>
    </>
  );
};

export default MoviesPerRecent;
