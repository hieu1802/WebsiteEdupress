import React from 'react';
import Card from './image/card.jpg';
import './CourseDetail.css';

const PriceCourseCard = ({ course, onGetNow }) => {
    if (!course) return null;
    return (
        <div className="promo-card">
            <div className="promo-image">
                <img src={course.img} />
            </div>
            <div className="promo-content">
                <div className="promo-pricing">
                    <span className="original-price">{course.price}</span>
                    <span className="discount-price">{course.sale}</span>
                </div>
                <button className="start-now-button" onClick={onGetNow} >Buy Now</button>
            </div>

        </div>
    );
}

export default PriceCourseCard;
