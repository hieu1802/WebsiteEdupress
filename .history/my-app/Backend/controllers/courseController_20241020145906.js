import Course from '../models/Course.js';

export const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        console.error('Error fetching courses:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const getCourseById = async (req, res) => {
    const { id } = req.params;
    try {
        const course = await Course.findById(id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json(course);
        items.img = `http://localhost:8080/images/${course.img}`;
    } catch (error) {
        console.error('Error fetching course:', error);
        res.status(500).json({ message: 'Server error' });
    }
};


export const createCourse = async (req, res) => {
    const { img, time, student, price, sale, lesson, author, courseName } = req.body;
    const newCourse = new Course({
        img,
        time,
        student,
        price,
        sale,
        lesson,
        author,
        courseName,
    });

    try {
        const savedCourse = await newCourse.save();
        res.status(201).json(savedCourse);
    } catch (error) {
        console.error('Error creating course:', error);
        res.status(500).json({ message: 'Server error' });
    }
};


export const updateCourse = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const updatedCourse = await Course.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedCourse) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json(updatedCourse);
    } catch (error) {
        console.error('Error updating course:', error);
        res.status(500).json({ message: 'Server error' });
    }
};


export const deleteCourse = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedCourse = await Course.findByIdAndDelete(id);
        if (!deletedCourse) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
        console.error('Error deleting course:', error);
        res.status(500).json({ message: 'Server error' });
    }
};