import React, { useState, useEffect } from "react";
import "./CommentForm.css";
import axios from 'axios';
import styles from './Dropdown.module.css'; // Import CSS Module
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-regular-svg-icons';

const CommentForm = ({ addComment, courseId }) => {
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [saveDetails, setSaveDetails] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setuserName(user.userName);
      setEmail(user.email);
      setLoggedInUser(user); //
    }
  }, []);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);  // Lưu file vào state
      console.log('Image selected:', file);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!courseId) {
      console.error('Course ID is null');
      return;
    }
    setLoading(true);
    try {
      let imageUrl = '';
      // Nếu người dùng đã chọn ảnh thì tải lên Cloudinary
      if (image) {
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', 'wien_image'); // Thay thế bằng upload_preset của bạn

        try {
          const cloudinaryResponse = await axios.post('https://api.cloudinary.com/v1_1/dv5vt0g3q/image/upload', formData);
          imageUrl = cloudinaryResponse.data.secure_url;
          console.log('Image uploaded successfully:', imageUrl);
        } catch (error) {
          console.error('Error uploading image to Cloudinary:', error);
          return; // Dừng lại nếu lỗi upload ảnh
        }
      }

      const newReview = {
        author: loggedInUser ? loggedInUser.userName : userName,
        date: new Date().toLocaleDateString(),
        comment: comment,
        email: loggedInUser ? loggedInUser.email : email,
        image: imageUrl || null,
        courseId: courseId,
        isHidden: false
      };
      console.log('New Review:', newReview);


      const response = await axios.post(`http://localhost:8080/api/v1/user/create-comment/${courseId}`, newReview)
      const createdComment = response.data
      addComment(createdComment);
      setComment("");
      setImage(null);
    } catch (error) {
      console.error('Error posting comment:', error);
    } finally {
      setLoading(false); // Kết thúc quá trình tải lên
    }

  };


  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <h3>Leave A Comment</h3>
      <p>
        Your email address will not be published. Required fields are marked *
      </p>

      {!loggedInUser && (
        <div className="form-group">
          <input
            type="text"
            placeholder="Name*"
            value={userName}
            onChange={(e) => setuserName(e.target.value)}
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
      )}
      <div className="form-group">
        <textarea
          placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        ></textarea>
        <label htmlFor="input-file" style={{ cursor: 'pointer' }}>
          <FontAwesomeIcon icon={faImage} size="2x" />
          <input
            type="file"
            id="input-file"
            accept="image/*"
            style={{ display: 'none' }} // Ẩn input file
            onChange={handleImageChange}
          />
        </label>
        {image && (
          <div style={{ position: 'relative' }}>
            <img
              src={URL.createObjectURL(image)} // Tạo URL tạm thời cho file
              alt="Preview"
              style={{ width: '100px', height: '100px' }} // Bạn có thể tùy chỉnh kích thước
            />
            <button className={styles.closeButton}
              onClick={() => setImage(null)} // Khi nhấn, sẽ xóa hình ảnh

            >
              X
            </button>
          </div>
        )}
      </div>

      {
        !loggedInUser && (
          <div className="form-group-checkbox">
            <label className="checkbox">
              <input
                type="checkbox"
                checked={saveDetails}
                onChange={(e) => setSaveDetails(e.target.checked)}
              />
              Save my name, email in this browser for the next time I comment
            </label>
          </div>
        )
      }
      <button type="submit" className="submit-button">
        {loading ? 'Posting...' : 'Post Comment'}
      </button>
    </form >
  );
};

export default CommentForm;
