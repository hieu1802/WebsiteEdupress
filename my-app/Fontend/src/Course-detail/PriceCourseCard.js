import React from 'react';
import './CourseDetail.css';
import axios from 'axios';




const PriceCourseCard = ({ course }) => {
    function formatAmount(sale) {
        return parseInt(sale.replace(/\D/g, ''));
    }

    const handelBuyNow = async () => {
        try {
            const sale = course.sale
            const response = await axios.post(`http://localhost:8080/api/v1/user/payment`, {

                amount: formatAmount(sale)
            })
            if (response.data && response.data.payUrl) {
                window.location.href = response.data.payUrl;

            }
        } catch (error) {
            console.error('Lỗi khi khởi tạo thanh toán:', error);
        }


    }
    if (!course) return null;
    return (
        <div className="promo-card">
            <div className="promo-image">
                <img src={course.img} alt={course.courseName} />

            </div>
            <div className="promo-content">
                <div className="promo-pricing">
                    <span className="original-price">{course.price}</span>
                    <span className="discount-price">{course.sale}</span>
                </div>
                <button className="start-now-button" onClick={handelBuyNow} >Buy Now</button>
            </div>

        </div>
    );
}

export default PriceCourseCard;
