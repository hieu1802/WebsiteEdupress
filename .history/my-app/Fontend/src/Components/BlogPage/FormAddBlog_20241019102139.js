import React, { useState } from 'react';

export const FormAddBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formData = {
          title,
          content,
          image
        };
    
        console.log('Post submitted:', formData);
    
        setTitle('');
        setContent('');
        setImage(null);
      };


      return (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Tiêu đề:</label>
            <input 
              type="text" 
              id="title" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              required 
            />
          </div>
          
          <div>
            <label htmlFor="content">Nội dung:</label>
            <textarea 
              id="content" 
              value={content} 
              onChange={(e) => setContent(e.target.value)} 
              rows="4" 
              required 
            />
          </div>
    
          <div>
            <label htmlFor="image">Hình ảnh:</label>
            <input 
              type="file" 
              id="image" 
              accept="image/*" 
              onChange={handleImageChange} 
              required 
            />
          </div>
    
          <div>
            <button type="submit">Thêm Bài Viết</button>
          </div>
        </form>
      );
    };
    
    export default FormAddBlog;
