import CommentModel from "../models/comment.js";
import mongoose from "mongoose";
const createComment = async (req, res) => {
    try {
        let { comment, author, email } = req.body;
        let courseId = req.params.courseId;

        if (!mongoose.Types.ObjectId.isValid(courseId)) {
            return res.status(400).json({ error: "Invalid courseId" });
        }
        const newComment = new CommentModel({
            courseId: new mongoose.Types.ObjectId(courseId),
            comment,
            author,
            email,
            date: new Date().toLocaleDateString(),
            isHidden: false
        })

        const saveComment = await newComment.save()
        return res.status(201).json(saveComment);
    } catch (error) {
        console.error(error);
        return res.status(500).send('Có lỗi xảy ra khi comment');
    }
}
const updateComment = async (req, res) => {
    try {
        let { commentId } = req.params; // Lấy ID của comment từ URL
        let { comment } = req.body;
        const updatedComment = await CommentModel.findByIdAndUpdate(commentId, { comment }, { new: true });
        if (!updatedComment) {
            return res.status(404).json({ message: 'Comment không tồn tại' });
        }
        return res.json(updatedComment);
    } catch (error) {
        console.error('Lỗi khi cập nhật comment:', error);
        return res.status(500).json({ message: 'Có lỗi xảy ra khi cập nhật comment' });
    }

}
const hideComment = async (req, res) => {
    try {
        const { commentId } = req.params;
        console.log('Hiding comment with ID:', commentId);
        // Kiểm tra nếu commentId có giá trị hợp lệ
        if (!commentId) {
            return res.status(400).json({ message: 'commentId không hợp lệ' });
        }

        // Kiểm tra xem commentId có phải là ObjectId hợp lệ không
        if (!mongoose.Types.ObjectId.isValid(commentId)) {
            return res.status(400).json({ message: 'commentId không hợp lệ' });
        }
        const updateComment = await CommentModel.findByIdAndUpdate(commentId, { isHidden: true }, { new: true })
        if (!updateComment) {
            return res.status(404).json({ message: 'Comment không tồn tại' });
        }
        console.log('Comment updated:', updateComment); // Log kết quả cập nhật

        return res.json(updateComment);
    } catch (error) {
        console.error('Lỗi khi ẩn comment:', error);
        return res.status(500).json({ message: 'Có lỗi xảy ra khi ẩn comment' });
    }
}
export { createComment, updateComment, hideComment }