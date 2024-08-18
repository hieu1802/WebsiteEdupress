import React, { useState } from 'react';
import './CommentForm.css';

const CommentForm = ({ addComment }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [saveDetails, setSaveDetails] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newReview = {
            author: name,
            date: new Date().toLocaleDateString(),
            comment: comment,
        };
        addComment(newReview);
    };


    return (
        <form className="comment-form" onSubmit={handleSubmit}>
            <h3>Leave A Comment</h3>
            <p>Your email address will not be published. Required fields are marked *</p>
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Name*"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <textarea
                    placeholder="Comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                ></textarea>
            </div>
            <div className="form-group-checkbox">
                <label className='checkbox'>
                    <input
                        type="checkbox"
                        checked={saveDetails}
                        onChange={(e) => setSaveDetails(e.target.checked)}
                    />
                    Save my name, email in this browser for the next time I comment
                </label>
            </div>
            <button type="submit" className="submit-button">Post Comment</button>
        </form>
    );
};

export default CommentForm;
