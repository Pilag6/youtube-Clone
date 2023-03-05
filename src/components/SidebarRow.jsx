import React from "react";
import "./SidebarRow.css";


function SidebarRow({ icon, title }) {
    return (
        <div className="sidebarRow">
            <div className="sidebarRow__icon">{icon}</div>
            <h3 className="sidebarRow__title">{title}</h3>
        </div>
    );
}

export default SidebarRow;
