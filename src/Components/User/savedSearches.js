import { React, useContext } from 'react'
import {BsDashLg} from 'react-icons/bs'
import { AiOutlineClear } from 'react-icons/ai'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import UseViewedProperties from '../../Hooks/UseViewedProperties'
import { AuthContext } from '../../Context/AuthContext'
import PropertyCard from '../../screens/propertyCard'



function SavedSearches() {
    const { viewedProperties } = UseViewedProperties()
    const { clearViewedProperties } = useContext(AuthContext)

    const handleOnClick = ()=>{
        clearViewedProperties()
    }

    return (
        <div className='h-full p-10'>
            <div>
                <h2 className='flex gap-3 items-center text-amber-400 font-bold text-xl'> <BsDashLg className="fill-current " style={{ strokeWidth: '3px' }}/>Recent Searches </h2>
                <div className='flex justify-between mt-5 items-center'>
                    <div className='flex gap-10 items-center'>
                        <div className='font-semibold flex gap-2 text-slate-500'>Category:
                            <select className='border border-slate-500 outline-none rounded-md'>
                                    <option value="#"> All <MdOutlineArrowDropDown/></option>
                                    <option value="#">Rent</option>
                                    <option value="#">Buy</option>
                            </select>
                        </div>
                        <button className= 'flex items-center gap-2 border rounded-md px-1 border-slate-500 text-slate-500  justify-center font-semibold hover:bg-cyan-900 hover:text-white w-15'
                        onClick={handleOnClick}>
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
                <div className='mt-5 flex flex-wrap'>
                    {viewedProperties.length === 0 ? (
                        <p>No viewed properties found.</p>
                    ) : (
                        viewedProperties.map((property) => (
                            //console.log(property)
                            <PropertyCard key={property.propertyId}  house={property} />
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default SavedSearches
