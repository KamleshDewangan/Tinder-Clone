import React from 'react'
import './Chat.css'
import Avatar from '@material-ui/core/Avatar'
import { ListItem,List } from '@material-ui/core';
import {Link} from 'react-router-dom'
function Chat({ name, message, proPic,timeStamp }) {
    return (
       
        <List className="sample">
        <ListItem  className="sample" button component={Link} to={"/chat/neha"}>
        <div className="chat">
            <Avatar className="chat__img" src={proPic} />
            <div className="chat__details">
                <h2>{name}</h2>
                <p>{message}</p>
            </div>
            <p className="chat__timeStamp">{timeStamp}</p>
            </div>
        </ListItem>
        </List>
       
        
    )
}

export default Chat
