import mongoose from 'mongoose';

const { Schema } = mongoose;

const commentSchema = new Schema({
    date: { type: String },
    author: { type: String },
    email: { type: String },
    image: { type: String },
    postId: { type: String, ref: 'post' },
    userId: { type: String, ref: 'user' },
    comment: { type: String, required: true },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'courses', required: true },
    isHidden: { type: Boolean, default: false }
}, { timestamps: true });

const CommentModel = mongoose.model('comments', commentSchema);
export default CommentModel;
