import {
  createComment,
  updateComment,
  hideComment,
  changePassword,
  deleteUserById,
  getAllUsers,
  getUserById,
<<<<<<< HEAD
  updateUserById, deleteComment
} from '../controllers/userController.js';
import express from 'express';
import multer from 'multer';
import { storage } from '../config/cloundinary.js';
=======
  updateUserById,
  deleteComment,
  requestPasswordReset,
  resetPassword,
} from "../controllers/userController.js";
import express from "express";
>>>>>>> 8713d9150b0c93d6f6fb1454f205b63fc8973c34
const router = express.Router();
const upload = multer({ storage });

<<<<<<< HEAD
router.post('/create-comment/:courseId', upload.single('image'), createComment)
router.put('/update-comment/:commentId', updateComment);
router.put('/hide-comment/:commentId', hideComment)
router.delete('/delete-comment/:commentId', deleteComment)
=======
router.post("/create-comment/:courseId", createComment);
router.put("/update-comment/:commentId", updateComment);
router.put("/hide-comment/:commentId", hideComment);
router.delete("/delete-comment/:commentId", deleteComment);
>>>>>>> 8713d9150b0c93d6f6fb1454f205b63fc8973c34
// import {
//   changePassword,
//   createComment,
//   deleteUserById,
//   getAllUsers,
//   getUserById,
//   updateUserById,
// } from "../controllers/userController.js";

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/update-user/:id", updateUserById);
router.delete("/delete-user/:id", deleteUserById);
router.post("/change-passWord", changePassword);
router.post("/lost-pass", requestPasswordReset);
router.post("/reset-password", resetPassword);

// router.post('/login', login)

export default router;
