import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { useParams } from 'react-router-dom';

const MovieTrailer = () => {
	const [trailer, setTrailer] = useState([]);

	const { movieId } = useParams();
	useEffect(() => {
		const getTrailer = async () => {
			const { data } = await movieDB.get(`/movie/${movieId}/videos`);
			console.log(data);
			setTrailer(data.results);
		};
		getTrailer();
	}, []);
	return (
		<iframe title={`${trailer.name}`} src={`https://www.youtube.com/watch?v=${trailer.key}`} />
	);
};

export default MovieTrailer;
