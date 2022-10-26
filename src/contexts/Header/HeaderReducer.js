import { GET_GENRELIST, GET_MOVIES } from '../types';

const HeaderReducer = (state, action) => {
  const { payload, type } = action;
  console.log(type);
  switch (type) {
    case GET_MOVIES:
      return { ...state, moviesList: payload };
    case GET_GENRELIST:
      return { ...state, genreList: payload };
    default:
      return state;
  }
};

export default HeaderReducer;
