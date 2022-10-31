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
    const { data } = await movieDB.get('/movie/popular');
    return data.results;
  };

  const getByGenre = async (id, page) => {
    const getNumber = page.split('_')[1];
    const { data } = await movieDB.get('/discover/movie', {
      params: {
        with_genres: id,
        page: getNumber,
      },
    });
    return data.results;
  };
  const getByCategory = async (category) => {
    const categoryPath = category.split(' ').join('_').toLowerCase();
    const { data } = await movieDB.get(`/movie/${categoryPath}`);
    console.log(data);
    return data.results;
  };

  const getBySearched = async (text) => {
    const { data } = await movieDB.get('/search/movie', {
      params: {
        query: text,
        page: 1,
        language: 'en-US',
      },
    });
    return data.results;
  };

  const getMovieTrailer = async (movieId) => {
    const { data } = await movieDB.get(`/movie/${movieId}/videos`);
    const isTrailer = data.results.some((e) => e.type === 'Trailer');
    console.log(data);
    return isTrailer
      ? data.results.filter((e) => e.type === 'Trailer')[0]
      : data.results[0];
  };

  const getRelatedMovies = async (movieId) => {
    const { data } = await movieDB.get(`/movie/${movieId}/similar`);
    return data.results.slice(0, 8);
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
