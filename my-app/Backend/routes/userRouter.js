import { createComment } from "../controllers/userController.js";
import express from "express";
const router = express.Router();

router.post("/create-comment/:courseId", createComment);

// router.post('/login', login)

export default router;
