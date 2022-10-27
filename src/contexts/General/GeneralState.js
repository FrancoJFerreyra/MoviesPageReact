import React, { useReducer } from 'react';
import GeneralReducer from './GeneralReducer';
import GeneralContext from './GeneralContext';
import movieDB from '../../api/movieDB';

const GeneralState = ({ children }) => {
  const initialState = {
    moviesList: [],
    genreList: [],
    movieDetails: {},
  };

  const [state, dispatch] = useReducer(GeneralReducer, initialState);

  const getGenreList = async () => {
    const { data } = await movieDB.get('/genre/movie/list', {
      params: {
        language: 'en-US',
      },
    });
    dispatch({
      type: 'GET_GENRELIST',
      payload: data.genres,
    });
  };

  const getPopular = async () => {
    const { data } = await movieDB.get('/movie/popular');
    dispatch({
      type: 'GET_MOVIES',
      payload: data.results,
    });
  };

  const getByGenre = async (id) => {
    const { data } = await movieDB.get('/discover/movie', {
      params: {
        with_genres: id,
      },
    });
    dispatch({
      type: 'GET_MOVIES',
      payload: data.results,
    });
  };

  const getByCategory = async (category) => {
    const categoryPath = category.split(' ').join('_').toLowerCase();
    const { data } = await movieDB.get(`/movie/${categoryPath}`);
    dispatch({
      type: 'GET_MOVIES',
      payload: data.results,
    });
  };

  const getBySearched = async (text) => {
    if (text) {
      const { data } = await movieDB.get('/search/movie', {
        params: {
          query: text,
          page: 1,
          language: 'en-US',
        },
      });
      data.results.length > 0
        ? dispatch({
            type: 'GET_MOVIES',
            payload: data.results,
          })
        : alert('Search not found');
    }
  };

  const setMovieDetails = (movie) => {
    dispatch({
      type: 'SET_MOVIEDETAILS',
      payload: movie,
    });
  };

  return (
    <GeneralContext.Provider
      value={{
        moviesList: state.moviesList,
        genreList: state.genreList,
        movieDetails: state.movieDetails,
        getGenreList,
        getPopular,
        getByGenre,
        getByCategory,
        getBySearched,
        setMovieDetails,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralState;
