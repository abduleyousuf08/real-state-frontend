import React from 'react'
import './MyActivities.css';

function ViewedProperties() {
    const recentViewed = [
        { id: 1, name: 'Beautiful 2BR Apartment', imageUrl: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Cozy Studio in the City', imageUrl: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Spacious 3BR House with Garden', imageUrl: 'https://via.placeholder.com/150' },
    ];
    return (
        <div>
            <div className="my-activities-section">
                <h3>Recent Viewed Properties</h3>
                <div className="my-activities-grid">
                {recentViewed.map(property => (
                    <div key={property.id} className="my-activities-item">
                    <img src={property.imageUrl} alt={property.name} />
                    <div className="my-activities-item-name">{property.name}</div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default ViewedProperties
