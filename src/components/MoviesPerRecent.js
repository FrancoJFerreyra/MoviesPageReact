import { useEffect, useState } from 'react';
import { Dropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import movieDB from '../api/movieDB';
import Filter from './Filter';

const movies = ['Now Playing', 'Upcoming', 'Popular', 'Top Rated'];
//Array con top rated, popular, latest para luego hacer un map de ese array y poder asi construir la lista pasandosela como prop al filtro.

const MoviesPerRecent = () => {
  const [movies, setMovies] = useState([]);
  const [selected, setSelected] = useState('');

  const getTopRated = async () => {
    const { data } = await movieDB.get('/movie/top_rated');
    return data.results;
  };

  const getNowPlaying = async () => {
    const { data } = await movieDB.get('/movie/now_playing');
    return data.results;
  };

  useEffect(() => {
    const getMovies = async () => {
      if (selected) {
        if (selected === 'Top Rated') {
          setMovies(await getTopRated());
        } else if (selected === 'Now Playing') {
          setMovies(await getNowPlaying());
        } else {
          const { data } = await movieDB.get(
            `/movie/${selected.toLowerCase()}`
          );
          setMovies(data.results);
        }
      }
    };
    getMovies();
  }, [selected]);

  const categories = movies.map((category) => {
    return (
      <Dropdown.Item
        onClick={() => setSelected(category)}
        key={category}
        as='li'
      >
        <Nav.Link>{category}</Nav.Link>
      </Dropdown.Item>
    );
  });

  return <Filter list={categories} dropdownTitle='Movies' />;
};

export default MoviesPerRecent;
