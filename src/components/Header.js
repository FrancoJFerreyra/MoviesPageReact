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
  const { getPopularMovies } = useMovies();

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
      navigate(`/searched/${searchText}`);
    }
    e.target.input.value = '';
  };

  return (
    <header className='container-fluid'>
      <Navbar expand='lg'>
        <div className='container-xxl'>
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
              <li className='header__dropdown--mobile nav-link'>
                Genres
                <Nav.Item as='ul'>{genreDetails}</Nav.Item>
              </li>
              <li className='header__dropdown--mobile nav-link'>
                Movies
                <Nav.Item as='ul'>{categoriesList}</Nav.Item>
              </li>
            </Nav>
            <Form className='d-flex' onSubmit={onSubmit}>
              <Form.Control
                onChange={(e) => setSearchText(e.target.value)}
                name='input'
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
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
