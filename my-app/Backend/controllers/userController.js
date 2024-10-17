import CommentModel from "../models/comment.js";
const createComment = async (req, res) => {
    try {
        let { comment, author, email } = req.body;
        const newComment = new CommentModel({
            comment,
            author,
            email,
            date: new Date().toLocaleDateString()
        })
        const saveComment = await newComment.save()
        return res.status(201).json(saveComment);
    } catch (error) {
        console.error(error);
        return res.status(500).send('Có lỗi xảy ra khi comment');
    }
}
export { createComment }