import express from 'express';
import {
    getAllCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse
} from '../controllers/courseController.js';

const router = express.Router();

// Lấy danh sách tất cả khóa học
router.get('/', getAllCourses);

// Lấy khóa học theo ID
router.get('/:id', getCourseById);

// Tạo khóa học mới
router.post('/', createCourse);

// Cập nhật khóa học
router.put('/:id', updateCourse);

// Xóa khóa học
router.delete('/:id', deleteCourse);

export default router;