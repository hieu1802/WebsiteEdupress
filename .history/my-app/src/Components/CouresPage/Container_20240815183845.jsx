import React from 'react'
import './Container.css'
import img12 from '../img/img12.png'
import {
    AiFillSignal ,
    AiOutlineUserAdd,
    AiOutlineClockCircle,
    AiFillBook 
  } from "react-icons/ai";


function Container() {
  return (
    <div className='container'>
       <div className='boxProduct'>
            <h2>All Courses</h2>
            <div className='boxContent'>
                <div className='boxImg'>
                    <img src={img12}/>
                </div>
                <div className='boxTexT'>
                    <div className='text'>
                        <h4>by <span>Determined-Poitras</span></h4>
                        <h5>Create an LMS Website with LearnPress</h5>
                        <div className='iconsValue'>
                            <span><AiOutlineClockCircle className='icons'/> 2 Weeks</span>
                            <span><AiOutlineUserAdd className='icons'/> 90</span>
                            <span><AiFillSignal className='icons'/> All Lv</span>
                            <span><AiFillBook className='icons'/> 20 Lessons</span>

                        </div>
                    </div>
                    <div className='boxPrice'>
                        <div className='priceBox'>
                            <p>6.000.000đ</p>
                            <span>4.000.000đ</span>
                        </div>
                        <div className='btnClick'>

                        </div>
                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Container