import { useContext, useEffect, useState } from 'react';
import Header from './Header';
import MovieList from './MovieList';
//context
import GeneralContext from '../contexts/General/GeneralContext';
import { useParams } from 'react-router-dom';
import useMovies from '../hooks/useMovies';
import Pagination from './Pagination';
import { Spinner } from 'react-bootstrap';

const MoviesPerRecent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { moviesList, updateMovies } = useContext(GeneralContext);
  const { categoryName, page } = useParams();
  const { getByCategory } = useMovies();

  const pageNumber = page.split('_')[1];
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const list = await getByCategory(categoryName, pageNumber);
      updateMovies(list);
      setIsLoading(false);
    })();
  }, [categoryName, page]);

  return (
    <>
      {isLoading ? (
        <div className='center__spinner'>
          <Spinner animation='border' />
        </div>
      ) : (
        <>
          <div className='title__container'>
            <h1>
              {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
            </h1>
          </div>
          <div className='container-xxl'>
            {Array.isArray(moviesList) ? (
              <>
                <MovieList movies={moviesList} />
                <Pagination
                  section={`/category/${categoryName}`}
                  page={pageNumber}
                />
              </>
            ) : (
              <h1>{moviesList}</h1>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default MoviesPerRecent;
