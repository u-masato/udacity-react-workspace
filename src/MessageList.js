import React from "react";
import Message from "./Message";

const MessageList = (props) => {
    return <ul className="message-list">
        {props.messages.map((message, index) => (
            <Message key={index} username={props.username} message={message}/>
        ))}
    </ul>
}

export default MessageList;