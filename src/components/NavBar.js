import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';
import movieDB from '../api/movieDB';
import MovieList from './MovieList';
import {
  Button,
  Container,
  Dropdown,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap';
import GenreList from './GenreList';

const NavBar = ({ setMovies }) => {
  const [searchText, setSearchText] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const foundMovies = async () => {
      const { data } = await movieDB.get('/search/movie', {
        params: {
          query: searchText,
          page: 1,
          language: 'en-US',
        },
      });
      setMovies(data.results);
      setLoading(false);
    };
    if (searchText) {
      foundMovies();
    } else {
      setLoading(false);
    }
  }, [searchText]);

  return (
    <header>
      <Navbar bg='light' expand='lg'>
        <Container fluid>
          <Navbar.Brand href='#'>Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll
              as='ul'
            >
              <Nav.Item as='li'>
                <Link className='nav-link' to='/'>
                  Home
                </Link>
              </Nav.Item>
              <GenreList setMovies={setMovies} dropdownTitle='Genre' />
              <GenreList setMovies={setMovies} dropdownTitle='Movies' />
            </Nav>
            <Form className='d-flex'>
              <Form.Control
                type='search'
                placeholder='Search'
                className='me-2'
                aria-label='Search'
              />
              <Button variant='outline-success'>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <nav>
          <Link to={'/'}>Home</Link>
          <Link to={'/genre'}>Genre</Link>
          <div>
            <div>
              <div
                className={`ui input ${isLoading ? 'icon loading' : 'icon'}`}
              >
                <DebounceInput
                  minLength={1}
                  debounceTimeout={700}
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder='Search...'
                />
                {isLoading ? (
                  <i className='search icon'></i>
                ) : (
                  <i className='search link icon'></i>
                )}
              </div>
            </div>
          </div>
        </nav> */}
      <div>
        <h1>The Movies App</h1>
      </div>
    </header>
  );
};

export default NavBar;
