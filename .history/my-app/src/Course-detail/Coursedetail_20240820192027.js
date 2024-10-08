import React, { useState, useEffect } from "react";
import HeaderCourseDetail from "./HeaderCourseDetail";
import PriceCourseCard from "./PriceCourseCard";
import TabNavigation from "./TabNavigation";
import "./CourseDetail.css";
import CommentForm from "./CommentForm";
const CourseDetail = () => {
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
      <HeaderCourseDetail />
      <PriceCourseCard />
      <TabNavigation reviewsData={reviewsData} />
      <CommentForm addComment={addComment} />
    </>
  );
};
export default CourseDetail;
