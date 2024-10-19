import mongoose from 'mongoose';

const blogDataSchema = new mongoose.Schema({
    image:{type:String, require: true},
    title:{type:String, require: true},
    content:{type:String, require: true},
    id: {type:String}

})

const BlogData = mongoose.model('Course', blogDataSchema);

export default BlogData;