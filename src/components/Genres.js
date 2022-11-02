import { useContext, useEffect, useState } from 'react';
import Header from './Header';
import { useParams } from 'react-router-dom';
import GeneralContext from '../contexts/General/GeneralContext';
import MovieList from './MovieList';
import useMovies from '../hooks/useMovies';
import Pagination from './Pagination';
import { Spinner } from 'react-bootstrap';

const Genres = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { moviesList, genreList, updateMovies } = useContext(GeneralContext);
  const { genreName, page } = useParams();
  const { getByGenre } = useMovies();
  const pageNumber = page.split('_')[1];
  useEffect(() => {
    if (genreList.length > 0) {
      const toGenre = genreName
        .split(' ')
        .map((e) => {
          if (e === 'tv') return e.toUpperCase() + e.slice(2);
          return e.charAt(0).toUpperCase() + e.slice(1);
        })
        .join(' ');
      (async () => {
        setIsLoading(true);
        const findGenre = genreList.find((e) => e.name === `${toGenre}`);
        const list = await getByGenre(findGenre.id, pageNumber);
        updateMovies(list);
        setIsLoading(false);
      })();
    }
  }, [genreList, page, genreName]);
  return (
    <>
      <Header />
      {isLoading ? (
        <div className='center__spinner'>
          <Spinner animation='border' />
        </div>
      ) : (
        <div className='container-xxl'>
          {Array.isArray(moviesList) ? (
            <>
              <h1>{genreName}</h1>
              <MovieList movies={moviesList} isFade={true} />
              <Pagination section={`/genre/${genreName}`} page={pageNumber} />
            </>
          ) : (
            <h1>{moviesList}</h1>
          )}
        </div>
      )}
    </>
  );
};
export default Genres;
