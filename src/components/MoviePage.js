import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import movieDB from '../api/movieDB';
import useMovies from '../hooks/useMovies';
import Video from './Video';
import MovieList from './MovieList';
import Comments from './Comments';

const MoviePage = () => {
	const [movieDetails, setMovieDetails] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [relatedLoading, setRelatedLoading] = useState(false);
	const [trailer, setTrailer] = useState([]);
	const [relatedMovies, setRelatedMovies] = useState([]);

	const { getMovieTrailer, getRelatedMovies } = useMovies();
	const { movieId } = useParams();
	useEffect(() => {
		console.log(movieId);
		setIsLoading(true);
		const getMovieDetails = async () => {
			const { data } = await movieDB.get(`/movie/${movieId}`);
			setMovieDetails(data);
			setIsLoading(false);
		};
		getMovieDetails();
	}, [movieId]);

	useEffect(() => {
		(async () => {
			const video = await getMovieTrailer(movieId);
			setTrailer(video);
		})();
	}, [movieId]);

	useEffect(() => {
		(async () => {
			setRelatedLoading(true);
			const movies = await getRelatedMovies(movieId);
			setRelatedMovies(movies);
			setRelatedLoading(false);
		})();
	}, [movieId]);
	console.log(movieDetails);
	return (
		<>
			{isLoading ? (
				<div className='center__spinner'>
					<Spinner animation='border' />
				</div>
			) : (
				<div className='container-xxl'>
					<div className='row moviePage__movie--container' key={movieDetails.id}>
						<div className='col-sm-4 moviePage__image--container'>
							<img
								src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
								alt={`${movieDetails.title}`}
							/>
						</div>
						<div className='col-sm-8 moviePage__movie--details'>
							<div className='moviePage__title--container'>
								<h1>{movieDetails.title}</h1>
								<p>{movieDetails.tagline}</p>
							</div>
							<ul className='moviePage__details--aboutMovie'>
								<li>Votes: {Math.trunc(movieDetails.vote_average * 10)}%</li>
								<li>Duration: {movieDetails.runtime}m</li>
								<li>{movieDetails.release_date}</li>
							</ul>
							<ul className='moviePage__details--genres'>
								{movieDetails.genres
									? movieDetails.genres.map((genre) => {
											return (
												<li key={genre.id}>
													<Link
														className='btn btn-secondary moviePage__genre--btn'
														to={`/genre/${genre.name.toLowerCase()}/page_1`}
													>
														{genre.name}
													</Link>
												</li>
											);
									  })
									: ''}
							</ul>
							<div className='moviePage__details--overview'>
								<p>{movieDetails.overview}</p>
							</div>
						</div>
					</div>
					<div className='moviePage__details--overviewMobile'>
						<p>{movieDetails.overview}</p>
					</div>
					<Video video={trailer} />
					<Comments />
					<div className='text-center moviePage__related--title'>
						<h3>Related movies</h3>
					</div>
					{relatedLoading ? (
						<div className='center__spinner'>
							<Spinner animation='border' />
						</div>
					) : (
						<MovieList movies={relatedMovies} isFade={false} />
					)}
				</div>
			)}
		</>
	);
};

export default MoviePage;
