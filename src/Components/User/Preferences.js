import React from 'react'
import { useState } from 'react';
import {BsDashLg} from 'react-icons/bs'
import Switch from "react-switch";

function Preferences() {
    const [checked, setChecked] = useState(false);
    const handleChange = nextChecked => {
        setChecked(nextChecked);
    };
    return (
        <div className='h-full p-10'>
            <div className=''>
                <span className='flex gap-3 items-center text-amber-400 font-bold text-xl'> <BsDashLg className="fill-current " style={{ strokeWidth: '3px' }}/>Notification Settings</span>
                <p className='text-gray-500 ml-8 mt-2'>Select the type of notifications you prefer to receive about your activities and recommendations.</p>
                <hr className='my-5'/>
                <div className='flex justify-between w-full'>
                    <div className='flex flex-col w-72 gap-1'>
                        <span className='font-semibold'>Email notifications</span>
                        <span className='text-gray-500'>get emails to find out what's going on when you are not active. You can turn these off.</span>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='flex gap-1.5'>
                            <Switch onChange={handleChange} checked={checked} />
                            <span className='flex flex-col'> 
                                <span className='font-semibold'>New Property Listings </span>
                                <p className='text-gray-500'>Notify when new properties that match my search criteria become available.</p>
                            </span>
                        </div>
                        <div className='flex gap-1.5'>
                            <Switch />
                            <span className='flex flex-col'> 
                                <span className='font-semibold'>Price Change </span>
                                <p className='text-gray-500'>Notify when there is a change in the price of a property I've saved.</p>
                            </span>
                        </div>
                        <div className='flex gap-1.5'>
                            <Switch />
                            <span className='flex flex-col'>
                                <span className='font-semibold'>Property Availability</span>
                                <p className='text-gray-500'>Notify when a property that was previously unavailable becomes available again.</p> 
                            </span>
                        </div>
                        <div className='flex gap-1.5'>
                            <Switch  />
                            <div className='flex flex-col'> 
                                <span className='font-semibold'>Schedule a Viewing</span>
                                <p className='text-gray-500'>Notify when appointment of a scheduled viewing is confirmed.</p> 
                            </div>
                        </div>
                        
                    </div>
                </div>
                <hr className='my-5'/>
                <div className='flex justify-between w-full'>
                    <div className='flex flex-col w-72 gap-1'>
                        <span className='font-semibold'>Push Notifications</span>
                        <span className='text-gray-500'>get emails to find out what's going on when you are not active. You can turn these off.</span>
                    </div>
                    <div className='flex flex-col gap-5 mr-7'>
                        <div className='flex gap-1.5'>
                            <Switch onChange={handleChange} checked={checked} />
                            <span className='flex flex-col'> 
                                <span className='font-semibold'>New Property Listings </span>
                                <p className='text-gray-500'>Notify when new properties that match my search criteria become available.</p>
                            </span>
                        </div>
                        <div className='flex gap-1.5'>
                            <Switch/>
                            <span className='flex flex-col'> 
                                <span className='font-semibold'>Chat</span>
                                <p className='text-gray-500'>Notify a new message</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preferences
