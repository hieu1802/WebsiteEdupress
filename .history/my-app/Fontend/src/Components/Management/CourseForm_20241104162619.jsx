import React, { useState } from 'react';
import axios from 'axios';

function CourseForm({ onClose }) {
  const [formData, setFormData] = useState({
    img: 'img04.png',
    time: '',
    student: '',
    price: '',
    sale: '',
    lessons: '',
    author: '',
    courseName: '',
  });

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
      const response = await axios.post('http://localhost:8080/api/v1/courses/', formData);
      console.log('Khóa học đã được tạo:', response.data);
      onClose(); 
    } catch (error) {
      console.error('Lỗi khi tạo khóa học:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
      <label>Ảnh:
        <select name="img" value={formData.img} onChange={handleChange}>
          <option value="img04.png">img04.png</option>
          <option value="img05.png">img05.png</option>
          <option value="img06.png">img06.png</option>
          <option value="img07.png">img07.png</option>
          <option value="img08.png">img08.png</option>
          <option value="img09.png">img09.png</option>
        </select>
      </label>
      <label>Thời gian: <input type="number" name="time" value={formData.time} onChange={handleChange} /></label>
      <label>Số lượng hs: <input type="number" name="student" value={formData.student} onChange={handleChange} /></label>
      <label>Học phí: <input type="number" name="price" value={formData.price} onChange={handleChange} /></label>
      <label>Khuyến mãi: <input type="number" name="sale" value={formData.sale} onChange={handleChange} /></label>
      <label>Buổi học: <input type="text" name="lessons" value={formData.lessons} onChange={handleChange} /></label>
      <label>Tác giả: <input type="text" name="author" value={formData.author} onChange={handleChange} /></label>
      <label>Tên Khóa: <input type="text" name="courseName" value={formData.courseName} onChange={handleChange} /></label>
      <button type="submit">Lưu Khóa Học</button>
    </form>
  );
}

export default CourseForm;