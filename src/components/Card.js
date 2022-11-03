import React from 'react';

const Card = ({ path, title }) => {
  return (
    <div className='card'>
      <img
        src={`https://image.tmdb.org/t/p/original/${path}`}
        className='card-img-top'
        alt='...'
      />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
      </div>
    </div>
  );
};

export default Card;
