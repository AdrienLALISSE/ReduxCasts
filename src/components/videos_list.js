import React from 'react';

import VideosListItem from './videos_list_item';

const VideosList = (props) =>{

    return (
        <ul className="col-md-4 list-group" >
            {props.videos.map( (video) => <VideosListItem video={video} key={video.etag} /> )}
        </ul>
    );
}

export default VideosList;