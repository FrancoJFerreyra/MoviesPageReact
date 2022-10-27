import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import GeneralContext from '../contexts/General/GeneralContext';

const MovieList = ({ movies }) => {
  const moviesList = movies.map((movie) => {
    if (movie.poster_path == null) {
      return '';
    }
    return (
      <div className='col-sm-4 col-md-3' key={movie.id.toString()}>
        <Link
          to={`/title/${movie.title.split(' ').join('_').toLowerCase()}/${
            movie.id
          }`}
          data-aos='fade'
          className='link'
          data-aos-duration='1000'
        >
          <Card
            path={movie.poster_path}
            title={movie.title}
            popularity={movie.popularity}
          />
        </Link>
      </div>
    );
  });
  return (
    <div className='container-xxl'>
      <div className='row'>{moviesList}</div>
    </div>
  );
};

export default MovieList;
