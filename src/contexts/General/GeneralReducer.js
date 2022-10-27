import { GET_GENRELIST, GET_MOVIES, SET_MOVIEDETAILS } from '../types';

const GeneralReducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_MOVIES:
      return { ...state, moviesList: payload };
    case GET_GENRELIST:
      return { ...state, genreList: payload };
    case SET_MOVIEDETAILS:
      return { ...state, movieDetails: payload };
    default:
      return state;
  }
};

export default GeneralReducer;
