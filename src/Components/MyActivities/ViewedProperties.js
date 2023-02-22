import React from 'react'
import './MyActivities.css';

function ViewedProperties() {
    const recentViewed = [
        { id: 1, name: 'Beautiful 2BR Apartment', imageUrl: 'https://www.somproperty.com/wp-content/uploads/2022/09/15-1170x785.jpg' },
        { id: 2, name: 'Cozy Studio in the City', imageUrl: 'https://www.somproperty.com/wp-content/uploads/2022/09/17-1170x785.jpg' },
        { id: 3, name: 'Spacious 3BR House with Garden', imageUrl: 'https://www.somproperty.com/wp-content/uploads/2022/11/IMG_7773-1170x785.jpg' },
    ];
    return (
        <div>
            <div className="my-activities-section">
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
