import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import movieDB from '../api/movieDB';
import GeneralContext from '../contexts/General/GeneralContext';
import Header from './Header';

const MoviePage = () => {
  const { movieDetails, setMovieDetails } = useContext(GeneralContext);
  const { movieId } = useParams();
  useEffect(() => {
    const getMovieDetails = async () => {
      const { data } = await movieDB.get(`/movie/${movieId}`);
      setMovieDetails(data);
    };
    getMovieDetails();
  }, [movieId]);
  return (
    <>
      <Header />
      <div>
        <h1>{movieDetails.title}</h1>
        <p>{movieDetails.tagline}</p>
      </div>
      <div>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
            alt={`${movieDetails.title}`}
          />
        </div>
        <div>
          <p>{movieDetails.overview}</p>
          <p>{movieDetails.release_date}</p>
          <p>Duration: {movieDetails.runtime}m</p>
          <p>Votes: {Math.trunc(movieDetails.vote_average * 10)}%</p>
        </div>
      </div>
    </>
  );
};

export default MoviePage;
