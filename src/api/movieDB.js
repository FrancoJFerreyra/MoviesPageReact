import axios from 'axios';

const KEY = '31c0c7df511b4db72c1685cb89986505';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: KEY
  }
})