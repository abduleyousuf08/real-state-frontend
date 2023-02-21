import React, { useState } from 'react';
import './Message.css';

function Message() {
    const [messageInput, setMessageInput] = useState('');
    const [messages, setMessages] = useState([
        { user: 'User1', text: 'Hello!' },
        { user: 'User2', text: 'Hi, how are you?' },
        { user: 'User1', text: 'I am doing great, thanks for asking.' },
        { user: 'User2', text: 'That\'s great to hear.' },
    ]);

    const handleInput = (event) => {
        setMessageInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (messageInput !== '') {
        const newMessage = { user: 'User1', text: messageInput };
        setMessages([...messages, newMessage]);
        setMessageInput('');
        }
    };

    return (
        <div className="chat-room">
        <div className="chat-window">
            {messages.map((message, index) => (
            <div key={index} className="message">
                <div className="message-header">{message.user}</div>
                <div className="message-text">{message.text}</div>
            </div>
            ))}
        </div>
        <form className="send-message-form" onSubmit={handleSubmit}>
            <input
            className="message-input"
            type="text"
            placeholder="Type your message"
            value={messageInput}
            onChange={handleInput}
            />
            <button className="send-button" type="submit">Send</button>
        </form>
        </div>
    );
}

export default Message;
