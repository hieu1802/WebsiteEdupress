import React from 'react';
import './Instructor.css';
import Student from './image/student.png';
import Lesson from './image/lesson.png';
import LogoInInstructor from './image/logointructor.png';
import Iconfb from './image/Iconfb.png';
import Iconin from './image/IconIn.png';
import Iconpr from './image/Iconpr.png';
import IconX from './image/IconX.png';
import IconYt from './image/IconYt.png';
const Instructor = () => {
    return (
        <div className="instructor-card">
            <div className="instructor-header">
                <img src={LogoInInstructor} alt="ThimPress Logo" className="instructor-logo" />
                <div className="instructor-info">
                    <h2>ThimPress</h2>
                    <p>LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.</p>
                    <div className="instructor-meta">
                        <div className="meta-item">
                            <span role="img" aria-label="students"><img src={Student} /></span> 156 Students
                        </div>
                        <div className="meta-item">
                            <span role="img" aria-label="lessons"><img src={Lesson} /></span> 20 Lessons
                        </div>
                    </div>
                </div>

            </div>

            <p className="instructor-description">
                LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.
            </p>
            <div className="instructor-social">
                <span>Follow:</span>
                <a href="#"><img src={Iconfb} /> </a>
                <a href="#"><img src={Iconin} /></a>
                <a href="#"><img src={Iconpr} /></a>
                <a href="#"><img src={IconX} /></a>
                <a href="#"><img src={IconYt} /></a>
            </div>
        </div>
    );
};

export default Instructor;
