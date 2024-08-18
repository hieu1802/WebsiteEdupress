import React from 'react';
import './Reviews.css';
import Reply from './image/reply.png';
import Avatar from './image/avatar.png'

const Reviews = ({ reviewsData }) => {
    return (
        <div className="reviews-container">
            <h3>Comments</h3>
            <div className="rating-summary">
                <div className="average-rating">
                    <h1>4.0</h1>
                    <div className="stars">
                        <span>★★★★☆</span>
                        <p>based on 146,951 ratings</p>
                    </div>

                </div>
                <div className="rating-distribution">
                    <div className="rating-bar">
                        <p>★★★★★</p><span className='percent'>90%</span>
                        <div className="bar"><div className="bar-fill" style={{ width: '90%' }}></div></div>

                    </div>
                    <div className="rating-bar">
                        <p>★★★★☆</p> <span className='percent'>5%</span>
                        <div className="bar"><div className="bar-fill" style={{ width: '5%' }}></div></div>

                    </div>
                    <div className="rating-bar">
                        <p>★★★☆☆</p><span className='percent'>2%</span>
                        <div className="bar"><div className="bar-fill" style={{ width: '2%' }}></div></div>

                    </div>
                    <div className="rating-bar">
                        <p>★★☆☆☆</p><span className='percent'>2%</span>
                        <div className="bar"><div className="bar-fill" style={{ width: '2%' }}></div></div>

                    </div>
                    <div className="rating-bar">
                        <p>★☆☆☆☆</p><span className='percent'>1%</span>
                        <div className="bar"><div className="bar-fill" style={{ width: '1%' }}></div></div>

                    </div>
                </div>
            </div>
            <div className="comments-list">
                {reviewsData.map((review, index) => (
                    <div className="comment" key={index}>
                        <div className="author-info">
                            <img src={Avatar} className="author-avatar" />
                            <div className='name-date'>
                                <p className="author-name">{review.author}</p>
                                <p className="comment-date">{review.date}</p>
                            </div>
                        </div>
                        <p className="comment-text">{review.comment}</p>
                        <div className="comment-actions">
                            <button className="reply-button"><img src={Reply} />Reply</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button>&lt;</button>
                <button className="active">1</button>
                <button>2</button>
                <button>3</button>
                <button>&gt;</button>
            </div>
        </div>
    );
};

export default Reviews;
