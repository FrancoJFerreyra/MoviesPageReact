import { useContext, useEffect } from 'react';
import Header from './Header';
import MovieList from './MovieList';
//context
import GeneralContext from '../contexts/General/GeneralContext';
import { useParams } from 'react-router-dom';

const MoviesPerRecent = () => {
	const { moviesList, getByCategory } = useContext(GeneralContext);
	const { categoryName } = useParams();
	useEffect(() => {
		getByCategory(categoryName);
	}, [categoryName]);

	return (
		<>
			<Header />
			<div className='container-xxl'>
				<MovieList movies={moviesList} />
			</div>
		</>
	);
};

export default MoviesPerRecent;
