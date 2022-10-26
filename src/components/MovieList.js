import React, { useEffect } from 'react';
import Card from './Card';

const MovieList = ({ movies }) => {
  const moviesList = movies.map(
    ({ title, poster_path, overview, popularity, id }) => {
      if (poster_path == null) {
        return '';
      }
      return (
        <div
          className='col-sm-4 col-md-3 col-lg-2'
          data-aos='fade'
          data-aos-duration='1000'
          key={id.toString()}
        >
          <Card path={poster_path} title={title} popularity={popularity} />
        </div>
      );
    }
  );
  return <div className='row'>{moviesList}</div>;
};

export default MovieList;
