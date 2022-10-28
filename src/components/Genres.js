import React from 'react';
import GenreList from './GenreList';
import Header from './Header';

const Genres = () => {
	return (
		<>
			<Header />
			<div className='container-xxl'>
				<GenreList />
			</div>
		</>
	);
};
export default Genres;
