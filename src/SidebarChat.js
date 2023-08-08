import React from "react";
import './SidebarChat.css'
import { Avatar } from "@mui/material";


function SidebarChat(){
    return (
        <div className="SidebarChat">
            <Avatar />
            <div className="SidebarChat-info">
                <h2>Room Name</h2>
                <p>This is the last message</p>
            </div>


        </div>
    );
}

export default SidebarChat