import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import useFetchMovies from '../hooks/useFetchMovies';
import MovieList from './MovieList';

const GenreList = ({ selectedId }) => {
  // const [movies, setMovies] = useState([]);
  // const [selected, setSelected] = useState({});

  const movies = useFetchMovies('discover/movie', { with_genres: selectedId });

  return <MovieList movies={movies} />;
  // useEffect(() => {
  //   const genreMovies = async () => {
  //     const { data } = await movieDB.get('/discover/movie', {
  //       params: {
  //         with_genres: selected.id,
  //       },
  //     });
  //     setMovies(data.results);
  //   };
  //   genreMovies();
  // }, [selected]);
};

export default GenreList;
