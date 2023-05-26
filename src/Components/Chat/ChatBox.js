import React, { useContext, useRef, useEffect, useState } from 'react'
import { IoCallOutline } from 'react-icons/io5'
import { RiSearch2Line } from 'react-icons/ri'
import { AiOutlineVideoCamera } from 'react-icons/ai'
import InputEmoji from "react-input-emoji";
import {IoIosSend} from 'react-icons/io'
import { BsLink } from 'react-icons/bs'
import { AuthContext } from '../../Context/AuthContext';
import { ChatContext } from '../../Context/ChatContext';
import UseFetchRecipientUser from '../../Hooks/UseFetchRecipient';
import chat from '../../Assets/startchat.png'
import { format } from 'timeago.js';
import defaultProfile from '../../Assets/Profile.jpg'


function ChatBox() {
    const { user } = useContext(AuthContext)
    const { currentChat, messages, sendTextMessage, onlineUsers } = useContext(ChatContext)
    const { recipientUser } = UseFetchRecipientUser(currentChat, user)
    const [textMessage, setTextMessage] = useState('')
    const lastMessageRef = useRef()
    
    const isOnline = onlineUsers?.some((user)=> user?.userId === recipientUser?._id)


    //always scroll to last message
    useEffect(()=> {
        lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    },[messages])
    
    

    return (
        
        <main className='bg-gray-100 h-full border rounded-br-lg rounded-tr-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] '>
            {recipientUser ? (
                <div className='border border-transparent h-full' style={{ borderRadius: '0 1rem 1rem 0' }}>
                    <div className='flex flex-col h-full'>
                        {/* Person You're chatting with */}
                        <div className='mt-3'>
                            <div className='flex justify-between'>
                                    <div className='flex gap-2 ml-4 mr-4'>
                                        <img
                                            src={recipientUser?.image.url || defaultProfile}
                                            alt="Profile"
                                            className="w-11 h-11 object-cover rounded-full"
                                        />
                                        <div className='flex flex-col w-'>
                                            <span className='font-semibold text-md '>{recipientUser?.name}</span>
                                            <span className='text-sm text-gray-500'>{isOnline ? "Online ": "Offline"}</span>
                                        </div>
                                    </div>
                                <div className='flex gap-5 m-2 mr-5'>
                                    <a href='#videocamera' className='border p-1 rounded-full bg-cyan-900'><AiOutlineVideoCamera className='text-white'/></a>
                                    <a href='#audiocall' className='border p-1 rounded-full bg-cyan-900'><IoCallOutline className='text-white'/></a>
                                    <a href='#search' className='border p-1 rounded-full bg-cyan-900'><RiSearch2Line  className='text-white' /></a>
                                </div>
                            </div>
                            <hr className='border-gray-300 mt-2'/>
                        </div>
                        {/* Chat Body */}
                        <div className='flex h-4/5 flex-col gap-5 p-6 overflow-y-auto scrollbar-hide' >
                            {messages && messages.map((message, index)=>
                            
                                <div 
                                    key={message._id}
                                    ref={lastMessageRef}
                                    className={`${
                                        message?.senderId !== user._id 
                                        ? 'flex gap-2' 
                                        : 'flex gap-2 flex-row-reverse'
                                    }`}
                                >
                                    <img
                                        src={`${
                                                message?.senderId !== user._id 
                                                ? recipientUser?.image.url || defaultProfile
                                                : user?.image.url || defaultProfile
                                            }`}
                                        alt="Profile"
                                        className="w-10 h-10 object-cover rounded-full"
                                    />
                                    <div className={`${message?.senderId !== user._id ?'flex items-baseline gap-2' : 'flex items-baseline gap-2 flex-row-reverse' }`}>
                                        <span className={`${message?.senderId !== user._id ? 'bg-cyan-900 text-white border rounded-t-2xl rounded-br-lg max-w-md w-fit p-3 -mt-10' : 'bg-amber-600 text-white border rounded-t-2xl rounded-bl-lg rounded-br-none max-w-md w-fit p-3 -mt-10'}`}>{message.text}</span>
                                        <span className='text-sm text-gray-500 mb-2'>{format(message.createdAt)}</span>
                                    </div>
                                    
                                </div>
                            )}
                        </div>
                        <div className='flex bg-white p-1.5 rounded-br-lg '>
                            <label htmlFor='file-upload' className='inline-block hover:bg-cyan-900 rounded-full cursor-pointer h-6 mt-3 '>
                                <BsLink className='w-6 h-6 text-cyan-900 hover:text-white'/>
                            </label>
                            <input id='file-upload' type='file' className='hidden'/>
                            <InputEmoji
                                placeholder="Type a message"
                                borderColor='rgba(22, 78, 99, 0.5)'
                                cleanOnEnter
                                theme='auto'
                                value={textMessage}
                                onChange = {setTextMessage}
                                fontFamily='nunito'
                            />
                            <button 
                                className='flex gap-2 justify-center items-center border h-7 mt-3 rounded-full bg-cyan-900'
                                onClick={()=> sendTextMessage(textMessage, user, currentChat._id, setTextMessage)}>
                                <IoIosSend className='w-6 h-4 text-white'/>
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div  className='bg-gray-100 flex flex-col items-center relative h-full' style={{ borderRadius: '0 1rem 1rem 0' }}>
                    <span className='mt-10 text-2xl font-bold absolute text-cyan-900'>Tap on a chat to start conversation...</span>
                    <img
                        src={chat}
                        alt='startChat'
                        className='h-96 mt-20'
                    />
        
                </div>
            )}
        </main>
    )
}

export default ChatBox
