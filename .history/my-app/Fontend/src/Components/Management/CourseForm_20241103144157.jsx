import React, { useState, useRef, useEffect } from 'react';

function CourseForm({ onClose }) {
  const [formData, setFormData] = useState({
    tenKhoa: '',
    tacGia: '',
    thoiGian: '',
    soLuongHS: '',
    buoiHoc: '',
    hocPhi: '',
    khuyenMai: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dữ liệu khóa học:', formData);
    onClose(); // Đóng form sau khi lưu
  };

  return (
    <form onSubmit={handleSubmit} style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
      <label>Tên Khóa: <input type="text" name="tenKhoa" value={formData.tenKhoa} onChange={handleChange} /></label>
      <label>Tác giả: <input type="text" name="tacGia" value={formData.tacGia} onChange={handleChange} /></label>
      <label>Thời gian: <input type="number" name="thoiGian" value={formData.thoiGian} onChange={handleChange} /></label>
      <label>Số lượng hs: <input type="number" name="soLuongHS" value={formData.soLuongHS} onChange={handleChange} /></label>
      <label>Buổi học: <input type="number" name="buoiHoc" value={formData.buoiHoc} onChange={handleChange} /></label>
      <label>Học phí: <input type="number" name="hocPhi" value={formData.hocPhi} onChange={handleChange} /></label>
      <label>Khuyến mãi: <input type="number" name="khuyenMai" value={formData.khuyenMai} onChange={handleChange} /></label>
      <button type="submit">Lưu Khóa Học</button>
    </form>
  );
}

export default CourseForm