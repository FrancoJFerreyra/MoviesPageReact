import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import movieDB from '../api/movieDB';
import MovieList from './MovieList';

const RelatedMovies = () => {
	const [relatedMovies, setRelatedMovies] = useState([]);
	const { movieId } = useParams();
	useEffect(() => {
		const getRelated = async () => {
			const { data } = await movieDB.get(`/movie/${movieId}/similar`);
			setRelatedMovies(data.results.slice(0, 8));
		};
		getRelated();
	}, [movieId]);
	return <MovieList movies={relatedMovies} />;
};

export default RelatedMovies;
