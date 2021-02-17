import React, { useState, useEffect } from 'react';
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import {AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import axios from "./axios";
import { useStateValue } from "./StateProvider";
import DateTimePicker from 'react-datetime-picker';



function Chat({ messages }) {
    const [value, onChange] = useState(new Date());

    const [input, setInput] = useState('');
    
    const [{user}, dispatch] = useStateValue();

   
    

    const sendMessage = async (e) => {
        e.preventDefault();
        console.log("You typed>>> ", input);

        await axios.post("/messages/new", {
            message: input,
            name: user.displayName,
            timestamp: "Just now!",
            received: false,
        });

        setInput("");
    };


    
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar src={user?.photoURL} />

                <div className="chat_headerInfo">
                    <h3>{user.displayName} &emsp; &emsp;<DateTimePicker onChange={onChange} value={value}/></h3>
                   
                </div>

                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat_body">
                {messages.map((message) => (
                <p className={`chat_message ${message.received && "chat_received"}`}>
                    <span className="chat_name">{message.name}</span>
                    {message.message}
                    <span className="chat_timestamp">{message.timestamp}</span>
                </p>
                ))}
            </div>

            <div className="chat_footer">
                <InsertEmoticonIcon />
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message" type="text" />
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    );
}


export default Chat;

