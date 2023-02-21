import React, { useState } from 'react';
import './ChatRoom.css';

function ChatRoom() {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const handleNewMessage = (event) => {
        setNewMessage(event.target.value);
    };

    const handleSendMessage = (event) => {
        event.preventDefault();
        setMessages([...messages, newMessage]);
        setNewMessage('');
    };

    return (
        <div className="chat-room">
        <div className="chat-window">
            {messages.map((message, index) => (
            <div key={index} className="message">
                {message}
            </div>
            ))}
        </div>
        <form onSubmit={handleSendMessage} className="send-message-form">
            <input
            type="text"
            placeholder="Type your message"
            value={newMessage}
            onChange={handleNewMessage}
            className="message-input"
            />
            <button type="submit" className="send-button">
            Send
            </button>
        </form>
        </div>
    );
}

export default ChatRoom;
