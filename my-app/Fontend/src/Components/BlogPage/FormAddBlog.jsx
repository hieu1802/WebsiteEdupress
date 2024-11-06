import React, { useState } from 'react';
import axios from 'axios';


function FormAddBlog({ onClose }) {
  const [formData, setFormData] = useState({
    image:'img13.png',
    title:'',
    content:'',
    userId:''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:8080/api/v1/blog/blogs', formData);
      alert('Tạo bài viết thành công! Vui lòng đợi ADMIN xét duyệt', response.data);
      onClose(); 
    } catch (error) {
      alert('Lỗi khi tạo bài viết:', error);
    }
  };

  return (
    <div className="addPostForm">
      <h3>Thêm Bài Viết Mới</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Tiêu đề:
          <input
            type="text"
            value={formData.title}
            onChange={handleChange}
            name='title'
            required
          />
        </label>
        <label>
          Nội dung:
          <textarea
            value={formData.content}
            onChange={handleChange}
            name='content'
            required
            className='textBlog'
          />
        </label>
        <label>
          Hình ảnh:
          <select
            value={formData.image}
            onChange={handleChange}
            required
            name='image'
          >
            <option  value='img13.png'>img13.png</option>
            <option value='img14.png'>img14.png</option>
            <option value='imh15.ng'>img15.png</option>
          </select>
        </label>
        <button type="submit">Lưu bài viết</button>
        <button type="button" onClick={onClose}>Đóng</button>
      </form>
    </div>
  );
}

export default FormAddBlog;