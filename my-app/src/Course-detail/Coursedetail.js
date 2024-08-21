import React, { useState, useEffect } from "react";
import HeaderCourseDetail from "./HeaderCourseDetail";
import PriceCourseCard from "./PriceCourseCard";
import TabNavigation from "./TabNavigation";
import "./CourseDetail.css";
import CommentForm from "./CommentForm";
import Header from "../Components/HomePage/Header";
import Footer from "../Components/HomePage/Footer";
import { useLocation } from "react-router-dom";

const CourseDetail = () => {

  const location = useLocation();
  const selectedCourse = location.state?.course;
  const [reviewsData, setReviewsData] = useState([]);

  // const addComment = (newReview) => {
  //     setReviewsData(prevReviews => [...prevReviews, newReview]);
  // };

  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
    setReviewsData(savedComments);
  }, []);

  const addComment = (newReview) => {
    setReviewsData((prevReviews) => [...prevReviews, newReview]);
  };

  return (
    <>
      <Header />
      <HeaderCourseDetail course={selectedCourse} />

      <PriceCourseCard course={selectedCourse} />

      <TabNavigation reviewsData={reviewsData} />
      <CommentForm addComment={addComment} />
      <Footer />
    </>
  );
};
export default CourseDetail;
