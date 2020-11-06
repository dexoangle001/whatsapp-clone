import React, { useState } from 'react';
import "./Chat.css";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Avatar,IconButton} from "@material-ui/core";
import { InsertEmoticon, Mic } from '@material-ui/icons';
import axios from "../../axios";


function Chat({messages}) {

    const sendMessage= async(e)=>{
        e.preventDefault();

        await axios.post('/messags/new',{
            message:input,
            name:"Demo",
            timestamp:'Just now',
            received:false
        });

        setInput("")
    }

    const [input,setInput] = useState("");
    

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar     />

                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at....</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>

                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon   />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                {
                    messages.map((message)=>(
                        <p div className={`chat__message ${message.received && "chat__reciver" }`}>
                        <span className="chat__name">{message.name} </span>
                        {message.message}

                        <span className="chat__timestamp">
                            {
                                message.timestamp
                            }
                        </span>
                        </p>
                    ))
                }

            
            </div>

            <div className="chat__footer">
                <InsertEmoticon />

                <form>
                    <input
                    type="text"
                    value={input}
                    onChange={(e)=> setInput(e.target.value)}
                    placeholder="Type a message"
                    />

                    <button
                    type="submit"
                    onClick={sendMessage}
                    >
                        Send a message
                    </button>
                </form>

                <Mic    />
            </div>
        </div>
    )
}

export default Chat
