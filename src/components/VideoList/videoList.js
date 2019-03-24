import React from 'react';
import VideoListItem from '../VideoListItem/videoListItem';

const VideoList = ({ videos, onVideoSelect }) => {
    const videoItems = videos.map(data => {
        return (
            <VideoListItem
                onVideoSelect={onVideoSelect}
                key={data.etag}
                video={data}
            />
        );
    });
    return <ul className="col-md-4 list-group">{videoItems}</ul>;
};
export default VideoList;
