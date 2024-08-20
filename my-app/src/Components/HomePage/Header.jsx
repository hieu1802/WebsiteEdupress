import React from "react";
import img01 from "../img/EduPress.png";
import img02 from "../img/img02.jpg";
import img03 from "../img/img03.png";
import "./HomePage.css";
import { IoIosSearch } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { topCourses } from "../data/FeaturedCoursesDaa"; // Import courses data

function Header({ courses }) {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setLoggedInUser(user.username);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    navigate("/");
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query) {
      const results = topCourses.filter(
        (course) =>
          course.courseName.toLowerCase().includes(query.toLowerCase()) ||
          course.author.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <>
      <div className="Header">
        <div className="logoHeader">
          <img src={img01} />
          <h3>EduPress Academy</h3>
        </div>
        <ul>
          <Link to="/" className="liLink">
            <li>Trang Chủ</li>
          </Link>
          <Link to="/CouresPage" className="liLink">
            <li>Khóa Học</li>
          </Link>
          <li>Kết Nối</li>
          <li>Đánh giá</li>
          <Link to="/BlogPage" className="liLink">
            <li>Blog</li>
          </Link>
          <div className="ulInput">
            <input
              placeholder="Tìm Kiếm ..."
              value={searchQuery}
              onChange={handleSearch}
            />
            <div className="btnHeader">
              <IoIosSearch className="btnIcon" />
            </div>
            {searchResults.length > 0 && (
              <div className="searchResults">
                {searchResults.map((course) => (
                  <div
                    key={course.id}
                    className="searchResultItem"
                    onClick={() => navigate(`/course/${course.id}`)}
                  >
                    {course.courseName} | {course.author}
                  </div>
                ))}
              </div>
            )}
          </div>
        </ul>
        <div className="loginHeader">
          {loggedInUser ? (
            <div>
              <span>
                Hello <Link to="/info-customer">{loggedInUser}</Link>
              </span>
              <button
                className="btnLogOut"
                onClick={handleLogout}
                style={{
                  marginLeft: "10px",
                  border: "1px solid transparent",
                  fontSize: "16px",
                  fontWeight: "600",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  color: "#000",
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <div>
              <Link to="/login">
                <span>Đăng Nhập</span>
              </Link>
              /
              <Link to="/register">
                <span>Đăng ký</span>
              </Link>
            </div>
          )}
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
