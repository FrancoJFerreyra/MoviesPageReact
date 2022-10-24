import React, { useState, useEffect } from 'react';
import movieDB from '../api/movieDB';
const useFetchMovies = (path, pathParams) => {
  const [movies, setMovies] = useState([]);

  const query = async () => {
    if (pathParams) {
      const { data } = await movieDB.get(`/${path}`, {
        params: pathParams,
      });
      setMovies(data.results);
    } else {
      const { data } = await movieDB.get(`/${path}`);
      setMovies(data.results);
    }
  };
  useEffect(() => {
    query();
  }, [path, pathParams]);

  return movies;
};
export default useFetchMovies;
