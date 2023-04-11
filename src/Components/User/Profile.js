import React, { useContext } from "react";
import {BsDashLg} from 'react-icons/bs'
import profile from '../../Assets/Profile.jpg'
import {AiFillCamera} from 'react-icons/ai'
import {MdModeEditOutline} from 'react-icons/md'
import { AuthContext } from "../../Context/AuthContext";


function Profile() {
    const { user } = useContext(AuthContext)
    return (
        <div className='h-full p-10'>
            <div>
                <h2 className='flex gap-3 items-center text-amber-400 font-bold text-xl'> <BsDashLg className="fill-current " style={{ strokeWidth: '3px' }}/>Profile </h2>
                <div className="flex p-10 mt-10 gap-10 ml-16">
                    <div>
                        <img src={profile} className='w-72 border rounded-lg object-fit' alt=''/>
                        <label htmlFor="profile-photo" className="absolute top-20 mt-20 ml-5 cursor-pointer">
                            <AiFillCamera className="h-6 w-6 fill-current" style={{strokeWidth:'2px'}}/>
                        </label>
                        <input type="file" id="profile-photo" className="absolute opacity-0" />
                    </div>
                    <div className="mt-4 flex flex-col gap-5">
                        <div className="flex flex-col">
                            <label className="">Full Name: </label>
                            <span className="text-gray-500 ">{user?.name}</span>
                            <input className="hidden" placeholder="John Doe"  size="30" type="text" />
                        </div>
                        <div className="flex flex-col">
                            <label className="">Email:</label>
                            <span className="text-gray-500 ">{user?.email}</span>
                            <input className="hidden" placeholder="john.doe@example.com" type="email"/>
                        </div>
                        <div className="flex flex-col">
                            <label className="">Phone Number:</label>
                            <span className="text-gray-500 ">{user?.phone}</span>
                            <input className="hidden"  type="tel"/>
                        </div>
                        <div className="flex flex-col">
                            <label className="">Address:</label>
                            <span className="text-gray-500 ">Jigjiga-Yar, Hargeisa/Somaliland</span>
                            <input className="hidden"  type="text"/>
                        </div> 
                        <button className='mt-5 flex items-center gap-2 border rounded-md p-2 border-amber-400  justify-center font-bold text-amber-400 hover:bg-amber-400 hover:text-white'><MdModeEditOutline className="fill-current"/> Edit Profile</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Profile;
