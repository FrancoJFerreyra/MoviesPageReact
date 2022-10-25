import React, { useEffect, useReducer } from 'react';
import NavbarReducer from './NavbarReducer';
import NavbarContext from './NavbarContext';
import movieDB from '../../api/movieDB';

const NavbarState = ({ children }) => {
  const initialState = {
    genreMovies: [],
    category: null,
  };
  const [state, dispatch] = useReducer(NavbarReducer, initialState);
  const getByGenre = async (id = 28) => {
    const { data } = await movieDB.get('/discover/movie', {
      params: {
        with_genres: id,
      },
    });
    dispatch({
      type: 'GET_GENRE',
      payload: data.results,
    });
  };
  const getByCategory = (category) => {
    dispatch({
      type: 'GET_CATEGORY',
      payload: category,
    });
  };

  return (
    <NavbarContext.Provider
      value={{
        genreMovies: state.genreMovies,
        category: state.category,
        getByGenre,
        getByCategory,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarState;
