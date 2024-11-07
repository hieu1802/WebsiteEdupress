import React, { useState } from "react";
import axios from "axios";

export const FormAddBlog = () => {
  

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    

    try {
        const response = await axios.post("http://localhost:8080/api/v1/blog/blogs", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        console.log("Post submitted:", response.data);
        setTitle("");
        setContent("");
        setImage(null);
    } catch (error) {
        console.error("Error submitting post:", error);
    }
};

    return (
      <div className="content">
        <form onSubmit={handleSubmit} className="formBlog">
          <div>
            <label htmlFor="title" className="title">Tiêu đề:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="formInput"
            />
          </div>
  
          <div>
            <label htmlFor="content" className="title">Nội dung:</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows="4"
              required
              className="textInput"
            />
          </div>
  
          <div>
            <label htmlFor="image" className="title">Hình ảnh:</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              required
              className="imgInput"
            />
          </div>
  
          <div>
            <button type="submit">Thêm Bài Viết</button>
          </div>
        </form>
        {message && <p>{message}</p>}
      </div>
    );
  };

export default FormAddBlog;