import { useState } from 'react';
import GenreList from './GenreList';
import NavBar from './NavBar';

const Genres = () => {
  const [selected, setSelected] = useState('');

  return (
    <div>
      <NavBar setSelected={setSelected} />
      <GenreList selectedId={selected} />
    </div>
  );
};
export default Genres;
