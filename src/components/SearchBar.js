import React, { useEffect, useState } from 'react';
import { DebounceInput } from 'react-debounce-input';
import movieDB from '../api/movieDB';
import MovieList from './MovieList';
import '../style.css';

const SearchBar = () => {
	const [searchText, setSearchText] = useState('');
	const [searchItems, setSearchItems] = useState([]);
  const [isLoading, setLoading] = useState(null);

  const popularMovies = async () => {
    const {data} = await movieDB.get('/movie/popular');
    setSearchItems(data.results)
  }

	useEffect(() => {
    setLoading(true)
		const foundMovies = async () => {
			const { data } = await movieDB.get('/search/movie', {
				params: {
					query: searchText,
					page: 1,
					language: 'en-US',
				},
			});
			setSearchItems(data.results);
      setLoading(false)
		};
		if (searchText) {
			foundMovies();
		}
    else{
      setLoading(false)
      popularMovies()
    }
	}, [searchText]);

	return (
		<div>
			<div className='field browseContainer column'>
				<label className='label browseLabel'>Browse movies</label>
				<div className={`ui input  browseInput ${ isLoading ? 'icon loading' : ''}`}>
					<DebounceInput
						minLength={1}
						debounceTimeout={700}
						onChange={(e) => setSearchText(e.target.value)}
            placeholder='Search...'
					/>
          {isLoading ? <i className='search icon'></i> : null}
				</div>
			</div>
      <div>
        <MovieList movies={searchItems}/>
      </div>
		</div>
	);
};

export default SearchBar;
