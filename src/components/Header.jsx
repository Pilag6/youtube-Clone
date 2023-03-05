import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Avatar from "@mui/material/Avatar";
import AppsIcon from "@mui/icons-material/Apps";
import Tooltip from "@mui/material/Tooltip";

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon className="header__Icons" />
                <Tooltip title="YouTube Home">
                    <img
                        className="header__logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
                        alt="YouTube Logo"
                    />
                </Tooltip>
                <span className="header__span">
                    <sup>DE</sup>
                </span>
            </div>

            <div className="header__center">
                <div className="header__center--search">
                    <input type="text" placeholder="Search..." />
                    <Tooltip title="Search">
                        <SearchIcon className="header__center--SearchIcon" />
                    </Tooltip>
                </div>
                <SearchIcon className="displayNone" />
                <Tooltip title="Search with your voice">
                    <MicIcon className="header__Icons" />
                </Tooltip>
            </div>

            <div className="header__right">
                <Tooltip title="Create">
                    <VideoCallIcon className="header__Icons" />
                </Tooltip>
                <Tooltip title="Notifications">
                    <NotificationsNoneIcon className="header__Icons" />
                </Tooltip>
                <Tooltip title="Google Apps">
                    <AppsIcon className="header__Icons" />
                </Tooltip>
                <Avatar
                    className="avatar"
                    alt="Pila Gonzalez"
                    src="https://avatars.githubusercontent.com/u/79191808?v=4"
                    sx={{ width: 32, height: 32 }}
                />
            </div>
        </div>
    );
};

export default Header;
