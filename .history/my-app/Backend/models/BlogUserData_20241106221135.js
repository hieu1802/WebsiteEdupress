import mongoose from 'mongoose';

const blogUserDataSchema = new mongoose.Schema({
    image: { type: String },
    title: { type: String, required: true },
    content: { type: String, required: true },
})

const BlogUserData = mongoose.model('Blog', blogUserDataSchema);

export default BlogUserData;