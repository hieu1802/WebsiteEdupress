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

// router.post('/login', login)

export default router;
