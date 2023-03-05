import React from 'react';
import ChatBox from './ChatBox';
import Conversations from './Conversations';
import './Message.css';


function Message() {


    return (
        <div className="Chat">
        {/* Left Side */}
        <div className="Left-side-chat">
        <div className="Chat-container">
            <h2>Chats</h2>
            <div className="Chat-list">
                <Conversations/>
            </div>
        </div>
        </div>

        {/* Right Side */}

        <div className="Right-side-chat">
        <ChatBox
        />
        </div>
    </div>
    )
}

export default Message;
