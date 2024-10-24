import express from "express";
const router = express.Router();
import { viewComments, getCourse } from "../controllers/authController.js";
import { registerUser } from "../controllers/authController.js";
import { loginUser } from "../controllers/authController.js";
// import { createDefaultAdmin } from "../controllers/userController.js";

router.get("/view-comments/:courseId", viewComments);
router.get("/get-Course/:id", getCourse);
router.post("/register", registerUser);
router.post("/login", loginUser);
// router.get("/admin-account", createDefaultAdmin);

export default router;
