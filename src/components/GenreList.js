import React, { useContext, useEffect, useState } from 'react';
import MovieList from './MovieList';
import { useParams } from 'react-router-dom';
//context
import GeneralContext from '../contexts/General/GeneralContext';
const GenreList = () => {
  const { moviesList, genreList, getByGenre } = useContext(GeneralContext);
  const { genreName } = useParams();

  useEffect(() => {
    if (genreList.length > 0) {
      const findGenre = genreList.find(
        (e) =>
          e.name === `${genreName.charAt(0).toUpperCase()}${genreName.slice(1)}`
      );
      getByGenre(findGenre.id);
    }
  }, [genreList]);

  return <MovieList movies={moviesList} />;
};

export default GenreList;
