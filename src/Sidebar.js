import React from 'react';
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import SidebarChat from "./SidebarChat";
import { useStateValue } from "./StateProvider";

function Sidebar() {
const [{user}, dispatch] = useStateValue();

    return(
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar src={user?.photoURL} />
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlinedIcon />
                    <input placeholder="Search or start new chat" type="text"/>
                </div>
            </div>

            <div className="sidebar_chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
            <div class="footer">
                <p><img src="https://img.icons8.com/ios/40/000000/z.png"/><img src="https://img.icons8.com/ios/40/000000/w.png"/><img src="https://img.icons8.com/nolan/35/filled-like.png"/></p>
            </div>
        </div>
    );
}

export default Sidebar;