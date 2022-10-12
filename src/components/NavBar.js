import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';
import movieDB from '../api/movieDB';
import MovieList from './MovieList';
import '../style.css';

const NavBar = () => {
	const [searchText, setSearchText] = useState('');
	const [isLoading, setLoading] = useState(false);
	const [searchItems, setSearchItems] = useState([]);

	const popularMovies = async () => {
		const { data } = await movieDB.get('/movie/popular');
		setSearchItems(data.results);
	};

	useEffect(() => {
		setLoading(true);
		const foundMovies = async () => {
			const { data } = await movieDB.get('/search/movie', {
				params: {
					query: searchText,
					page: 1,
					language: 'en-US',
				},
			});
			setSearchItems(data.results);
			setLoading(false);
		};
		if (searchText) {
			foundMovies();
		} else {
			setLoading(false);
			// popularMovies();
		}
	}, [searchText]);

	return (
		<div>
			<header>
				<nav>
					<Link to={'/genre'}>Genre</Link>
					<Link to={'/'}>Popular</Link>
					<div>
						<div>
							<div className={`ui input ${isLoading ? 'icon loading' : 'icon'}`}>
								<DebounceInput
									minLength={1}
									debounceTimeout={700}
									onChange={(e) => setSearchText(e.target.value)}
									placeholder='Search...'
								/>
								{isLoading ? <i className='search icon'></i> : <i className='search link icon'></i>}
							</div>
						</div>
					</div>
				</nav>
			</header>
			<div>
				<MovieList movies={searchItems} />
			</div>
		</div>
	);
};

export default NavBar;
