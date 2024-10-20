import CommentModel from "../models/comment.js"
import Course from "../models/Course.js"
const viewComments = async (req, res) => {
    try {
        let courseId = req.params.courseId;
        let comments = await CommentModel.find({ courseId })
        res.json(comments)
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
}
const getCourse = async (req, res) => {
    try {
        let courseId = req.params.id;
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: 'Khóa học không tồn tại' });
        }
        console.log('Hình ảnh:', course.img);
        course.img = `http://localhost:8080/images/${course.img}`;
        console.log('Đường dẫn hình ảnh:', course.img);
        res.json(course);
    } catch (error) {
        console.error('Lỗi khi lấy khóa học:', error);
        res.status(500).json({ message: 'Lỗi server' });
    }


}
export { viewComments, getCourse }