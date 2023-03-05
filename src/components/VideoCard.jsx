import React from "react";
import './VideoCard.css'
import Avatar from "@mui/material/Avatar";

const VideoCard = ({
    image,
    title,
    channel,
    views,
    timestamp,
    channelImage,
}) => {
    return (
        <div className="videoCard">
            <img className="videoCard__img" src={image} alt="YouTube Videos" />
            <div className="videoCard__info">
                <Avatar
                    className="videoCard__avatar"
                    alt={channel}
                    src={channelImage}
                />
                <div className="videoCard__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} • {timestamp}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
