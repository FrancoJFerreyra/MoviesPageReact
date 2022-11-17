import React from 'react';

const Video = ({ video }) => {
	return (
		<div className={`moviePage__trailer--container ${video ? 'ratio ratio-16x9' : 'text-center'}`}>
			{video ? (
				<iframe
					allowFullScreen
					title={`${video.name}`}
					src={`https://www.youtube-nocookie.com/embed/${video.key}`}
				/>
			) : (
				<h3>Video not available</h3>
			)}
		</div>
	);
};

export default Video;
