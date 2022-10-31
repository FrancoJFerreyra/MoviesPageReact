import { useContext, useEffect } from 'react';
import Header from './Header';
import { useParams } from 'react-router-dom';
import GeneralContext from '../contexts/General/GeneralContext';
import MovieList from './MovieList';
import useMovies from '../hooks/useMovies';
import Pagination from './Pagination';

const Genres = () => {
  const { moviesList, genreList, updateMovies } = useContext(GeneralContext);
  const { genreName, page } = useParams();
  const { getByGenre } = useMovies();
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
        const findGenre = genreList.find((e) => e.name === `${toGenre}`);
        const list = await getByGenre(findGenre.id, page);
        updateMovies(list);
      })();
    }
  }, [genreList, page]);
  return (
    <>
      <Header />
      <div className='container-xxl'>
        <MovieList movies={moviesList} />
        <Pagination section={`/genre/${genreName}`} />
      </div>
    </>
  );
};
export default Genres;
