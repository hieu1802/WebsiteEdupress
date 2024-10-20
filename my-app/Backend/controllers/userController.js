import CommentModel from "../models/comment.js";
import User from "../models/User.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
const createComment = async (req, res) => {
  try {
    let { comment, author, email } = req.body;
    let courseId = req.params.courseId;

    if (!mongoose.Types.ObjectId.isValid(courseId)) {
      return res.status(400).json({ error: "Invalid courseId" });
    }
    const newComment = new CommentModel({
      courseId: new mongoose.Types.ObjectId(courseId),
      comment,
      author,
      email,
      date: new Date().toLocaleDateString(),
    });

    const saveComment = await newComment.save();
    return res.status(201).json(saveComment);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Có lỗi xảy ra khi comment");
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUserById = async (req, res) => {
  try {
    const { userName, email, dateOfBirth, phoneNumber, address } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { userName, email, dateOfBirth, phoneNumber, address },
      { new: true }
    );
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const changePassword = async (req, res) => {
  try {
    const { userId, oldPassword, newPassword } = req.body;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const validPassword = await bcrypt.compare(oldPassword, user.password);
    if (!validPassword)
      return res.status(400).json({ message: "Incorrect old password" });

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  createComment,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  changePassword,
};
