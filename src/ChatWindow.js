import React, {Component} from "react";
import MessageList from "./MessageList";
import InputSender from "./InpuSender";

class ChatWindow extends Component {

    render() {

        const {username, messages, onSendHandler} = this.props

        return <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{username}</div>
            <MessageList messages={messages} username={username}/>
            <InputSender username={username} sendHandler={onSendHandler}/>
        </div>
    }
}



export default ChatWindow;
