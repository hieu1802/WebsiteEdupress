import React from "react";
import Levels from "./image/alllevels.png";
import Student from "./image/student.png";
import Time from "./image/time.png";
import Lesson from "./image/lesson.png";
import Quizz from "./image/quizz.png";
import "./CourseDetail.css";

const HeaderCourseDetail = ({ course }) => {
  if (!course) {
    return null;
  }

  return (
    <>
      <div className="course-detail">
        <div className="course-header">
          <span className="badge">Photography</span>
          <span className="author">
            by{" "}
            <span className="name-author" style={{ color: "white" }}>
              {course.author}
            </span>
          </span>
        </div>
        <h1 className="course-title">{course.courseName}</h1>
        <div className="course-info">
          <span className="info-item time">
            <img src={Time} /> {course.time} Weeks
          </span>
          <span className="info-item student">
            <img src={Student} /> {course.student} Students
          </span>
          <span className="info-item levels">
            <img src={Levels} />
            All levels
          </span>
          <span className="info-item lesson">
            <img src={Lesson} /> 12 Lessons
          </span>
          <span className="info-item quizz">
            <img src={Quizz} />
            {course.quizz}30 Quizzes
          </span>
        </div>
      </div>
    </>
  );
};
export default HeaderCourseDetail;
