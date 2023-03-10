import React from "react";
import "./Profile.css";

function Profile() {
  return (
      <div className='profile'>
          <div className='profile-wrapper'>
              <div className='profile-container'>
                  <span className='profile-title'>User</span>
                  <div className="user-info">
                      <label className="profile-field">Full Name</label>
                      <input className="text-field" placeholder="John Doe"  size="30" type="text"/>
                  </div>
                  <div className="user-info">
                      <label className="profile-field">Email</label>
                      <input className="text-field" placeholder="john.doe@example.com" type="email"/>
                  </div>
                  <div className="user-info">
                      <label className="profile-field">Phone</label>
                      <input className="text-field"  type="tel"/>
                  </div>
                  <div className='user-info'>
                      <span className='profile-field'>Profile Image</span>
                      <div className='user-file'>
                          <img src='https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg' className='user-img' alt=''/>
                          <input type="file" className='user-img-btn'/>
                      </div>
                  </div>
                  <button className='save-btn'>Save User Profile</button>
              </div>
          </div>

          <div className='profile-wrapper'>
              <div className='profile-container'>
                  <span className='profile-title'>Set new password</span>
                  <div className="user-info">
                      <label className="profile-field">Current password</label>
                      <input className="text-field"  type="password"/>
                  </div>
                  <div className="user-info">
                      <label className="profile-field">New Password</label>
                      <input className="text-field" type="password"/>
                  </div>
                  <div className="user-info">
                      <label className="profile-field">Confirm New Password</label>
                      <input className="text-field" type="password"/>
                  </div>
                  <button className='save-btn'>Change Password</button>
              </div>
          </div>
      </div>
    );
  }

export default Profile;
