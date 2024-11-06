import React, { useEffect, useState } from "react";
import axios from "axios";

function ManagementUsersBlog() {
  const [userBlog, setUserBlog] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/blog/blogs")
      .then((response) => {
        setUserBlog(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the courses!", error);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/v1/blog/blogs/${id}`
      );
      console.log(response.data.message);

      setUserBlog((prevCourses) =>
        prevCourses.filter((course) => course._id !== id)
      );
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  const handleApprove = async (blog) => {
    try {
      // Gửi POST request để duyệt blog
      await axios.post("http://localhost:8080/api/v1/blogUser/", blog);
  
      // Sau khi duyệt thành công, xóa vĩnh viễn blog
      await axios.delete(`http://localhost:8080/api/v1/blog/blogs/${blog._id}`);
      
      alert("Duyệt và xóa thành công!");
  
      // Cập nhật danh sách blog để loại bỏ blog đã xóa
      setUserBlog((prevBlogs) => prevBlogs.filter((item) => item._id !== blog._id));
    } catch (error) {
      console.error("Error approving and deleting blog:", error);
    }
  };
  

  const handleShowAll = () => {
    window.location.reload(); // Reload lại trang
  };
  return (
    <div className="managementCourseContainer" style={{ marginLeft: "20%" }}>
      <div className="courseTitle">
        <h3>Danh Sách Blogs User</h3>
        <button className="btnCourse" onClick={handleShowAll}>
          Hiển thị tất cả
        </button>
      </div>
      <div className="courseMain">
        {userBlog.map((items) => (
          <div className="boxCourse" id={items._id}>
            <div className="boxInf">
              <h4>Tên Blogs :</h4> <span>{items.title}</span>
            </div>
            <div className="boxInf">
              <h4>Nội dung :</h4> <span>{items.content}</span>
            </div>
            <div className="boxInf">
              <h4>Img :</h4> <span>{items.image}</span>
            </div>
            <button onClick={() => handleApprove(items)}>Duyệt</button>

            <button onClick={() => handleDelete(items._id)} >Xóa</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManagementUsersBlog;
