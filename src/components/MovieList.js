import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

const MovieList = ({ movies }) => {
	const convertToUrl = (str) => {
		const result = str.split('').filter((e) => {
			return e !== '?' && e !== '/';
		});
		return result.join('').split(' ').join('_').toLowerCase();
	};

	const moviesList = movies.map((movie) => {
		if (movie.poster_path == null) {
			return '';
		}
		return (
			<div className='col-sm-4 col-md-3' key={movie.id.toString()}>
				<Link
					to={`/title/${convertToUrl(movie.title)}/${movie.id}`}
					data-aos='fade'
					className='link'
					data-aos-duration='1000'
				>
					<Card path={movie.poster_path} title={movie.title} popularity={movie.popularity} />
				</Link>
			</div>
		);
	});
	return <div className='row movieList__container'>{moviesList}</div>;
};

export default MovieList;
