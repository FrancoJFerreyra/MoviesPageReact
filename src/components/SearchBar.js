import React, { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import MovieList from './MovieList';

const SearchBar = ({ searchText, setLoading }) => {
	const [searchItems, setSearchItems] = useState([]);

	const popularMovies = async () => {
		const { data } = await movieDB.get('/movie/popular');
		setSearchItems(data.results);
	};

	useEffect(() => {
		//setLoading(true)
		const foundMovies = async () => {
			const { data } = await movieDB.get('/search/movie', {
				params: {
					query: searchText,
					page: 1,
					language: 'en-US',
				},
			});
			setSearchItems(data.results);
			//setLoading(false)
		};
		if (searchText) {
			foundMovies();
		} else {
			//setLoading(false)
			popularMovies();
		}
	}, [searchText]);

	return (
		<div>
			<div>
				<MovieList movies={searchItems} />
			</div>
		</div>
	);
};

export default SearchBar;
