import React from 'react';
import { Dropdown, Nav } from 'react-bootstrap';

const Filter = ({ list, dropdownTitle }) => {
  return (
    <Nav.Item as={'li'}>
      <Dropdown>
        <Dropdown.Toggle as={'a'} className='nav-link btn'>
          {dropdownTitle}
        </Dropdown.Toggle>
        <Dropdown.Menu as='ul'>{list}</Dropdown.Menu>
      </Dropdown>
    </Nav.Item>
  );
};
export default Filter;
