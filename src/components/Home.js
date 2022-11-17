import React, { useContext, useEffect, useState } from 'react';
import MovieList from './MovieList';
import useMovies from '../hooks/useMovies';
import { Spinner } from 'react-bootstrap';
//context
import HeaderContext from '../contexts/General/GeneralContext';

const Home = () => {
	const [isLoading, setIsLoading] = useState(false);
	const { moviesList, updateMovies } = useContext(HeaderContext);
	const { getPopularMovies } = useMovies();
	useEffect(() => {
		(async () => {
			setIsLoading(true);
			const list = await getPopularMovies();
			updateMovies(list);
			setIsLoading(false);
		})();
	}, []);
	return (
		<>
			{isLoading ? (
				<div className='center__spinner'>
					<Spinner animation='border' />
				</div>
			) : (
				<>
					<div>
						<h1 className='title__container'>The Movie App</h1>
					</div>
					<div className='container-xxl'>
						{Array.isArray(moviesList) ? <MovieList movies={moviesList} /> : <h1>{moviesList}</h1>}
					</div>
				</>
			)}
		</>
	);
};

export default Home;
