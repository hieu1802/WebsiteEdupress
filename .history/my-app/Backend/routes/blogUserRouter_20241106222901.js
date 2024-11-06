import express from 'express';
import { createBlogUser, getAllBlogUser, deleteBlogUser } from '../controllers/blogUserController';

const router = express.Router();

router.post('/', createBlogUser);
router.get('/', getAllBlogUser);
router.delete('/:id', deleteBlogUser);

export default router