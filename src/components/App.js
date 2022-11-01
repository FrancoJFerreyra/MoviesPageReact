import React, { useContext, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import MoviesPerRecent from './MoviesPerRecent';
import Genre from './Genres';
import MoviePage from './MoviePage';
import useMovies from '../hooks/useMovies';
//context
import GeneralContext from '../contexts/General/GeneralContext';
import Searched from './Searched';

const App = () => {
	const { updateGenreList } = useContext(GeneralContext);
	const { getGenreList } = useMovies();

	useEffect(() => {
		Aos.init();
	}, []);
	useEffect(() => {
		(async () => {
			const list = await getGenreList();
			updateGenreList(list);
		})();
	}, []);
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/searched/:searchedText' element={<Searched />} />
			<Route path='/genre/:genreName/:page' element={<Genre />} />
			<Route path='/category/:categoryName/:page' element={<MoviesPerRecent />} />
			<Route path='/title/:title/:movieId' element={<MoviePage />} />
		</Routes>
	);
};

export default App;
