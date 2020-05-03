import React from 'react';
import StyledPlaylistItem from './styles/StyledPlaylistItem';

const PlayListItem = ({video, active, played}) => (
	<StyledPlaylistItem active={active} played={played}>
		<div className='main-player__video-nr'>{video.num}</div>
		<div className='main-player__video-name'>{video.title}</div>
		<div className='main-player__video-time'>{video.duration}</div>
	</StyledPlaylistItem>
);

export default PlayListItem;
