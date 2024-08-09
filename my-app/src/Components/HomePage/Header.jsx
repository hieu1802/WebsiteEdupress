import React from "react";
import img01 from "../img/EduPress.png";
import img02 from "../img/img02.jpg";
import img03 from "../img/img03.png";
import "./HomePage.css";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="Header">
        <div className="logoHeader">
          <img src={img01} />
          <h3>EduPress Academy</h3>
        </div>
        <ul>
          <li>Trang Chủ</li>
          <li>Khóa Học</li>
          <li>Kết Nối</li>
          <li>Đánh giá</li>
          <li>Blog</li>
          <div className="ulInput">
            <input placeholder="Tìm Kiếm ..." />
            <div className="btnHeader">
              <IoIosSearch className="btnIcon" />
            </div>
          </div>
        </ul>
        <div className="loginHeader">
          <div>
            <Link to="/login">
              <span>Đăng Nhập</span>
            </Link>
            /
            <Link to="/register">
              <span>Đăng ký</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="posterHeader">
        <img src={img02} />
        <div className="posterContent">
          <div className="posterSologun">
            <h1>EduPress Academy</h1>
            <h2>
              Website học Online hàng đầu Việt Nam tích hợp đầy đủ mọi thông
              tin, kiến thức và những kỹ năng để giúp các bạn chinh phục mọi khó
              khăn một cách hoàn hảo
            </h2>
            <div className="btnPoster">Tìm hiểu ngay </div>
          </div>
          <div className="posterAvatar">
            <img src={img03} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
