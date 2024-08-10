import React from 'react';
import './PriceCard.css';
import Card from './image/card.jpg';
import './CourseDetail.css';

function PriceCourseCard() {
    return (
        <div className="promo-card">
            <div className="promo-image">
                <img src={Card} />
            </div>
            <div className="promo-content">
                <div className="promo-pricing">
                    <span className="original-price">$59.0</span>
                    <span className="discount-price">$49.0</span>
                </div>
                <button className="start-now-button">Start Now</button>
            </div>
        </div>
    );
}

export default PriceCourseCard;
