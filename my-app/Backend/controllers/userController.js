import CommentModel from "../models/comment.js";
import User from "../models/User.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import multer from "multer";
import { storage } from "../config/cloundinary.js";
const upload = multer({ storage });

const createComment = async (req, res) => {
  try {
    let { comment, author, email, image } = req.body;
    let courseId = req.params.courseId;
    // const image = req.file ? req.file.path : null;
    console.log("Image URL:", image); // Log để kiểm tra đường dẫn ảnh
    console.log("Request body:", req.body);
    if (!mongoose.Types.ObjectId.isValid(courseId)) {
      return res.status(400).json({ error: "Invalid courseId" });
    }
    const newComment = new CommentModel({
      courseId: new mongoose.Types.ObjectId(courseId),
      comment,
      author,
      email,
      image: image || null,
      date: new Date().toLocaleDateString(),
      isHidden: false,
    });

    const saveComment = await newComment.save();
    return res.status(201).json(saveComment);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Có lỗi xảy ra khi comment");
  }
};
const updateComment = async (req, res) => {
  try {
    let { commentId } = req.params; // Lấy ID của comment từ URL
    let { comment } = req.body;
    const updatedComment = await CommentModel.findByIdAndUpdate(
      commentId,
      { comment },
      { new: true }
    );
    if (!updatedComment) {
      return res.status(404).json({ message: "Comment không tồn tại" });
    }
    return res.json(updatedComment);
  } catch (error) {
    console.error("Lỗi khi cập nhật comment:", error);
    return res
      .status(500)
      .json({ message: "Có lỗi xảy ra khi cập nhật comment" });
  }
};
const hideComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    console.log("Hiding comment with ID:", commentId);
    // Kiểm tra nếu commentId có giá trị hợp lệ
    if (!commentId) {
      return res.status(400).json({ message: "commentId không hợp lệ" });
    }

    // Kiểm tra xem commentId có phải là ObjectId hợp lệ không
    if (!mongoose.Types.ObjectId.isValid(commentId)) {
      return res.status(400).json({ message: "commentId không hợp lệ" });
    }
    const updateComment = await CommentModel.findByIdAndUpdate(
      commentId,
      { isHidden: true },
      { new: true }
    );
    if (!updateComment) {
      return res.status(404).json({ message: "Comment không tồn tại" });
    }
    console.log("Comment updated:", updateComment); // Log kết quả cập nhật

    return res.json(updateComment);
  } catch (error) {
    console.error("Lỗi khi ẩn comment:", error);
    return res.status(500).json({ message: "Có lỗi xảy ra khi ẩn comment" });
  }
};
const deleteComment = async (req, res) => {
  try {
    const { commentId } = req.params;

    // Tìm và xóa comment theo ID
    const deletedComment = await CommentModel.findByIdAndDelete(commentId);

    if (!deletedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    console.error("Error deleting comment:", error);
    res.status(500).json({ message: "Error deleting comment" });
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
    const { userNameOrEmail, oldPassword, newPassword } = req.body;

    const user = await User.findOne({
      $or: [{ userName: userNameOrEmail }, { email: userNameOrEmail }],
    });

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

const requestPasswordReset = async (req, res) => {
  const { userNameOrEmail } = req.body;

  try {
    const user = await User.findOne({
      $or: [{ email: userNameOrEmail }, { userName: userNameOrEmail }],
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User found, proceed with reset" });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};

const resetPassword = async (req, res) => {
  const { userNameOrEmail, newPassword } = req.body;

  try {
    const user = await User.findOne({
      $or: [{ email: userNameOrEmail }, { userName: userNameOrEmail }],
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    user.password = hashedPassword;
    await user.save();

    return res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};

const createDefaultAdmin = async () => {
  const adminAccountExists = await User.findOne({ userName: "admin" });

  if (!adminAccountExists) {
    const adminAccount = new User({
      email: "admin@example.com",
      userName: "admin",
      password: "admin",
      role: "admin",
    });

    const salt = await bcrypt.genSalt(10);
    adminAccount.password = await bcrypt.hash(adminAccount.password, salt);

    await adminAccount.save();
    console.log("Default admin account created.");
  }
};

export {
  createComment,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  changePassword,
  updateComment,
  hideComment,
  deleteComment,
  requestPasswordReset,
  resetPassword,
  createDefaultAdmin,
};
