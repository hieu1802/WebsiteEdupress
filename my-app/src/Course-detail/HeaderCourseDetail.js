import React from 'react';
import Levels from './image/alllevels.png';
import Student from './image/student.png';
import Time from './image/time.png';
import Lesson from './image/lesson.png';
import Quizz from './image/quizz.png';
import './CourseDetail.css';


const HeaderCourseDetail = () => {
    return (
        <>
            <div className="course-detail">
                <div className="course-header">
                    <span className="badge">Photography</span>
                    <span className="author">by Determined-Poitras</span>
                </div>
                <h1 className="course-title">The Ultimate Guide To The Best WordPress LMS Plugin</h1>
                <div className="course-info">
                    <span className="info-item"><img src={Time} /> 2Weeks</span>
                    <span className="info-item"><img src={Student} /> 156 Students</span>
                    <span className="info-item"><img src={Levels} />All levels</span>
                    <span className="info-item"><img src={Lesson} /> 20 Lessons</span>
                    <span className="info-item"><img src={Quizz} /> 3 Quizzes</span>
                </div>
            </div>
        </>
    )

}
export default HeaderCourseDetail;