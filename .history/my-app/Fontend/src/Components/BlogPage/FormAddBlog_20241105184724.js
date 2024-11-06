import React, { useState } from "react";
import axios from "axios";

export const FormAddBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/blog/blogs",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
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
          <label htmlFor="title" className="title">
            Tiêu đề:
          </label>
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
          <label htmlFor="content" className="title">
            Nội dung:
          </label>
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
          <label>
            Ảnh:
            <select
              name="img"
              value={formData.img}
              onChange={handleChange}
              required
            >
              <option value="img04.png">img04.png</option>
              <option value="img05.png">img05.png</option>
              <option value="img06.png">img06.png</option>
              <option value="img07.png">img07.png</option>
              <option value="img08.png">img08.png</option>
              <option value="img09.png">img09.png</option>
            </select>
          </label>
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
