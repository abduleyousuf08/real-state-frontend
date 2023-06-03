import React, { useContext } from 'react'
import UseFetchRecipientUser from '../../Hooks/UseFetchRecipient'
import { ChatContext } from '../../Context/ChatContext'
import avatarm from '../../Assets/Avatar m.png'
import { format } from 'timeago.js'
import unreadNotifications from '../../Utils/unreadNotificationsFunc'
import defaultProfile from '../../Assets/Profile.jpg'
import { Link } from 'react-router-dom'
import { UseFetchLatestMessage } from '../../Hooks/UseFetchLatestMessage'

function UserChat({ chat, user }) {
    const { recipientUser } = UseFetchRecipientUser(chat, user)
    const { onlineUsers, notifications, markThisUserNotificationsAsRead, clearNotifications } = useContext(ChatContext)
    const { latestMessage } = UseFetchLatestMessage(chat)
    const isOnline = onlineUsers?.some((user)=> user?.userId === recipientUser?._id)
    const unreadNotification = unreadNotifications(notifications)
    const thisUserNotification = unreadNotification?.filter(n => n.senderId === recipientUser?._id)
    
    const truncateText = (text)=>{
        let shortText = text.substring(0, 20);
        
        if(text.length > 20){
            shortText = shortText + "...";
        }
        return shortText
    }
    
    return (
        <Link to={`/chat/${chat._id}`}>
            <div className='w-80'>
                <button className='py-1 mx-3 focus:bg-slate-100 focus:rounded-lg'
                onClick={() => {
                        if(thisUserNotification?.length !== 0){
                            markThisUserNotificationsAsRead(
                                thisUserNotification,
                                notifications
                            );
                            clearNotifications(recipientUser?._id)
                        }
                    }}>
                    <div className='flex items-center gap-2 py-1 relative'>
                        {isOnline && <div className='bg-lime-500 border rounded-full absolute w-4 h-4' style={{ marginLeft: '2rem', marginBottom: '2rem' }}></div>}
                        <img
                            src={recipientUser?.image.url || defaultProfile}
                            alt="Profile"
                            className="w-11 h-11 object-cover rounded-full"/>
                        <div className="flex flex-col w-64 ">
                            <div className='flex justify-between w-54'>
                                <span className='font-bold'>{recipientUser?.name}</span>
                                <span className='text-gray-500 text-xs'>{format(latestMessage?.createdAt)}</span>
                            </div>
                            <div className='flex justify-between'>
                                <span className= 'text-gray-500 overflow-hidden h-6'>
                                    {latestMessage ? (latestMessage?.text && (
                                        <span>{truncateText(latestMessage?.text)}</span>
                                )):(<p>Message Preview</p>)}</span>
                                <span className={thisUserNotification?.length > 0 ? 'border rounded-full self-center w-5 h-5 text-xs bg-lime-500 text-white' : ''}>{thisUserNotification?.length > 0 ? thisUserNotification?.length : ''}</span>
                            </div>
                        </div>
                    </div>
                    <hr className='border-t border-gray-100 mt-2'/>
                </button>
            </div>
        </Link>
    )
}

export default UserChat
