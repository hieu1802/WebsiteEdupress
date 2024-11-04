import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
    img: { type: String },
    time: { type: Number, required: true },
    student: { type: Number, required: true },
    price: { type: String, required: true },
    sale: { type: String },
    lessons: { type: Number },
    author: { type: String },
    courseName: { type: String }
});

const Course = mongoose.model('Course', courseSchema);

export default Course;
