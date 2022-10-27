import React, { useContext, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import MoviesPerRecent from './MoviesPerRecent';
import Genre from './Genres';
import MoviePage from './MoviePage';
//context
import GeneralContext from '../contexts/General/GeneralContext';

const App = () => {
  const { getGenreList } = useContext(GeneralContext);

  useEffect(() => {
    Aos.init();
  }, []);
  useEffect(() => {
    getGenreList();
  }, []);
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/genre/:genreName' element={<Genre />} />
      <Route path='/category/:categoryName' element={<MoviesPerRecent />} />
      <Route path='/title/:title/:movieId' element={<MoviePage />} />
    </Routes>
  );
};

export default App;
