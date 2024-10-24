import React, { useState, useEffect } from 'react';
import './Reviews.css';
import Reply from './image/reply.png';
import Avatar from './image/avatar.png'
import Dropdown from './dropdown';
import styles from './Dropdown.module.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
const Reviews = ({ reviewsData, fetchComments }) => {
    const [reviews, setReviews] = useState(reviewsData);
    const [editingCommentId, setEditingCommentId] = useState(null); // Trạng thái chỉnh sửa
    const [editedComment, setEditedComment] = useState(''); // Lưu nội dung bình luận chỉnh sửa
    useEffect(() => {
        setReviews(reviewsData);
    }, [reviewsData]);

    // Hàm kích hoạt chế độ chỉnh sửa
    const handleEditClick = (commentId, commentText) => {
        if (editingCommentId === commentId) {
            // Nếu đang chỉnh sửa và nhấn lại nút Edit thì tắt chế độ chỉnh sửa
            setEditingCommentId(null);
        } else {
            // Nếu không chỉnh sửa thì bật chế độ chỉnh sửa cho comment này
            setEditingCommentId(commentId);
            setEditedComment(commentText); // Điền sẵn nội dung cũ của comment
        }
    };

    const handleSaveClick = async (commentId) => {
        try {
            const response = await axios.put(`http://localhost:8080/api/v1/user/update-comment/${commentId}`, { comment: editedComment });

            if (response.status === 200) { // Kiểm tra xem API có trả về thành công không
                setReviews((prevReviews) =>
                    prevReviews.map((review) =>
                        review._id === commentId ? { ...review, comment: editedComment } : review
                    )
                );
                setEditingCommentId(null); // Dừng chế độ chỉnh sửa
            }
        } catch (error) {
            console.error('Lỗi khi cập nhật comment:', error);
        }
    };
    const handleHideClick = async (commentId) => {
        try {
            const response = await axios.put(`http://localhost:8080/api/v1/user/hide-comment/${commentId}`);

            // Kiểm tra phản hồi từ server
            // Cập nhật lại danh sách reviews để ẩn comment trên giao diện

            if (response.status === 200) { // Kiểm tra phản hồi từ server
                // Cập nhật lại danh sách reviews để ẩn comment trên giao diện
                fetchComments();
            }
        } catch (error) {
            console.error('Lỗi khi ẩn comment:', error);
        }
    };
    const handleDeleteClick = async (commentId) => {
        try {
            const response = await axios.delete(`http://localhost:8080/api/v1/user/delete-comment/${commentId}`);
            if (response.status === 200) {
                // Cập nhật lại danh sách comments trong state sau khi xóa
                fetchComments();
            }
        } catch (error) {
            console.error('Lỗi khi xóa comment:', error);
        }
    };
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
                {reviews
                    .filter((review) => !review.isHidden)
                    .map((review) => (
                        <div className="comment" key={review._id}>
                            <div className="author-info">
                                <img src={Avatar} className="author-avatar" />
                                <div className='name-date'>
                                    <p className="author-name">{review.author}</p>
                                    <p className="comment-date">{review.date}</p>
                                </div>
                            </div>
                            {editingCommentId === review._id ? (
                                <div>
                                    <input
                                        type="text"
                                        value={editedComment}
                                        onChange={(e) => setEditedComment(e.target.value)}
                                        className={styles.inputItem}
                                    />
                                    <button onClick={() => handleSaveClick(review._id)}><FontAwesomeIcon icon={faCheck} /></button>
                                </div>
                            ) : (
                                <span className={styles.commentItem}>{review.comment}</span>
                            )}
                            <div className="comment-actions">
                                <button className="reply-button"><img src={Reply} />Reply</button>
                            </div>
                            <div className='dropdowntailwinds'><Dropdown
                                onEdit={() => handleEditClick(review._id, review.comment)}
                                onHide={() => handleHideClick(review._id)}
                                onDelete={() => handleDeleteClick(review._id)} /></div>

                        </div>
                    ))}
            </div>

        </div>
    );
};

export default Reviews;
