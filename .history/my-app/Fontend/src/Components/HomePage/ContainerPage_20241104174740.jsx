import React , {useEffect, useState}from "react";
import {
  AiFillRocket,
  AiOutlineUserAdd,
  AiOutlineClockCircle,
  AiFillCheckCircle,
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiFillStar,
} from "react-icons/ai";

import img02 from "../img/img02.jpg";
import img03 from "../img/img03.png";
import img10 from "../img/img10.png";
import img11 from "../img/img11.png";
import img12 from "../img/img12.png";

import axios from "axios";

import { topCourses } from "../data/FeaturedCoursesDaa";
import { topCategories } from "../data/topCategories";
import { Link } from "react-router-dom";

export const ContainerPage = () => {
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
   <> 
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
    <div className="ContainerPage">
      <div className="categories">
        <div className="textCategories">
          <div className="topCategories">
            <h3>Top Categories</h3>
            <p>Bạn không nên bỏ qua!!!</p>
          </div>
        </div>
        <div className="boxCategories">
          {topCategories.map((items) => (
            <div className="miniBox" key={items.id}>
              <AiFillRocket className="iconBox" />
              <h4>{items.name}</h4>
              <h5>{items.value}</h5>
            </div>
          ))}
        </div>
      </div>
      <div className="courses">
        <div className="textCategories">
          <div className="topCategories">
            <h3>Featured courses</h3>
            <p>Ưu đãi đang chờ bạn !!!</p>
          </div>
          <div className="btnCategories">
            {" "}
            <Link to="/CouresPage" className="btnLink">
                <p>Xem Tất Cả</p>
            </Link>
          </div>
        </div>
        <div className="boxCourses">
          {courses.map((items) => (
            <div className="boxFeaturedCourses" key={items._id}>
              <div className="boxFeaturedCoursesImg">
                <img src={`http://localhost:8080/images/${items.img}`} />
              </div>
              <div className="boxFeaturedCoursesContent">
                <div className="boxFeaturedCoursesContentText">
               
                  <h4>{items.courseName}</h4>
                </div>
                <div className="boxFeaturedCoursesContentMeta">
                  <span>
                    <AiOutlineClockCircle
                      style={{
                        fontSize: "20px",
                        marginRight: "5px",
                        color: "rgba(241, 152, 34, 0.979)",
                      }}
                    />
                    {items.time} Weeks
                  </span>
                  <span>
                    <AiOutlineUserAdd
                      style={{
                        fontSize: "20px",
                        marginRight: "5px",
                        color: "rgba(241, 152, 34, 0.979)",
                      }}
                    />{" "}
                    {items.student} students{" "}
                  </span>
                  <span><AiFillBook className='icons' /> 12 Lessons</span>
                </div>
                <div className="boxFeaturedCoursesContentPrice">
                  <div className="price">
                    <p>{items.price}</p>
                    <span>{items.sale} </span>
                  </div>
                  <Link to={`/Coursedetail/${items._id}`} state={{ course: items }} >
                          <b style={{color:'red'}}>Xem Chi Tiết</b>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="banner">
        <img
          src={img10}
          style={{ width: "98%", height: "100%", borderRadius: "12px" }}
        />
        <div className="bannerContent">
          <h5>GET MORE POWER FROM</h5>
          <h2>LearnPress Add-Ons</h2>
          <p>
            The next level of LearnPress - LMS WordPress Plugin. More Powerful,
            Flexible and Magical Inside.
          </p>
          <div className="btnBanner">Explorer Courses</div>
        </div>
      </div>
      <div className="counterBox">
        <div className="counterBoxContent">
          <h2>25+</h2>
          <a href="#">Active Students</a>
        </div>
        <div className="counterBoxContent">
          <h2>900</h2>
          <a href="#">Total Courses</a>
        </div>
        <div className="counterBoxContent">
          <h2>150</h2>
          <a href="#">Instructors</a>
        </div>
        <div className="counterBoxContent">
          <h2>100%</h2>
          <a href="#">Satisfaction rate</a>
        </div>
      </div>
      <div className="boxConnect">
        <div className="boxConnectImg">
          <img
            src={img11}
            style={{ width: "70%", height: "100%", marginLeft: "80px" }}
          />
        </div>
        <div className="boxConnectContent">
          <div className="boxConnectText">
            <h2> Kết Nối Đa Dạng</h2>
          </div>
          <div className="boxConnectContainer">
            <div className="introduce">
              <p>
                EduPress Academy đã có mặt trên nhiều nền tảng Online khác nhau
                tẩm bảo đa dạng sự chọn bạn. Chọn ngay tại:{" "}
              </p>
            </div>
            <div className="connect">
              <span>
                {" "}
                <AiFillCheckCircle className="connectIcons" />{" "}
                <a href="#">Zoom</a>
              </span>
              <span>
                {" "}
                <AiFillCheckCircle className="connectIcons" />{" "}
                <a href="#">Microsoft Teams.</a>
              </span>
              <span>
                {" "}
                <AiFillCheckCircle className="connectIcons" />{" "}
                <a href="#">Google Classroom.</a>
              </span>
              <span>
                {" "}
                <AiFillCheckCircle className="connectIcons" />{" "}
                <a href="#">Skype</a>
              </span>
              <span>
                {" "}
                <AiFillCheckCircle className="connectIcons" />{" "}
                <a href="#">Youtube</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="banner">
        <img
          src={img10}
          style={{ width: "98%", height: "100%", borderRadius: "12px" }}
        />
        <div className="bannerContent">
          <h5>GET MORE POWER FROM</h5>
          <h2>LearnPress Add-Ons</h2>
          <p>
            The next level of LearnPress - LMS WordPress Plugin. More Powerful,
            Flexible and Magical Inside.
          </p>
          <div className="btnBanner">Explorer Courses</div>
        </div>
      </div>
      <div className="boxFeedbacks">
        <div className="feedbacksHeading">
          <h2>Student feedbacks</h2>
          <p>
            Lắng nghe đánh giá của học viên sau khi theo học ở EduPress Academy
            nhé !!!
          </p>
        </div>
        <div className="feedbacksHeadingContent">
          <div className="feedbackItems">
            <div className="feedbacksContents">
              <AiOutlineDoubleLeft
                style={{
                  marginBottom: "20px",
                  fontSize: "24px",
                }}
              />
              <div className="feedbacksContentText">
                <p>
                  I must explain to you how all this mistaken . Tdea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system and expoun
                </p>
              </div>
              <AiOutlineDoubleRight
                style={{
                  marginLeft: "200px",
                  marginTop: "20px",
                  fontSize: "24px",
                }}
              />
            </div>
            <div className="feedbacksIdName">
              <h4>Roe Smith</h4>
              <p>Designer</p>
            </div>
          </div>
          <div className="feedbackItems">
            <div className="feedbacksContents">
              <AiOutlineDoubleLeft
                style={{
                  marginBottom: "20px",
                  fontSize: "24px",
                }}
              />
              <div className="feedbacksContentText">
                <p>
                  I must explain to you how all this mistaken . Tdea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system and expoun
                </p>
              </div>
              <AiOutlineDoubleRight
                style={{
                  marginLeft: "200px",
                  marginTop: "20px",
                  fontSize: "24px",
                }}
              />
            </div>
            <div className="feedbacksIdName">
              <h4>Roe Smith</h4>
              <p>Designer</p>
            </div>
          </div>
          <div className="feedbackItems">
            <div className="feedbacksContents">
              <AiOutlineDoubleLeft
                style={{
                  marginBottom: "20px",
                  fontSize: "24px",
                }}
              />
              <div className="feedbacksContentText">
                <p>
                  I must explain to you how all this mistaken . Tdea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system and expoun
                </p>
              </div>
              <AiOutlineDoubleRight
                style={{
                  marginLeft: "200px",
                  marginTop: "20px",
                  fontSize: "24px",
                }}
              />
            </div>
            <div className="feedbacksIdName">
              <h4>Roe Smith</h4>
              <p>Designer</p>
            </div>
          </div>
          
        </div>
      </div>
      <div className="banner">
        <img
          src={img10}
          style={{ width: "98%", height: "100%", borderRadius: "12px" }}
        />
        <div className="bannerContent">
          <h5>GET MORE POWER FROM</h5>
          <h2>LearnPress Add-Ons</h2>
          <p>
            The next level of LearnPress - LMS WordPress Plugin. More Powerful,
            Flexible and Magical Inside.
          </p>
          <div className="btnBanner">Explorer Courses</div>
        </div>
      </div>
      <div className="articlesS">
        <div className="articlesHeading">
          <div className="articlesTitle">
            <h2>Các Bài Viết Mới</h2>
            <p>Khám phá các bài viết miễn phí cùng EduPress</p>
          </div>
        </div>
        <div className="articlesContainer">
          <Link to='/BlogPage' className="articlesBox">
            <img src={img12} />
            <div className="articlesContent">
              <h4>Best LearnPress WordPress Theme Collection for 2023</h4>
              <span>
                {" "}
                <AiFillStar style={{ color: " #FF782D" }} /> Jan 24, 22023
              </span>
              <p>
                Looking for an amazing & well-functional LearnPress WordPress
                Theme?...
              </p>
            </div>
          </Link>
          <Link to='/BlogPage' className="articlesBox">
            <img src={img12} />
            <div className="articlesContent">
              <h4>Best LearnPress WordPress Theme Collection for 2023</h4>
              <span>
                {" "}
                <AiFillStar style={{ color: " #FF782D" }} /> Jan 24, 22023
              </span>
              <p>
                Looking for an amazing & well-functional LearnPress WordPress
                Theme?...
              </p>
            </div>
          </Link>
          <Link to='/BlogPage' className="articlesBox">
            <img src={img12} />
            <div className="articlesContent">
              <h4>Best LearnPress WordPress Theme Collection for 2023</h4>
              <span>
                {" "}
                <AiFillStar style={{ color: " #FF782D" }} /> Jan 24, 22023
              </span>
              <p>
                Looking for an amazing & well-functional LearnPress WordPress
                Theme?...
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};
