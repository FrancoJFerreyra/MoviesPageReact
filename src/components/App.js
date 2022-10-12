import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import MovieList from './MovieList';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <NavBar setMovies={setMovies} />

      <Routes>
        <Route path='/' element={<Home setMovies={setMovies} />} />
        {/* <Route path='/genre' element={<Filter genreDetails={genreDetails} />} /> */}
      </Routes>
      <div>
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App;
