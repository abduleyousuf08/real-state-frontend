import React from 'react'
import {MdModeEditOutline} from 'react-icons/md'
import {BsDashLg} from 'react-icons/bs'
import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'


function Password() {
    const { changePass, changePassword, updatePassword} = useContext(AuthContext)
    return (
        <div className='h-full p-10'>
            <div className='w-2/3'>
                <h2 className='flex gap-3 items-center text-amber-400 font-bold text-xl'> <BsDashLg className="fill-current " style={{ strokeWidth: '3px' }}/>Change Password </h2>
                <div className='flex p-10 mt-10 gap-10 ml-16 mr-16 flex-col border-2 bg-slate-100 rounded-md items-center'>
                    <div className="flex flex-col gap-3">
                        <label className="font-semibold">Current password:</label>
                        <input className="outline-none border rounded-md w-64 border-cyan-900"  type="password"
                        onChange={(e)=> updatePassword({...changePassword, oldPassword:e.target.value})}/>
                    </div>
                    <div className="flex flex-col gap-3">
                        <label className="font-semibold">New Password:</label>
                        <input className="outline-none border rounded-md w-64 border-cyan-900" type="password"
                        onChange={(e)=> updatePassword({...changePassword, newPassword:e.target.value})}/>
                    </div>
                    <div className="flex flex-col gap-3">
                        <label className="font-semibold">Confirm New Password:</label>
                        <input className="outline-none border rounded-md w-64 border-cyan-900" type="password"
                        onChange={(e)=> updatePassword({...changePassword, confirmPassword:e.target.value})}/>
                    </div>
                    <button className= 'mt-5 flex items-center gap-2 border rounded-md p-2 border-amber-400  justify-center font-bold text-amber-400 hover:bg-amber-400 hover:text-white w-48'
                    onClick={changePass}><MdModeEditOutline className="fill-current"/>Change Password</button>
                </div>
                
            </div>
        </div>
    )
}

export default Password
