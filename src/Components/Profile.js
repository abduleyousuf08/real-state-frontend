import React from 'react'
import '../CSS/Profile.css'

function Profile() {
return (
    <div className='profile-wrapper'>
        <div className=''>
            <div className='profile-container'>
                <div className="user-info">
                    <label className="profile-field">Full Name</label>
                    <input className="text-field" placeholder="John Doe"  size="30" type="text"/>
                </div>
                <div className="user-info">
                    <label className="profile-field">Email</label>
                    <input className="text-field" placeholder="john.doe@example.com" type="email"/>
                </div>
            </div>
        </div>
    </div>
)
}

export default Profile
