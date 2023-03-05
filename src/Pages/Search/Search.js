import React from 'react'
import { useState } from 'react'
import { BsFilter } from 'react-icons/bs'
import './Search.css'
import SearchFilters from './SearchFilters'
import Property from './Property'
function Search() {
    const [searchFilters, setSearchFilters] = useState(false)
    return (
        <div>
            <div className='search-container'
            onClick={()=> setSearchFilters((prevFilters)=> !prevFilters)
            }>
                <span>Search Property By Filters</span>
                <BsFilter className='search-filter-icon'/>
            </div>
            {searchFilters && <SearchFilters/>}
            <span className='search-filters'>Properties</span>
            <div className='search-property'>
                {[].map((property)=> <Property property={property} key={property.id}/>)}
            </div>
            {[].length === 0 && (
                <div className='search-no-result'>
                    <img src='https://cdni.iconscout.com/illustration/premium/thumb/error-404-4344461-3613889.png' alt='no result' width={300} height={300}/>
                    <span>No Results Found</span>
                </div>
            )}
        </div>
    )
}

export default Search
