import React, { useReducer } from 'react';
import HeaderReducer from './HeaderReducer';
import HeaderContext from './HeaderContext';
import movieDB from '../../api/movieDB';

const HeaderState = ({ children }) => {
  const initialState = {
    moviesList: [],
    genreList: [],
  };

  const [state, dispatch] = useReducer(HeaderReducer, initialState);

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
            type: 'GET_SEARCHED',
            payload: data.results,
          })
        : alert('Search not found');
    }
  };

  return (
    <HeaderContext.Provider
      value={{
        moviesList: state.moviesList,
        genreList: state.genreList,
        getGenreList,
        getPopular,
        getByGenre,
        getByCategory,
        getBySearched,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderState;
