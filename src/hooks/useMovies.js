import movieDB from '../api/movieDB';

const useMovies = () => {
	const getGenreList = async () => {
		const { data } = await movieDB.get('/genre/movie/list', {
			params: {
				language: 'en-US',
			},
		});
		return data.genres;
	};

	const getPopularMovies = async () => {
		try {
			const { data } = await movieDB.get('/movie/popular');
			return data.results;
		} catch (error) {
			return `Error: ${error}, please reload the page.`;
		}
	};

	const getByGenre = async (id, page) => {
		try {
			const { data } = await movieDB.get('/discover/movie', {
				params: {
					with_genres: id,
					page: page,
				},
			});
			return data.results;
		} catch (error) {
			return `Error: ${error}, please reload the page.`;
		}
	};
	const getByCategory = async (category, page) => {
		try {
			const categoryPath = category.split(' ').join('_').toLowerCase();
			const { data } = await movieDB.get(`/movie/${categoryPath}`, {
				params: {
					page: page,
				},
			});
			return data.results;
		} catch (error) {
			return `Error: ${error}, please reload the page.`;
		}
	};

	const getBySearched = async (text) => {
		try {
			const { data } = await movieDB.get('/search/movie', {
				params: {
					query: text,
					page: 1,
					language: 'en-US',
				},
			});
			return data.results;
		} catch (error) {
			return `Error: ${error}, please reload the page.`;
		}
	};

	const getMovieTrailer = async (movieId) => {
		try {
			const { data } = await movieDB.get(`/movie/${movieId}/videos`);
			const isTrailer = data.results.some((e) => e.type === 'Trailer');
			return isTrailer ? data.results.filter((e) => e.type === 'Trailer')[0] : data.results[0];
		} catch (error) {
			return `Error: ${error}, please reload the page.`;
		}
	};

	const getRelatedMovies = async (movieId) => {
		try {
			const { data } = await movieDB.get(`/movie/${movieId}/similar`);
			return data.results.slice(0, 8);
		} catch (error) {
			return `Error: ${error}, please reload the page.`;
		}
	};

	return {
		getGenreList,
		getPopularMovies,
		getByGenre,
		getByCategory,
		getBySearched,
		getMovieTrailer,
		getRelatedMovies,
	};
};

export default useMovies;
