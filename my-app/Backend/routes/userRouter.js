import {
  createComment,
  updateComment,
  hideComment,
  changePassword,
  deleteUserById,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteComment,
  requestPasswordReset,
  resetPassword
} from '../controllers/userController.js';
import { authenticateUser } from '../middlewares/authMiddleware.js';
import { createMomoPayment } from '../controllers/payment.js';


import multer from "multer";
import { storage } from "../config/cloundinary.js";
//   updateUserById,
//   deleteComment,
//   requestPasswordReset,
//   resetPassword,
// } from "../controllers/userController.js";
import express from "express";
const router = express.Router();
const upload = multer({ storage });

router.post('/payment', createMomoPayment)
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
router.post("/lost-pass", requestPasswordReset);
router.post("/reset-password", resetPassword);

// router.post('/login', login)

export default router;
