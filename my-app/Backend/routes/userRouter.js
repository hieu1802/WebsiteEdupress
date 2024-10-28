import {
  createComment, updateComment, hideComment, changePassword,
  deleteUserById,
  getAllUsers,
  getUserById,
  updateUserById, deleteComment
} from '../controllers/userController.js';
import express from 'express';
import multer from 'multer';
import { storage } from '../config/cloundinary.js';
const router = express.Router();
const upload = multer({ storage });

router.post('/create-comment/:courseId', upload.single('image'), createComment)
router.put('/update-comment/:commentId', updateComment);
router.put('/hide-comment/:commentId', hideComment)
router.delete('/delete-comment/:commentId', deleteComment)
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

// router.post('/login', login)

export default router;
