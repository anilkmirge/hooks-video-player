import React from 'react';
import PlayListItem from '../PlaylistItem';
import StyledPlaylistItems from '../styles/StyledPlaylistItems';
import withLink from '../hoc/withLink';

const PlayListItemWithLink = withLink(PlayListItem);

const PlayListItems = ({ videos, active }) => (
	<StyledPlaylistItems>
		{videos.map((video) => (
			<PlayListItemWithLink
				key={video.id}
				video={video}
				active={video.id === active.id ? true : false}
				played={video.played}
			/>
		))}
	</StyledPlaylistItems>
);

export default PlayListItems;
