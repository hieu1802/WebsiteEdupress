import mongoose from 'mongoose';

const blogDataSchema = new mongoose.Schema({
    image:{type:String, require: true},
    title:{type:String, require: true},
    content:{type:String, require: true},
})

const BlogData = mongoose.model('Blog', blogDataSchema);

export default BlogData;