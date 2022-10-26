import React, { useEffect, useState, useContext } from 'react';
import { Link, redirect } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';
import movieDB from '../api/movieDB';
import MovieList from './MoviesPerRecent';
import {
  Button,
  Container,
  Dropdown,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap';
import MoviesPerRecent from './MoviesPerRecent';
import Filter from './Filter';
//context
import HeaderContext from '../contexts/Header/HeaderContext';

const Header = () => {
  const [searchText, setSearchText] = useState('');

  const { genreList, getByGenre, getByCategory, getBySearched, getPopular } =
    useContext(HeaderContext);

  const categories = ['Now Playing', 'Upcoming', 'Popular', 'Top Rated'];

  const genreDetails = genreList.map(({ name, id }) => {
    return (
      <Link
        className='dropdown-item'
        to={`/genre/${name.toLowerCase()}`}
        onClick={() => getByGenre(id, name)}
        key={id}
      >
        {name}
      </Link>
    );
  });

  const categoriesList = categories.map((category) => {
    return (
      <li key={category}>
        <Link
          to='/Movies'
          className='dropdown-item'
          onClick={() => getByCategory(category)}
        >
          {category}
        </Link>
      </li>
    );
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (searchText) {
      getBySearched(searchText);
    }
  };
  return (
    <header>
      <Navbar bg='light' expand='lg'>
        <Container fluid>
          <Link
            to='/'
            onClick={window.location.pathname === '/' ? () => getPopular() : ''}
            className='navbar-brand'
          >
            Movies App
          </Link>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll
              as='ul'
            >
              <Nav.Item as='li'>
                <Link
                  className='nav-link'
                  to='/'
                  onClick={
                    window.location.pathname === '/' ? () => getPopular() : ''
                  }
                >
                  Home
                </Link>
              </Nav.Item>
              <Filter list={genreDetails} dropdownTitle='Genres' />
              <Filter list={categoriesList} dropdownTitle='Movies' />
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
        </Container>
      </Navbar>
      <div>
        <h1>Home of The Best Movies</h1>
      </div>
    </header>
  );
};

export default Header;
