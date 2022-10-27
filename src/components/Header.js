import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';
import { Button, Form, Nav, Navbar } from 'react-bootstrap';
import Filter from './Filter';
//context
import GeneralContext from '../contexts/General/GeneralContext';

const Header = () => {
  const [searchText, setSearchText] = useState('');

  const { genreList, getByGenre, getByCategory, getBySearched, getPopular } =
    useContext(GeneralContext);

  const categories = ['Now Playing', 'Upcoming', 'Popular', 'Top Rated'];

  const genreDetails = genreList
    ? genreList.map(({ name, id }) => {
        return (
          <li key={id}>
            <Link
              className='dropdown-item'
              to={`/genre/${name.toLowerCase()}`}
              onClick={() => getByGenre(id)}
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
          to={`/category/${category.toLowerCase()}`}
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
    <header className='container-fluid'>
      <Navbar bg='light' expand='lg'>
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
      </Navbar>
    </header>
  );
};

export default Header;
