import React from "react";
import {
  AiFillRocket,
  AiOutlineUserAdd,
  AiOutlineClockCircle,
  AiFillCheckCircle,
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiFillStar,
} from "react-icons/ai";

import img10 from "../img/img10.png";
import img11 from "../img/img11.png";
import img12 from "../img/img12.png";

import { topCourses } from "../data/FeaturedCoursesDaa";
import { topCategories } from "../data/topCategories";
import { Link } from "react-router-dom";

export const ContainerPage = () => {


  return (
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
            <p>Xem tất cả</p>
          </div>
        </div>
        <div className="boxCourses">
          {topCourses.map((items) => (
            <div className="boxFeaturedCourses" key={items.id}>
              <div className="boxFeaturedCoursesImg">
                <img src={items.img} />
              </div>
              <div className="boxFeaturedCoursesContent">
                <div className="boxFeaturedCoursesContentText">
                  <p>
                    By <span>Determined-Poitras</span>
                  </p>
                  <h4>Create an LMS Website with LearnPress</h4>
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
                </div>
                <div className="boxFeaturedCoursesContentPrice">
                  <div className="price">
                    <p>{items.price}</p>
                    <span>{items.sale} </span>
                  </div>
                  <Link to="/CouresPage">
                    <b>Xem Chi Tiết</b>
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
              <span>
                {" "}
                <AiFillCheckCircle className="connectIcons" />{" "}
                <a href="#">Vsee</a>
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
      <div className="articles">
        <div className="articlesHeading">
          <div className="articlesTitle">
            <h2>Các Bài Viết Mới</h2>
            <p>Khám phá các bài viết miễn phí cùng EduPress</p>
          </div>
        </div>
        <div className="articlesContainer">
          <div className="articlesBox">
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
          </div>
          <div className="articlesBox">
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
          </div>
          <div className="articlesBox">
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
          </div>
        </div>
      </div>
    </div>
  );
};
