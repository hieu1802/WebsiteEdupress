import React, { useState, useEffect, useRef } from "react";
import HeaderCourseDetail from "./HeaderCourseDetail";
import PriceCourseCard from "./PriceCourseCard";
import TabNavigation from "./TabNavigation";
import "./CourseDetail.css";
import CommentForm from "./CommentForm";
import Header from "../Components/HomePage/Header";
import Footer from "../Components/HomePage/Footer";
import { useLocation } from "react-router-dom";
import RegisterCouse from "./RegisterCourse";
import axios from 'axios';
const CourseDetail = () => {


  const location = useLocation();
  const selectedCourse = location.state?.course;
  const [reviewsData, setReviewsData] = useState([]);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const registrationFormRef = useRef(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/auth/view-comments')
        setReviewsData(response.data)
      } catch (error) {
        console.error('Lỗi khi lấy comments:', error);
      }
    }
    fetchComments();
  }, [])
  // useEffect(() => {
  //   const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
  //   setReviewsData(savedComments);
  // }, []);

  const addComment = (newReview) => {
    setReviewsData((prevReviews) => [...prevReviews, newReview]);
  };
  const handleGetNowClick = () => {
    setShowRegistrationForm(true);
    setTimeout(() => {
      registrationFormRef.current.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };
  return (
    <>
      <Header />
      <HeaderCourseDetail course={selectedCourse} />

      <PriceCourseCard course={selectedCourse} onGetNow={handleGetNowClick} />

      <TabNavigation reviewsData={reviewsData} />
      <CommentForm addComment={addComment} />
      {showRegistrationForm && (
        <div ref={registrationFormRef}>
          <RegisterCouse course={selectedCourse} />
        </div>
      )}
      <Footer />
    </>
  );
};
export default CourseDetail;
