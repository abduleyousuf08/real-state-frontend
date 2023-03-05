import React from 'react'
import './MyActivities.css';
import { GrLocation } from 'react-icons/gr'
import { BsClock } from 'react-icons/bs'
import { FaStar, FaRegStar } from 'react-icons/fa';

function UserReviews() {
    const userReviews = [
        { id: 1, imageUrl: 'https://www.somproperty.com/wp-content/uploads/2022/09/17-1170x785.jpg' , name: 'Jigjiga Yar Apartment', rating: 5, comment: 'I had a fantastic stay at this property. The host was very friendly and accommodating, and the location was perfect for exploring the city.' },
        { id: 2, imageUrl: 'https://www.somproperty.com/wp-content/uploads/2022/11/IMG_7773-1170x785.jpg', name: 'Cozy and Clean Apartment', rating: 4, comment: 'This apartment was just what I was looking for. It was clean and comfortable, and the location was convenient.' },
        { id: 3, imageUrl: 'https://www.somproperty.com/wp-content/uploads/2022/09/15-1170x785.jpg', name: 'Excellent Experience', rating: 2, comment: 'I would highly recommend this property to anyone looking for a great place to stay. The host was very helpful and the property was beautiful.' },
    ];

    const stars = (rating) => {
            const stars = [];
            for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<FaStar key={i} />);
            } else {
                stars.push(<FaRegStar key={i} />);
            }
            }
            return stars;
        };

    return (

        <div>
            <div className="my-activities-section">
                <div className="my-activities-grid">
                    {userReviews.map(review => (
                        <div key={review.id} className="my-activities-item">
                            <img src={review.imageUrl} alt='' className="my-activities-image-item"/>
                        <div className="my-activities-review-header">
                            <div className="my-activities-review-name"><GrLocation/>{review.name}</div>
                            <div className="my-activities-review-rating">{stars(review.rating)}</div>
                        </div>
                        <div className="my-activities-review-comment">{review.comment}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UserReviews
