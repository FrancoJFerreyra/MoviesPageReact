import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Nav } from 'react-bootstrap';

const Filter = ({ list, dropdownTitle }) => {
  return (
    <Nav.Item as={'li'} className='header__dropdown--list'>
      <Dropdown>
        <Dropdown.Toggle as={'a'} className='nav-link btn dropdown-toggle'>
          {dropdownTitle}
        </Dropdown.Toggle>
        <Dropdown.Menu as='ul'>{list}</Dropdown.Menu>
      </Dropdown>
    </Nav.Item>
  );
};
export default Filter;
