import React, { useState, useEffect } from 'react';
import "./SidebarChat.css";
import { Avatar} from "@material-ui/core";


function SidebarChat() {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    
    }, []);

    return (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebarChat_info">
                <h2>NAME</h2>
                <p> </p>
                <p> last message </p>
            </div>
        </div>
    );
}


export default SidebarChat;

