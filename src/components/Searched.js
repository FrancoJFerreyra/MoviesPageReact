import React, { useContext } from 'react';
import Header from './Header';
import MovieList from './MovieList';
import GeneralContext from '../contexts/General/GeneralContext';

const Searched = () => {
	const { moviesList } = useContext(GeneralContext);
	return (
		<>
			<Header />
			<MovieList movies={moviesList} />
		</>
	);
};

export default Searched;
