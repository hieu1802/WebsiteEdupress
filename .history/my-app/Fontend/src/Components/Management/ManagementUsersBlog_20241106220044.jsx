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
            <button>
             Duyệt
            </button>

            <button >Xóa</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManagementUsersBlog;
