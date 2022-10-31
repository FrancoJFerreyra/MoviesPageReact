import { useEffect, useState } from 'react';
import useMovies from '../hooks/useMovies';
import { useParams } from 'react-router-dom';

const Video = ({ video }) => {
  console.log(video.key);
  return (
    <div className={video ? 'ratio ratio-16x9' : ''}>
      {video ? (
        <iframe
          allowFullScreen
          title={`${video.name}`}
          src={`https://www.youtube.com/embed/${video.key}`}
        />
      ) : (
        <h3>Video not available</h3>
      )}
    </div>
  );
};

export default Video;
