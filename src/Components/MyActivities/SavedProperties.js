import React from 'react'
import './MyActivities.css';

function SavedProperties() {
    const savedProperties = [
        { id: 1, name: 'Luxury Villa with Private Pool', imageUrl: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Beachfront Bungalow with Ocean View', imageUrl: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Rustic Cabin in the Mountains', imageUrl: 'https://via.placeholder.com/150' },
    ];
    return (
        <div>
            <div className="my-activities-section">
            <h3>Saved Properties</h3>
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
