import React from 'react';

const Card = ({ path, title }) => {
  return (
    <div className='card'>
      <img
        src={`https://image.tmdb.org/t/p/w500/${path}`}
        className='card-img-top'
        alt='...'
      />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
      </div>
    </div>
    // {/* <div className='image'>
    //   <img
    //     className='cardImage'
    //     src={`https://image.tmdb.org/t/p/w500/${path}`}
    //     alt={title}
    //   />
    // </div>
    // <div className='content'>
    //   <a className='header'>{title}</a>
    // </div>
    // <div className='extra content'>
    //   <a>
    //     <i className='eye icon'></i>
    //     {popularity}
    //   </a>
    // </div> */}
  );
};

export default Card;
