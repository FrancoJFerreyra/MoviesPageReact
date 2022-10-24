import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Route, Routes } from 'react-router-dom';
import GenresContext from '../contexts/GenresContext';
import Home from './Home';
import MoviesPerRecent from './MoviesPerRecent';
import Genre from './Genres';

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Genres' element={<Genre />} />
      <Route path='/Movies' element={<MoviesPerRecent />} />
    </Routes>
  );
};

export default App;
