import React, { useContext, useEffect } from 'react';
import MovieList from './MovieList';
import Header from './Header';
import HeaderContext from '../contexts/General/GeneralContext';

const Home = () => {
	const { moviesList, getPopular } = useContext(HeaderContext);
	useEffect(() => {
		getPopular();
	}, []);
	return (
		<>
			<Header />
			<div className='container-xxl'>
				<MovieList movies={moviesList} />
			</div>
		</>
	);
};

export default Home;
