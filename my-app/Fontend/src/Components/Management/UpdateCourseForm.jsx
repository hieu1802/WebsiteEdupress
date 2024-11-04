import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UpdateCourseForm({ courseId, onClose }) {
  const [formData, setFormData] = useState({
    img: 'img04.png',
    time: '',
    student: '',
    price: '',
    sale: '',
    author: '',
    courseName: '',
  });

  // Lấy thông tin khóa học hiện tại theo courseId và đặt giá trị mặc định cho form
  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/courses/${courseId}`);
        setFormData(response.data); // Đặt dữ liệu hiện tại vào form
      } catch (error) {
        console.error('Error fetching course data:', error);
      }
    };

    if (courseId) {
      fetchCourseData();
    }
  }, [courseId]);

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
      const response = await axios.put(`http://localhost:8080/api/v1/courses/${courseId}`, formData);
     alert('Khóa học đã được cập nhật:', response.data);
      onClose(); // Đóng form sau khi cập nhật thành công
    } catch (error) {
      alert('Lỗi khi cập nhật khóa học:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
      <label>Ảnh:
        <select name="img" value={formData.img} onChange={handleChange} required>
          <option value="img04.png">img04.png</option>
          <option value="img05.png">img05.png</option>
          <option value="img06.png">img06.png</option>
          <option value="img07.png">img07.png</option>
          <option value="img08.png">img08.png</option>
          <option value="img09.png">img09.png</option>
        </select>
      </label>

      <label>Thời gian: <input type="number" name="time" value={formData.time || ''} onChange={handleChange} max={5} required/></label>
      <label>Số lượng hs: <input type="number" name="student" value={formData.student || ''} onChange={handleChange} max={50} required/></label>
      <label>Học phí: <input type="number" name="price" value={formData.price || ''} onChange={handleChange} min={1000000} max={10000000} required/></label>
      <label>Khuyến mãi: <input type="number" name="sale" value={formData.sale || ''} onChange={handleChange}min={1000000} max={10000000} required/></label>
      <label>Tác giả: <input type="text" name="author" value={formData.author || ''} onChange={handleChange} required/></label>
      <label>Tên Khóa: <input type="text" name="courseName" value={formData.courseName || ''} onChange={handleChange} required/></label>
      <button type="submit">Cập Nhật Khóa Học</button>
    </form>
  );
}

export default UpdateCourseForm;

