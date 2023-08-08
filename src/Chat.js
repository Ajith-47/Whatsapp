import React from "react";
import './Chat.css'
import { Avatar } from "@mui/material";
import {IconButton} from "@mui/material";
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicNoneIcon from '@mui/icons-material/MicNone';
import TagFacesIcon from '@mui/icons-material/TagFaces';


function Chat(){
    return(
        <div className="Chat">
            <div className="Chat-header">
                <Avatar />

                <div className="Chat-headerInfo">
                    <h3>Room Name</h3>
                    <p>Last Seen at...</p>
                </div>

                <div className="Chat-headerRight">
                    <IconButton>
                        <ChatOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="Chat-body">
                <p className="Chat-message">
                    <span className="Chat-name">Sonny</span>
                    This is a message
                    <span className="Chat-timestamp">{new Date().toUTCString()}</span>
                </p>

                <p className="Chat-message Chat-receiver">
                    <span className="Chat-name">Sonny</span>
                    This is a message
                    <span className="Chat-timestamp">{new Date().toUTCString()}</span>
                </p>
            </div>

            <div className="Chat-footer">
                <TagFacesIcon />
                <form>
                    <input placeholder="Type a message" type="text"></input>
                    <button type="submit">Send Message</button>
                </form>
                <MicNoneIcon />
            </div>
        </div>
    );
}

export default Chat;