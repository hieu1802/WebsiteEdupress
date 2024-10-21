<<<<<<< HEAD
import { createComment, updateComment, hideComment } from '../controllers/userController.js';
import express from 'express';
const router = express.Router();

router.post('/create-comment/:courseId', createComment)
router.put('/update-comment/:commentId', updateComment);
router.put('/hide-comment/:commentId', hideComment)
=======
import {
  changePassword,
  createComment,
  deleteUserById,
  getAllUsers,
  getUserById,
  updateUserById,
} from "../controllers/userController.js";
import express from "express";
const router = express.Router();

router.post("/create-comment/:courseId", createComment);
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/update-user/:id", updateUserById);
router.delete("/delete-user/:id", deleteUserById);
router.post("/change-passWord", changePassword);
>>>>>>> b138a2759b27b22f7bc1105ebe41260bfab48433

// router.post('/login', login)

export default router;
