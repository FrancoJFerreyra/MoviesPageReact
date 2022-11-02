import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Nav, Navbar } from 'react-bootstrap';
import Filter from './Filter';
import useMovies from '../hooks/useMovies';
//context
import GeneralContext from '../contexts/General/GeneralContext';

const Header = () => {
  const [searchText, setSearchText] = useState('');
  const { genreList, updateMovies } = useContext(GeneralContext);
  const categories = ['Now Playing', 'Upcoming', 'Popular', 'Top Rated'];
  const { getPopularMovies, getBySearched } = useMovies();

  const navigate = useNavigate();

  const onHomeClick = async () => {
    const list = await getPopularMovies();
    updateMovies(list);
  };

  const genreDetails = genreList
    ? genreList.map(({ name, id }) => {
        return (
          <li key={id}>
            <Link
              className='dropdown-item'
              to={`/genre/${name.toLowerCase()}/page_1`}
            >
              {name}
            </Link>
          </li>
        );
      })
    : '';

  const categoriesList = categories.map((category) => {
    return (
      <li key={category}>
        <Link
          to={`/category/${category.toLowerCase()}/page_1`}
          className='dropdown-item'
        >
          {category}
        </Link>
      </li>
    );
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (searchText) {
      const list = await getBySearched(searchText);
      updateMovies(list);
      navigate(`/searched/${searchText}`);
    }
  };

  return (
    <header className='container-xxl'>
      <Navbar bg='light' expand='lg'>
        <Link
          to='/'
          onClick={window.location.pathname === '/' ? onHomeClick : ''}
          className='navbar-brand'
        >
          Movies App
        </Link>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav className='me-auto my-2 my-lg-0' navbarScroll as='ul'>
            <Nav.Item as='li'>
              <Link
                className='nav-link'
                to='/'
                onClick={window.location.pathname === '/' ? onHomeClick : ''}
              >
                Home
              </Link>
            </Nav.Item>
            <Filter list={genreDetails} dropdownTitle='Genres' />
            <Filter list={categoriesList} dropdownTitle='Movies' />
            <li>
              Genres
              <Nav.Item as='ul' className='header__genreList--mobile'>
                {genreDetails}
              </Nav.Item>
            </li>
          </Nav>
          <Form className='d-flex' onSubmit={onSubmit}>
            <Form.Control
              onChange={(e) => setSearchText(e.target.value)}
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
            />
            <Button type='submit' variant='outline-success'>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
