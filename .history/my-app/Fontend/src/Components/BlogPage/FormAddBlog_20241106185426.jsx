import React, { useState } from 'react';


function FormAddBlog({ onSubmit, onClose }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedImage, setSelectedImage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content, image: selectedImage });
    onClose();
  };

  return (
    <div className="addPostForm">
      <h3>Thêm Bài Viết Mới</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Tiêu đề:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Nội dung:
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className='textBlog'
          />
        </label>
        <label>
          Hình ảnh:
          <select
            value={selectedImage}
            onChange={(e) => setSelectedImage(e.target.value)}
            required
          >
            <option >img03.png</option>
            <option >img04.png</option>
            <option >img05.png</option>
          </select>
        </label>
        <button type="submit">Lưu bài viết</button>
        <button type="button" onClick={onClose}>Đóng</button>
      </form>
    </div>
  );
}

export default FormAddBlog;