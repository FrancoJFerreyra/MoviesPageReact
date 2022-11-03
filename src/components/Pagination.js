import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ section, page }) => {
  return (
    <div>
      <nav>
        <ul className='pagination pagination-lg pagination__container'>
          <li
            className={`page-item ${page == 1 ? 'active' : ''}`}
            aria-current='page'
          >
            <Link className='page-link' to={`${section}/page_1`}>
              1
            </Link>
          </li>
          <li className={`page-item ${page == 2 ? 'active' : ''}`}>
            <Link className='page-link' to={`${section}/page_2`}>
              2
            </Link>
          </li>
          <li className={`page-item ${page == 3 ? 'active' : ''}`}>
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
