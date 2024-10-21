import { createComment, updateComment, hideComment } from '../controllers/userController.js';
import express from 'express';
const router = express.Router();

router.post('/create-comment/:courseId', createComment)
router.put('/update-comment/:commentId', updateComment);
router.put('/hide-comment/:commentId', hideComment)

// router.post('/login', login)

export default router;