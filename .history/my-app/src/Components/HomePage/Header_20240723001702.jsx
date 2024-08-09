import React from 'react'
import img01 from '../img/EduPress.png'
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
                <div>Đăng Ký</div>
                <div>Đăng Nhập</div>
            </div>
    </div>
    </>
   
  )
}

export default Header