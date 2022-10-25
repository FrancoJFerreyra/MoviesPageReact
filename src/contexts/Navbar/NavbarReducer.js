import { GET_GENRE, GET_CATEGORY } from '../types';

const NavbarReducer = (state, action) => {
  const { payload, type } = action;
  if (type === GET_GENRE) return { ...state, genreMovies: payload };
  if (type === GET_CATEGORY) return { ...state, category: payload };
  return { ...state };
};

export default NavbarReducer;
