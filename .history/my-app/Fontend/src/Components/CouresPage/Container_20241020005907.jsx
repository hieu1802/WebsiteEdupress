import React, { useEffect, useState } from 'react';
import './Container.css'
import {
    AiFillSignal,
    AiOutlineUserAdd,
    AiOutlineClockCircle,
    AiFillBook
} from "react-icons/ai";
import { topCourses } from "../data/FeaturedCoursesDaa";
import { Link } from 'react-router-dom';
import axios from 'axios';
import img11 from '../img/img11.png'


function Container() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/courses')
            .then(response => {
                setCourses(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the courses!', error);
            });
    }, []);

    return (
        <div className='container'>
            <div className='boxProduct'>
                <h2>All Courses</h2>
                {courses.map((items) => (
                    <div className='boxContent' id={items.id}>
                        <div className='boxImg'>
                            <img src={img11} />
                        </div>
                        <div className='boxTexT'>
                            <div className='text'>
                                <h4>by <span>{items.author}</span></h4>
                                <h5>{items.courseName}</h5>
                                <div className='iconsValue'>
                                    <span><AiOutlineClockCircle className='icons' /> {items.time} Weeks</span>
                                    <span><AiOutlineUserAdd className='icons' /> {items.student}</span>
                                    <span><AiFillSignal className='icons' /> All Lv</span>
                                    <span><AiFillBook className='icons' /> {items.lessons} Lessons</span>

                                </div>
                            </div>
                            <div className='boxPrice'>
                                <div className='priceBox'>
                                    <p>{items.price}</p>
                                    <span>{items.sale}</span>
                                </div>
                                <Link to={`/Coursedetail/${items.id}`} state={{ course: items }} className='btnClick'>
                                    <p>Mua ngay</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Container