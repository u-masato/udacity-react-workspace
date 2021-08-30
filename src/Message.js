import React from "react";


const Message = (props) => {
    const {username, message} = props;
    return <li
        className={
            message.username === username ? 'message sender' : 'message recipient'
        }
    >
        <p>{`${message.username}: ${message.text}`}</p>
    </li>
}

export default Message;