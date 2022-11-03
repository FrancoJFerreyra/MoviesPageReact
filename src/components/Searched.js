import React, { useContext, useEffect } from 'react';
import swal from 'sweetalert';
import MovieList from './MovieList';
import GeneralContext from '../contexts/General/GeneralContext';
import { useParams, useNavigate } from 'react-router-dom';
import useMovies from '../hooks/useMovies';

const Searched = () => {
  const { moviesList, updateMovies } = useContext(GeneralContext);
  const { searchedText } = useParams();
  const { getBySearched } = useMovies();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const list = await getBySearched(searchedText);
      if (list.length > 0) {
        updateMovies(list);
      } else {
        swal({
          title: 'The movie you are looking for is not available.',
          dangerMode: true,
          icon: 'warning',
        });
        return navigate('/');
      }
    })();
  }, [searchedText]);

  return (
    <div className='container-xxl'>
      <MovieList movies={moviesList} />
    </div>
  );
};

export default Searched;
