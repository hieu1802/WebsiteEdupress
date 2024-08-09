import React from 'react'
import img01 from '../img/EduPress.png'
import './HomePage.css'

function Header() {
  return (
    <>
        <div className='Header'>
            <div className='logoHeader'>
                <img src={img01}/>
                <h3>EduPress</h3>
            </div>
            <ul>
                <li>Trang Chủ</li>
                <li>Khóa Học</li>
                <li>Blog</li>
                <li>Đánh giá</li>
                <li>Kết Nối</li>
                <input/>
                <button> Tìm Kiếm</button>
            </ul>
            <div>
                <span>Đăng Ký</span>
                <span>Đăng Nhập</span>
            </div>
    </div>
    </>
   
  )
}

export default Header