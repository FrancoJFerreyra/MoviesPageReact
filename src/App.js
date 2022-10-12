import React, { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import movieDB from './api/movieDB';
import NavBar from './components/NavBar';
import Aos from 'aos';
import { Route, Routes } from 'react-router-dom';
import 'aos/dist/aos.css';

const App = () => {
	const [genreDetails, setGenre] = useState([]);
	const [selected, setSelected] = useState({ name: 'Genre' });

	useEffect(() => {
		Aos.init();
		const findByGenres = async () => {
			const { data } = await movieDB.get('/genre/movie/list', {
				params: {
					language: 'en-US',
				},
			});
			setGenre(data.genres);
		};
		findByGenres();
	}, []);

	return (
		<div>
			<NavBar />
			<Routes>
				<Route path='/' element={<SearchBar />} />
				<Route
					path='/genre'
					element={
						<Filter genreDetails={genreDetails} setSelected={setSelected} selected={selected} />
					}
				/>
			</Routes>
			{/* <Filter genreDetails={genreDetails} setSelected={setSelected} selected={selected} /> */}
			{/* <SearchBar /> */}
		</div>
	);
};

export default App;
