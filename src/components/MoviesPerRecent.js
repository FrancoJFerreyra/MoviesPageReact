import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import Filter from './Filter';

//Array con top rated, popular, latest para luego hacer un map de ese array y poder asi construir la lista pasandosela como prop al filtro.

const MoviesPerRecent = ({ setMovies }) => {
  const [selected, setSelected] = useState('');

  useEffect(() => {
    const getMovies = async () => {
      const { data } = await movieDB.get(`/movie/${selected.toLowerCase()}`);
      setMovies(data.results);
    };
    getMovies();
  }, [selected]);

  return <Filter />;
};
