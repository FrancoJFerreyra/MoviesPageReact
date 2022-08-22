import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import movieDB from "./api/movieDB";
import Aos from 'aos';
import 'aos/dist/aos.css'

const App = () => {

  const [genreDetails, setGenre] = useState([])
  const [selected, setSelected] = useState({name: 'Select a color'})

  useEffect(()=> {
    Aos.init()
    const findByGenres = async () => {
      const { data } = await movieDB.get('/genre/movie/list',{
        params: {
          language:'en-US'
        }
      })
      setGenre(data.genres);
    }
    findByGenres()
  }, []) 

  return(
    <div>
      <h1 className='ui header'>The movie app!</h1>
      {/* <Filter 
      genreDetails={genreDetails} 
      setSelected={setSelected} 
      selected={selected}
      /> */}
      <SearchBar />
    </div>
  )
}

export default App