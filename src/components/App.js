import React, { useContext, useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import MoviesPerRecent from './MoviesPerRecent';
import Genre from './Genres';
//context
import HeaderContext from '../contexts/Header/HeaderContext';

const App = () => {
  const { getGenreList } = useContext(HeaderContext);
  useEffect(() => {
    getGenreList();
  }, []);
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path={'/genre/:name'} element={<Genre />} />
      <Route path='/Movies' element={<MoviesPerRecent />} />
    </Routes>
  );
};

export default App;
