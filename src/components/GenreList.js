import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { NavDropdown, Dropdown, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Filter from './Filter';

const GenreList = ({ setMovies }) => {
  const [selected, setSelected] = useState({});
  const [genreDetails, setGenre] = useState([]);

  useEffect(() => {
    const getGenres = async () => {
      const { data } = await movieDB.get('/genre/movie/list', {
        params: {
          language: 'en-US',
        },
      });
      setGenre(data.genres);
    };
    getGenres();
  }, []);

  useEffect(() => {
    const genreMovies = async () => {
      const { data } = await movieDB.get('/discover/movie', {
        params: {
          with_genres: selected.id,
        },
      });
      setMovies(data.results);
    };
    genreMovies();
  }, [selected]);

  const genres = genreDetails.map((genre) => {
    return (
      <Dropdown.Item onClick={() => setSelected(genre)} key={genre.id} as='li'>
        <Link className='nav-link' to={`/${genre.name}`}>
          {genre.name}
        </Link>
      </Dropdown.Item>
    );
  });

  return <Filter list={genres} dropdownTitle={'Genre'} />;
};

export default GenreList;
