import React from 'react'
import {BsDashLg} from 'react-icons/bs'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

function Schedule() {
    return (
        <div className='h-full p-10'>
            <div>
                <h2 className='flex gap-3 items-center text-amber-400 font-bold text-xl'> <BsDashLg className="fill-current " style={{ strokeWidth: '3px' }}/>Schedule </h2>
                <Calendar className='mt-10'/>
            </div>
           
        </div>
    )
}

export default Schedule
