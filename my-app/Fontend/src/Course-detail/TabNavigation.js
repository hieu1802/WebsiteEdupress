import React, { useState, useEffect } from 'react';
import Curriculum from './Curriculum';
import Instructor from './Instructor';
import Reviews from './Reviews';
import Overview from './Overview';
import FAQs from './FAQs'

const curriculumData = [
    {
        title: "Lessons With Video Content",
        lessons: [
            { name: "Lesson 1", time: "12:30", preview: true },
            { name: "Lesson 2", time: "10:05", preview: true },
            { name: "Lesson 3", time: "2:25", preview: true }
        ],
        totalLessons: 3,
        totalTime: "45 Mins"
    },
    {
        title: "Lessons With Video Content",
        lessons: [],
        totalLessons: 5,
        totalTime: "45 Mins"
    }

];


const TabNavigation = ({ reviewsData, fetchComments }) => {
    const [activeTab, setActiveTab] = useState('overview');
    const [tabContent, setTabContent] = useState('');



    useEffect(() => {
        const loadData = () => {
            switch (activeTab) {
                case 'overview':
                    setTabContent(<Overview />);
                    break;
                case 'curriculum':
                    setTabContent(<Curriculum data={curriculumData} />);
                    break;
                case 'instructor':
                    setTabContent(<Instructor />);
                    break;
                case 'reviews':
                    setTabContent(<Reviews reviewsData={reviewsData} fetchComments={fetchComments} />);
                    break;
                case 'faqs': // Thêm trường hợp cho tab FAQs
                    setTabContent(<FAQs />);
                    break;

                default:
                    setTabContent(null);
            }
        };
        loadData();
    }, [activeTab, reviewsData]);

    return (
        <div className="tab-container">
            <div className="tabs">
                <button className={activeTab === 'overview' ? 'active' : ''} onClick={() => setActiveTab('overview')}>
                    Overview
                </button>
                <button className={activeTab === 'curriculum' ? 'active' : ''} onClick={() => setActiveTab('curriculum')}>
                    Curriculum
                </button>
                <button className={activeTab === 'instructor' ? 'active' : ''} onClick={() => setActiveTab('instructor')}>
                    Instructor
                </button>
                <button className={activeTab === 'faqs' ? 'active' : ''} onClick={() => setActiveTab('faqs')}>
                    FAQs
                </button>
                <button className={activeTab === 'reviews' ? 'active' : ''} onClick={() => setActiveTab('reviews')}>
                    Reviews
                </button>
            </div>
            <div className="tab-content">
                <p>{tabContent}</p>

            </div>
        </div>
    );
};

export default TabNavigation;
