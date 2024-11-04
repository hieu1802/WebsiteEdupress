import CommentModel from "../models/comment.js";
import Course from "../models/Course.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";

const viewComments = async (req, res) => {
  try {
    let courseId = req.params.courseId;
    let comments = await CommentModel.find({ courseId });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
const getCourse = async (req, res) => {
  try {
    let courseId = req.params.id;
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Khóa học không tồn tại" });
    }
    console.log("Hình ảnh:", course.img);
    course.img = `http://localhost:8080/images/${course.img}`;
    console.log("Đường dẫn hình ảnh:", course.img);
    res.json(course);
  } catch (error) {
    console.error("Lỗi khi lấy khóa học:", error);
    res.status(500).json({ message: "Lỗi server" });
  }
};

const registerUser = async (req, res) => {
  try {
    const {
      email,
      userName,
      password,
      dateOfBirth,
      phoneNumber,
      address,
      role,
    } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User({
      email,
      userName,
      password,
      dateOfBirth,
      phoneNumber,
      address,
      role,
    });

    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);

    await newUser.save();

    res.status(201).json({ message: "User registered successfully", newUser });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    if (!user) return res.status(404).json({ message: "User not found" });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.status(400).json({ message: "Invalid password" });

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { viewComments, getCourse, registerUser, loginUser };
