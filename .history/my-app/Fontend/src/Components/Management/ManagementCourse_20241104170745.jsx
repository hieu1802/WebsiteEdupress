import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import CourseForm from "./CourseForm";
import UpdateCourseForm from "./UpdateCourseForm";

function ManagementCourse() {
  const [courses, setCourses] = useState([]);
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const formRef = useRef(null);

  const handleShowForm = () => {
    setIsFormVisible(true);
  };

  const handleShowEditForm = (courseId) => {
    setSelectedCourseId(courseId);
    setIsEditFormVisible(true);
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
    if (isFormVisible, isEditFormVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFormVisible, isEditFormVisible]);

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
      const response = await axios.delete(
        `http://localhost:8080/api/v1/courses/${id}`
      );
      console.log(response.data.message);

      setCourses((prevCourses) =>
        prevCourses.filter((course) => course._id !== id)
      );
    } catch (error) {
      console.error("Error deleting course:", error);
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
              <h4>Ảnh minh họa :</h4> <span>{items.img}</span>
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
            <button onClick={() => handleShowEditForm(items._id)}>
              Chỉnh sửa
            </button>

            {isEditFormVisibl && (
              <div
                ref={formRef}
                style={{
                  position: "absolute",
                  top: "10%",
                  left: "50%",
                  transform: "translate(-50%, 0)",
                  zIndex: 10,
                  backgroundColor: "#ffffff",
                  padding: "20px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  borderRadius: "8px",
                }}
              >
                <h2>Chỉnh sửa Khóa Học</h2>
                <UpdateCourseForm
                  courseId={selectedCourseId}
                />
              </div>
            )}
            <button onClick={() => handleDelete(items._id)}>Xóa</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManagementCourse;
