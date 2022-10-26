import { useState } from 'react';
import GenreList from './GenreList';
import Header from './Header';

const Genres = () => {
  const [selected, setSelected] = useState('');

  return (
    <div>
      <Header setSelected={setSelected} />
      <GenreList selectedId={selected} />
    </div>
  );
};
export default Genres;
