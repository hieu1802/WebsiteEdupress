import React, { useState } from 'react';
import './Curriculum.css';
import lessons from './image/lesson1.png';
import DownIcon from './image/downicon2.png';
import UpIcon from './image/upicon.png';
import Tick from './image/tick.png'
const Curriculum = ({ data }) => {
    const [expanded, setExpanded] = useState(null);


    const toggleExpand = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    return (
        <div className="curriculum-container">
            <p className='header-curriculumn' style={{ color: '#555555' }}>LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.</p>

            {data.map((section, index) => (
                <div key={index} className="curriculum-section">
                    <div className="curriculum-header" onClick={() => toggleExpand(index)}>

                        <span>
                            <span style={{ marginRight: '5px' }}>{expanded === index ? <img src={UpIcon} /> : <img src={DownIcon} />}</span>
                            {section.title}</span>
                        <div className='option-curriculum'>
                            <span>{section.totalLessons} Lessons</span>
                            <span>{section.totalTime}</span>,

                        </div>

                    </div>
                    {expanded === index && (
                        <div className="curriculum-lessons">
                            {section.lessons.map((lesson, i) => (
                                <div key={i} className="lesson-item">
                                    <span><img style={{ width: '12px' }} src={lessons} />{lesson.name}</span>
                                    <div className='button-time-tick'>
                                        {lesson.preview && <button className="preview-button">Preview</button>}
                                        <span className='time-lesson'>{lesson.time}</span>
                                        <span><img src={Tick} /></span>
                                    </div>

                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))
            }
        </div >
    );
};

export default Curriculum;
