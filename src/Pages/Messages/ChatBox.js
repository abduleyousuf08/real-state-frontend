import React from 'react'
import './Message.css'
import InputEmoji from 'react-input-emoji'
function ChatBox() {
    return (
        <div>
            <div className="ChatBox-container">
                {[] ? (
                    <>
                    {/* chat-header */}
                    <div className="chat-header">
                    <div className="follower">
                        <div className='follower-flex'>
                            <img
                                src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80'
                                alt="Profile"
                                className="followerImage"/>
                            <div className="name">
                                <span>
                                    Hamda Mohamed
                                </span>
                            </div>
                        </div>
                    </div>
                    <hr
                        style={{
                        width: "98%",
                        border: "0.1px solid #ececec",
                        marginTop: "20px",
                        }}
                    />
                    </div>
                    {/* chat-body */}
                    <div className="chat-body" >
                        Hello, How're you?
                    </div>
                    {/* chat-sender */}
                    <div className="chat-sender">
                    <div>+</div>
                    <InputEmoji/>
                    <div className="send-button button">Send</div>
                    <input
                        type="file"
                        name=""
                        id=""
                        style={{ display: "none" }}
                    />
                    </div>{" "}
                </>
                ) : (
                <span className="chatbox-empty-message">
                    Tap on a chat to start conversation...
                </span>
                )}
            </div>
        </div>
    )
}

export default ChatBox
