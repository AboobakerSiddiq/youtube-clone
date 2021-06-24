import React from 'react';
import './ChannelRow.css';
import {Avatar} from "@material-ui/core";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

function ChannelRow({image,channel,subs,nooFvideos,verified,description}) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow_logo" alt={channel} src={image}/>
            <div className="channel_text">
                <h4>{channel} {verified && <CheckCircleOutlineIcon/>} </h4>
                <p>{subs}subscribers .{nooFvideos} videos </p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
