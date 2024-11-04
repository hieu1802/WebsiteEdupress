import React, { useEffect, useState } from "react";
import axios from "axios";

function ManagementCourse() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/courses")
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the courses!", error);
      });
  }, []);
  return (
    <div className="managementCourseContainer">
      <div className="courseTitle">
        <h3>Danh Sách Khóa Học</h3>
        <div>
          <button>Hiển thị tất cả</button>
          <button>Thêm khóa học</button>
        </div>
      </div>
      <div className="courseMain">
        {courses.map((items) => (
          <div className="boxCourse" id={items._id}>
            <div className="boxInf">
              <h4>Tên Khóa :</h4> <span>{items.courseName}</span>
            </div>
            <div className="boxInf">
              <h4>Tác giả :</h4> <span>{items.author}</span>
            </div>
            <div className="boxInf">
              <h4>Thời gian :</h4> <span>{items.time}</span>
              <h4>Số lượng hs :</h4> <span>{items.student}</span>
              <h4>Buổi học :</h4> <span>{items.lessons}</span>
            </div>
            <div className="boxInf">
              <h4>Học phí :</h4> <span>{items.price}</span>
              <h4>Khuyến mãi :</h4> <span>{items.sale}</span>
            </div>
            <button>Chỉnh sửa</button>
            <button>Xóa</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManagementCourse;
