import mongoose from 'mongoose';

const blogDataSchema = new mongoose.Schema({
    image: { type: String },
    title: { type: String, required: true },
    content: { type: String, required: true },
    userId: { type: String, ref: 'user' },
})

const BlogData = mongoose.model('Blog', blogDataSchema);

export default BlogData;