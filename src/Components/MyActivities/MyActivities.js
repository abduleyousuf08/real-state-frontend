import React from 'react';
import './MyActivities.css';

function MyActivities() {
    
    const recentViewed = [
        { id: 1, name: 'Beautiful 2BR Apartment', imageUrl: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Cozy Studio in the City', imageUrl: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Spacious 3BR House with Garden', imageUrl: 'https://via.placeholder.com/150' },
    ];
    const savedProperties = [
        { id: 1, name: 'Luxury Villa with Private Pool', imageUrl: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Beachfront Bungalow with Ocean View', imageUrl: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Rustic Cabin in the Mountains', imageUrl: 'https://via.placeholder.com/150' },
    ];
    const userReviews = [
        { id: 1, name: '', rating: 5, comment: 'I had a fantastic stay at this property. The host was very friendly and accommodating, and the location was perfect for exploring the city.' },
        { id: 2, name: 'Cozy and Clean Apartment', rating: 4, comment: 'This apartment was just what I was looking for. It was clean and comfortable, and the location was convenient.' },
        { id: 3, name: 'Excellent Experience', rating: 5, comment: 'I would highly recommend this property to anyone looking for a great place to stay. The host was very helpful and the property was beautiful.' },
    ];

    return (
        <div className="my-activities-container">
        <h2>My Activities</h2>
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
        <div className="my-activities-section">
            <h3>User Reviews</h3>
            <div className="my-activities-grid">
            {userReviews.map(review => (
                <div key={review.id} className="my-activities-item">
                <div className="my-activities-review-header">
                    <div className="my-activities-review-name">{review.name}</div>
                    <div className="my-activities-review-rating">{review.rating}</div>
                </div>
                <div className="my-activities-review-comment">{review.comment}</div>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
}

export default MyActivities;
