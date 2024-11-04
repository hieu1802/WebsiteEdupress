import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import CourseForm from "./CourseForm";

function ManagementCourse() {
  const [courses, setCourses] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const formRef = useRef(null);

  const handleShowForm = () => {
    setIsFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      setIsFormVisible(false);
    }
  };

  useEffect(() => {
    if (isFormVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFormVisible]);

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


  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8080/api/v1/courses/${id}`); // Thay đổi URL theo API của bạn
      console.log(response.data.message);
      
      // Xóa khóa học khỏi danh sách courses sau khi xóa thành công
      setCourses((prevCourses) => prevCourses.filter((course) => course._id !== id));
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };







  return (
    <div className="managementCourseContainer">
      <div className="courseTitle">
        <h3>Danh Sách Khóa Học</h3>
        <div className="btnCourse">
          <button>Hiển thị tất cả</button>
          <button onClick={handleShowForm}>Thêm Khóa Học</button>

          {isFormVisible && (
            <div
              ref={formRef}
              style={{
                position: "absolute",
                top: "10%",
                left: "50%",
                zIndex: 10,
              }}
            >
              <h2>Thêm Khóa Học Mới</h2>
              <CourseForm onClose={handleCloseForm} />
            </div>
          )}
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
              <h4>Hình minh họa :</h4> <span>{items.img}</span>
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
            <button onClick={() => handleDelete(items._id)}>Xóa</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManagementCourse;
