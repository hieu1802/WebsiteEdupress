import { createComment } from "../controllers/userController.js";
import express from "express";
const router = express.Router();

// router.get("/", getAllUsers);
router.post("/create-comment", createComment);

// router.post('/login', login)

export default router;
