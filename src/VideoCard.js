import React from 'react';
import './VideoCard.css';
import Avatar from "@material-ui/core/Avatar";

function VideoCard({image,title,channelImage,views,timestamp,channel}) {
    return (
        <div className="Videocard">
            <img className="videocard_thumbnail" src={image} alt=""/>
            <div className="Videocard_info">
            <Avatar className="videocard_avatar" alt="channel" src={channelImage}/>
            <div className="video_text">
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>
                {views} . {timestamp}
                </p>
            </div>

            </div>
        </div>
    )
}

export default VideoCard
