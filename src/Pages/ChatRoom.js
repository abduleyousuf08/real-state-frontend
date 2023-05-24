import React, { useContext } from 'react'
import { useState } from 'react';
import ChatBox from '../Components/Chat/ChatBox'
import { ChatContext } from '../Context/ChatContext';
import UserChat from '../Components/Chat/UserChat';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';




function ChatRoom() {
    const [selectedItem, setSelectedItem] = useState('Personal');
    const { user } = useContext(AuthContext)
    const { userChats, updateCurrentChat } = useContext(ChatContext)
    const [chatId, setChatId] = useState('');
    const Navigate = useNavigate()
    

    const handleClick = (selected) => {
        setSelectedItem(selected);
    };
    //const [activeChatId, setActiveChatId] = useState(null);
    
    
    // useEffect(() => {
    //     const extractedChatId = location.pathname.split('/').pop();
    //     setCurrentChat(extractedChatId);
    //     setChatId(extractedChatId);
    // }, [location, setCurrentChat]);
    
    const handleChatSelection = (chat) => {
        updateCurrentChat(chat);
        setChatId(chat._id);
        Navigate(`/chat/${chat._id}`)
    };
    

    return (
        <main className='h-screen shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
            <div className='flex h-full'>
                <div className='flex mt-5 w-full justify-center'>
                    {/* Right-side/ Chat-list*/}
                    <div className=' w-80 flex flex-col border pt-5 pl-1 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]' style={{ borderRadius: '1rem 0 0 1rem' }}>
                        <form className=' mx-2 justify-center h-10 border rounded-lg flex items-center bg-slate-100'>
                            <input type="search" placeholder="Search" className='bg-slate-100 text-black py-2 px-2.5 text-base h-full w-full outline-0 '/>
                            <button className='cursor-pointer w-11 h-11'>
                                <svg className='w-6 h-6 mx-3 mt-1 fill-current text-gray-400' viewBox="0 0 1024 1024"><path className="path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path></svg>
                            </button>
                        </form>
                        <nav className='mt-3 mx-5'>
                            <ul className='flex justify-between text-gray-400 font-semibold'>
                                <button className={selectedItem === 'All' ? 'font-bold text-black border-b-2 border-amber-400' : ''}><a href="#all-chats" onClick={()=>handleClick('All')}>All</a></button>
                                <button className={selectedItem === 'Personal' ? 'font-bold text-black border-b-2 border-amber-400' : ''}><a href="#personal-chats" onClick={()=>handleClick('Personal')}>Personal</a></button>
                                <button className={selectedItem === 'Group' ? 'font-bold text-black border-b-2 border-amber-400' : ''}><a href="#group-chats" onClick={()=>handleClick('Group')}>Group</a></button>
                            </ul>
                        </nav>
                        <div className='overflow-x-auto scrollbar-hide mt-3'>
                        {userChats?.map((chat, index) => (
                            <div key={index} onClick={() => handleChatSelection(chat)}>
                                <UserChat chat={chat} user={user} />
                            </div>
                        ))}
                        </div>
                    </div>
                    {/* Chat-Box */}
                    <div className='w-2/3'>
                        <ChatBox chatId={ chatId }/>
                    </div>
                </div>
            </div>
            
        </main>
    )
}

export default ChatRoom
