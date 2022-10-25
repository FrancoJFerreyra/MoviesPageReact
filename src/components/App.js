import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import MoviesPerRecent from './MoviesPerRecent';
import Genre from './Genres';
//context
import NavbarState from '../contexts/Navbar/NavbarState';

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <NavbarState>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Genres' element={<Genre />} />
        <Route path='/Movies' element={<MoviesPerRecent />} />
      </Routes>
    </NavbarState>
  );
};

export default App;
