import CommentModel from "../models/comment.js"
const viewComments = async (req, res) => {
    try {
        let comments = await CommentModel.find()
        res.json(comments)
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
}
export { viewComments }