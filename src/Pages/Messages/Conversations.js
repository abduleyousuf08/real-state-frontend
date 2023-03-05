import React from 'react'

function Conversations() {
    return (
        <div>
            <div className="follower conversation">
                <div className='follower-flex'>
                    <img
                        src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80'
                        alt="Profile"
                        className="followerImage"/>
                    <div className="name name-status">
                        <span>Hamda Mohamed</span>
                        <span className='online-status'>Online</span>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default Conversations
