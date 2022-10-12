import React from 'react';

const Card = ({ path, title, popularity }) => {
  return (
    <>
      <div className='image'>
        <img
          className='cardImage'
          src={`https://image.tmdb.org/t/p/w500/${path}`}
        />
      </div>
      <div className='content'>
        <a className='header'>{title}</a>
      </div>
      <div className='extra content'>
        <a>
          <i className='eye icon'></i>
          {popularity}
        </a>
      </div>
    </>
  );
};

export default Card;
