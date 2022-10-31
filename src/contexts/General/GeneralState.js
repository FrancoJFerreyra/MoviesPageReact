import React, { useReducer } from 'react';
import GeneralReducer from './GeneralReducer';
import GeneralContext from './GeneralContext';
import useMovies from '../../hooks/useMovies';
import movieDB from '../../api/movieDB';

const GeneralState = ({ children }) => {
  const initialState = {
    moviesList: [],
    genreList: [],
  };

  const [state, dispatch] = useReducer(GeneralReducer, initialState);

  const updateGenreList = (list) => {
    dispatch({
      type: 'GET_GENRELIST',
      payload: list,
    });
  };

  const updateMovies = (list) => {
    dispatch({
      type: 'GET_MOVIES',
      payload: list,
    });
  };

  return (
    <GeneralContext.Provider
      value={{
        moviesList: state.moviesList,
        genreList: state.genreList,
        updateGenreList,
        updateMovies,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralState;
