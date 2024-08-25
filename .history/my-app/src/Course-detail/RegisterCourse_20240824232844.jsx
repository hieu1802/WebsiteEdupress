import React, { useState } from 'react';
import './RegisterCourse.css';
import sp from './image/logosp.jpg';
import bank from './image/logobank.png';
import momo from './image/momologo.png'
import spQR from './image/spqr.jpg';
import bankQR from './image/bankqr.jpg';
import momoQR from './image/mmqr.jpg';
const RegisterCouse = ({ course }) => {
    const [selectedQR, setSelectedQR] = useState(null);

    const handlePaymentClick = (qrImage) => {
        setSelectedQR(qrImage);
    };
    return (
        <div className="registration-form">
            <h2>Đăng Ký Khóa Học {course.courseName}</h2>
            <form>
                <label>
                    Họ và tên:<input type="text" name="name" required />
                </label><br></br>
                <label className='email-register-course'>
                    Email:
                    <input type="email" name="email" required />
                </label>
                <label style={{ display: 'block' }} className='phone-register-course'>
                    Số điện thoại:
                    <input type="tel" name="phone" required />
                </label>
                <div className='sale-course-price'>
                    <span className='sale-price-form original-form-price'> Giá bán:
                        <span className="original-priceS ">{course.price}</span>
                        <span className="discount-price">{course.sale}</span>
                    </span>
                    <span className='all-price'>Tổng tiền: <del>{course.sale}</del></span>

                </div>



                <label>
                    Phương thức thanh toán:
                    <div name="payment" required>
                        <div className='payment-logo'>
                            <span onClick={() => handlePaymentClick(momoQR)}><img src={momo} /></span>
                            <span onClick={() => handlePaymentClick(spQR)}><img src={sp} /></span>
                            <span onClick={() => handlePaymentClick(bankQR)}><img src={bank} /></span>
                        </div>
                        {selectedQR && (
                            <div className='qr-code'>
                                <h3>Quét mã QR để thanh toán:</h3>
                                <img src={selectedQR} alt="QR Code" />
                            </div>
                        )}
                    </div>
                </label>
            </form>
        </div >

    )
}
export default RegisterCouse;