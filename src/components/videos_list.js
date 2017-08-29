import React from 'react';

import VideosListItem from './videos_list_item';

const VideosList = (props) =>{

    const videoItems = props.videos.map( (video) => 
        <VideosListItem 
            video={video} 
            key={video.etag}
            onVideoSelect={props.onVideoSelect}
        /> 
    );

    return (
        <ul className="col-md-4 list-group" >
            {videoItems}
        </ul>
    );
}

export default VideosList;