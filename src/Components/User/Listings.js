import React from 'react'
import {BsDashLg} from 'react-icons/bs'
import { AiOutlineClear } from 'react-icons/ai'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import useAgentListings from '../../Hooks/UseAgentListing'
import CommonCard from '../../screens/CommonCard'



function Listings() {
    const { agentListings } = useAgentListings()

    
    
    return (
        <div className='h-full p-10'>
            <div className='w-2/3'>
                <h2 className='flex gap-3 items-center text-amber-400 font-bold text-xl'> <BsDashLg className="fill-current " style={{ strokeWidth: '3px' }}/>Agent Listings </h2>
                <div className='flex justify-between mt-5 items-center'>
                    <div className='flex gap-10 items-center'>
                        <div className='font-semibold flex gap-2 text-slate-500'>Category:
                            <select className='border border-slate-500 outline-none rounded-md'>
                                    <option value="#"> All <MdOutlineArrowDropDown/></option>
                                    <option value="#">Rent</option>
                                    <option value="#">Buy</option>
                            </select>
                        </div>
                        <button className= 'flex items-center gap-2 border rounded-md px-1 border-slate-500 text-slate-500  justify-center font-semibold hover:bg-cyan-900 hover:text-white w-15'>
                            <AiOutlineClear className="fill-current"/>Clear
                        </button>
                    </div>
                    <div className='font-semibold flex gap-2 text-slate-500'>Sort by:
                        <select className='border border-slate-500 outline-none rounded-md'>
                                <option value="#"> Recently Posted<MdOutlineArrowDropDown/></option>
                                <option value="#"> Price: Low to High</option>
                                <option value="#">Price: High to Low </option>
                        </select>
                    </div>
                </div>
                <div className='mt-5 flex flex-wrap justify-evenly gap-5'>
                    {agentListings.length === 0 ? (
                        <p>No listings found.</p>
                    ) : (
                        agentListings.map((property) => (
                            //console.log(property)
                            <CommonCard key={property._id}  house={property} />
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default Listings;
