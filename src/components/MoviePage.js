import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useWindowDimensions from '../hooks/useWindowDimensions';
import movieDB from '../api/movieDB';
import Header from './Header';
import RelatedMovies from './RelatedMovies';
import MovieTrailer from './MovieTrailer';

const MoviePage = () => {
	const [movieDetails, setMovieDetails] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const { width } = useWindowDimensions();

	const { movieId } = useParams();
	useEffect(() => {
		setIsLoading(true);
		const getMovieDetails = async () => {
			const { data } = await movieDB.get(`/movie/${movieId}`);
			setMovieDetails(data);
			setIsLoading(false);
		};
		getMovieDetails();
	}, [movieId]);

	return (
		<>
			<Header />
			{isLoading ? (
				<div className='center__spinner'>
					<Spinner animation='border' />
				</div>
			) : (
				<div className='container-xxl' key={movieId}>
					<div className='row'>
						<div className='moviePage__movie--container'>
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
								<div className='moviePage__details--aboutMovie'>
									<p>Votes: {Math.trunc(movieDetails.vote_average * 10)}%</p>
									<p>Duration: {movieDetails.runtime}m</p>
									<p>{movieDetails.release_date}</p>
								</div>
								<div className='moviePage__details--genres'>
									{movieDetails.genres
										? movieDetails.genres.map((genre) => {
												return (
													<p>
														<Link to={`/genre/${genre.name.toLowerCase()}`}>{genre.name}</Link>
													</p>
												);
										  })
										: ''}
								</div>
								{width > 767 ? (
									<div>
										<p className='moviePage__details--overview'>{movieDetails.overview}</p>
									</div>
								) : (
									''
								)}
							</div>
						</div>
						{width < 768 ? (
							<div>
								<p className='moviePage__details--overview'>{movieDetails.overview}</p>
							</div>
						) : (
							''
						)}
					</div>
					<MovieTrailer />
					<RelatedMovies />
				</div>
			)}
		</>
	);
};

export default MoviePage;
