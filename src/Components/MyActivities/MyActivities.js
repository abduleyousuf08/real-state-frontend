    import React, { useState } from 'react';
    import './MyActivities.css';
    import ViewedProperties from './ViewedProperties';
    import SavedProperties from './SavedProperties';
    import UserReviews from './UserReviews';

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
