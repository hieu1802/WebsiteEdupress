import mongoose from 'mongoose';

const { Schema } = mongoose;

const commentSchema = new Schema({
    date: { type: String },
    author: { type: String },
    email: { type: String },
    postId: { type: String, ref: 'post' },
    userId: { type: String, ref: 'user' },
    comment: { type: String, required: true },
}, { timestamps: true });

const CommentModel = mongoose.model('comments', commentSchema);
export default CommentModel;
