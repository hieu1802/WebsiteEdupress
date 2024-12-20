import React from 'react'
import './Container.css'
import img12 from '../img/img12.png'
import {
    AiFillSignal ,
    AiOutlineUserAdd,
    AiOutlineClockCircle,
    AiFillBook 
  } from "react-icons/ai";
  import { topCourses } from "../data/FeaturedCoursesDaa";
import { Link } from 'react-router-dom';


function Container() {
  return (
    <div className='container'>
       <div className='boxProduct'>
            <h2>All Courses</h2>
            {topCourses.map((items)=>(
                <div className='boxContent' id={items.id}>
                <div className='boxImg'>
                    <img src={items.img}/>
                </div>
                <div className='boxTexT'>
                    <div className='text'>
                        <h4>by <span>{items.author}</span></h4>
                        <h5>{items.courseName}</h5>
                        <div className='iconsValue'>
                            <span><AiOutlineClockCircle className='icons'/> {items.time} Weeks</span>
                            <span><AiOutlineUserAdd className='icons'/> {items.student}</span>
                            <span><AiFillSignal className='icons'/> All Lv</span>
                            <span><AiFillBook className='icons'/> {items.lessons} Lessons</span>

                        </div>
                    </div>
                    <div className='boxPrice'>
                        <div className='priceBox'>
                            <p>{items.price}</p>
                            <span>{items.sale}</span>
                        </div>
                        <Link to='/Coursedetail' className='btnClick'>
                            <p>Xem Chi Tiết</p>
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