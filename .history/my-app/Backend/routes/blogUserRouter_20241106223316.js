import express from 'express';
import { createBlogUser, getAllBlogUser, deleteBlogUser } from '../controllers/blogUserController.js';

const router = express.Router();

router.post('/', createBlogUser);
router.get('/', getAllBlogUser);
router.delete('/:id', deleteBlogUser);

export default router