import express from 'express';
import { createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog, upload } from '../controllers/blogController.js';

const router = express.Router();

router.post('/blogs', upload.single('image'), createBlog);
router.get('/blogs', getAllBlogs);
router.get('/blogs/:id', getBlogById);
router.put('/blogs/:id', updateBlog);
router.delete('/blogs/:id', deleteBlog);

export default router;
