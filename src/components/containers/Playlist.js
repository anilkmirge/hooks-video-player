import React from 'react';
import PlayListHeader from '../PlaylistHeader';
import PlayListItems from '../containers/PlaylistItems';
import NightMode from '../Nightmode';
import StyledPlaylist from '../styles/StyledPlaylist';

const PlayList = ({ videos, active, nightModeCallback, nightMode }) => (
	<StyledPlaylist>
		<NightMode nightModeCallback={nightModeCallback} nightMode={nightMode} />
		<PlayListHeader active={active} total={videos.length} />
		<PlayListItems videos={videos} active={active} />
	</StyledPlaylist>
);

export default PlayList;
