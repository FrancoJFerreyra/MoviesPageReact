import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ section }) => {
  return (
    <div>
      <nav>
        <ul className='pagination pagination-lg'>
          <li className={`page-item`} aria-current='page'>
            <Link className='page-link' to={`${section}/page_1`}>
              1
            </Link>
          </li>
          <li className='page-item'>
            <Link className='page-link' to={`${section}/page_2`}>
              2
            </Link>
          </li>
          <li className='page-item'>
            <Link className='page-link' to={`${section}/page_3`}>
              3
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
