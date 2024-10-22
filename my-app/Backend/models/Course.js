import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
    img: { type: String, required: true },
    time: { type: Number, required: true },
    student: { type: Number, required: true },
    price: { type: String, required: true },
    sale: { type: String },
    lesson: { type: String },
    author: { type: String },
    courseName: { type: String }
});

const Course = mongoose.model('Course', courseSchema);

export default Course;
