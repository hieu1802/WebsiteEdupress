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
                        <h4>by <span>Determined-Poitras</span></h4>
                        <h5>Create an LMS Website with LearnPress</h5>
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
                        <div className='btnClick'>
                            <p>Xem Chi Tiết</p>
                        </div>
                    </div>
                </div>
            </div>
            ))}
          
       </div>
       <div className='boxSearch'>
            <h2>Tìm Kiếm</h2>
            <div className='searchValue'>
                <p> Xấp xếp tăng dần</p>
                <span><input type='radio'/>Học Phí</span>
            </div>
       </div>
    </div>
  )
}

export default Container