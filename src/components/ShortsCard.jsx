import React from "react";
import "./ShortsCard.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ShortsCard = ({ image, title, views }) => {
    return (
        <div className="shortsCard">
            <img className="shortsCard__img" src={image} alt="YouTube Videos" />

            <div className="shortsCard__text">
                <div className="shortsCard__title">
                    <h4>{title}</h4>
                    <MoreVertIcon className="shortsCard__title--dots"/>
                </div>
                <p>{views}</p>
            </div>
        </div>
    );
};

export default ShortsCard;
