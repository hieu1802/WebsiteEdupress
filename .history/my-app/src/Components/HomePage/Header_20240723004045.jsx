import React from 'react'
import img01 from '../img/EduPress.png'
import img02 from '../img/img02.jpg'
import './HomePage.css'
import { IoIosSearch } from "react-icons/io";

function Header() {
  return (
    <>
        <div className='Header'>
            <div className='logoHeader'>
                <img src={img01}/>
                <h3>EduPress Academy</h3>
            </div>
            <ul>
                <li>Trang Chủ</li>
                <li>Khóa Học</li>
                <li>Blog</li>
                <li>Đánh giá</li>
                <li>Kết Nối</li>
                <div className='ulInput'>
                    <input placeholder='Tìm Kiếm ...'/>
                    <div className='btnHeader'><IoIosSearch  className='btnIcon'/></div>
                </div>
                
            </ul>
            <div className='loginHeader'>
                <div><span>Đăng Nhập</span>/<span>Đăng kí</span></div>
                
            </div>
        </div>
        <div className='posterHeader'>
            <img src={img02}/>
            <div className='posterContent'>

            </div>
        </div>
    </>
   
  )
}

export default Header