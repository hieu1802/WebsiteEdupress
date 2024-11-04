import React, { useEffect, useState } from 'react';
import {
  AiFillSignal,
  AiOutlineUserAdd,
  AiOutlineClockCircle,
  AiFillBook
} from "react-icons/ai";
import { Link } from 'react-router-dom';
import axios from 'axios';

function ManagementCourse() {
  const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/courses')
            .then(response => {
                setCourses(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the courses!', error);
            });
    }, []);
  return (
    <div className='managementCourseContainer'>
        <div className='courseTitle'>
            <h3>Danh Sách Khóa Học</h3>
            <div>
              <button>Hiển thị tất cả</button>
              <button>Thêm khóa học</button>
            </div>
        </div>
        <div className='courseMain'>
            <div className='boxCourse'>
                <div className='boxInf'>
                    <h4>Tên Khóa :</h4> <span>Nguyen Van A</span>
                </div>
                <div className='boxInf'>
                    <h4>Tác giả :</h4> <span>Nguyen Van A</span>
                </div>
                <div className='boxInf'>
                    <h4>Thời gian :</h4> <span>10</span>
                    <h4>Số lượng hs :</h4> <span>10</span>
                    <h4>Buổi học :</h4> <span>10</span>
                </div>
                <div className='boxInf'>
                    <h4>Học phí :</h4> <span>6.000.000 đ</span>
                    <h4>Khuyến mãi :</h4> <span>3.000.000 đ</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ManagementCourse