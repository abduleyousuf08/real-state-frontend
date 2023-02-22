import React from 'react'
import './MyActivities.css';

function SavedProperties() {
    const savedProperties = [
        { id: 1, name: 'Luxury Villa with Private Pool', imageUrl: 'https://www.somproperty.com/wp-content/uploads/2022/09/5-5-1170x785.jpg' },
        { id: 2, name: 'Beachfront Bungalow with Ocean View', imageUrl: 'https://www.somproperty.com/wp-content/uploads/2023/01/1-1-1170x785.jpg' },
        { id: 3, name: 'Rustic Cabin in the Mountains', imageUrl: 'https://www.somproperty.com/wp-content/uploads/2022/11/DJI_0573-1170x785.jpg' },
    ];
    return (
        <div>
            <div className="my-activities-section">
                <div className="my-activities-grid">
                {savedProperties.map(property => (
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

export default SavedProperties
