import React from "react";
import './Sidebar.css'
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SidebarChat from './SidebarChat';

function Sidebar(){
    return(
        <div className="Sidebar">
            <div className="Sidebar-header">
                <h1>Hii</h1>
                <div className="Sidebar-headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatOutlinedIcon />
                    </IconButton>
                    
                    <IconButton>
                        <MoreVertIcon/>    
                    </IconButton>
                </div>
            </div>

            <div className="Sidebar-search">
                <div className="Sidebar-searchContainer">
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <input placeholder="Search or Start new chat" type="text"></input>
                </div>
            </div>

            <div className="Sidebar-chat">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                
            </div>
        </div>
    );
}

export default Sidebar;