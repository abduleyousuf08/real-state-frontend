    import React, { useState } from 'react';
    import './MyActivities.css';
    import ViewedProperties from './ViewedProperties';
    import SavedProperties from './SavedProperties';
    import UserReviews from './UserReviews';
    import {MdOutlineArrowDropDown, MdOutlineDelete} from 'react-icons/md'

    const menuItems = [
    { id: 'recent', label: 'Recent Viewed Properties', component: <ViewedProperties /> },
    { id: 'saved', label: 'Saved Properties', component: <SavedProperties /> },
    { id: 'review', label: 'Review and Ratings', component: <UserReviews /> }
    ];

    function MyActivities() {
    const [selectedItem, setSelectedItem] = useState('recent');

    const handleClick = (selected) => {
        setSelectedItem(selected);
    };

    return (
        <div className="my-activities-container">
        <div className="my-activities-title">
            {menuItems.map((item) => (
            <MenuItem
                key={item.id}
                label={item.label}
                active={item.id === selectedItem}
                onClick={() => handleClick(item.id)}
            />
            ))}
        </div>
        <div className="my-activities-content">
            <div className='my-activities-sorting'>
                <span className='my-activities-category'>Category:
                    <select className='my-activities-options'>
                            <option value="#"> All <MdOutlineArrowDropDown/></option>
                            <option value="#">Rent</option>
                            <option value="#">Buy</option>
                    </select>
                    <span className='my-activities-delete-btn'><MdOutlineDelete/>Delete all</span>
                </span>
                
                <span className='my-activities-category'>Sort by:
                    <select className='my-activities-options'>
                            <option value="#"> Recently Posted<MdOutlineArrowDropDown/></option>
                            <option value="#"> Price: Low to High</option>
                            <option value="#">Price: High to Low </option>
                    </select>
                </span>
            </div>
                {menuItems.find((item) => item.id === selectedItem).component}
        </div>
        </div>
    );
    }

    function MenuItem({ label, active, onClick }) {
    return (
        <a
        href={`#/${label.toLowerCase().replace(' ', '-')}`}
        className={`user-menu ${active ? 'user-menu-selected' : ''}`}
        onClick={onClick}
        >
        <div>{label} <span>0</span></div>
        </a>
    );
    }

    export default MyActivities;
