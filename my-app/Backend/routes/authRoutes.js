import express from 'express';
const router = express.Router();
import { viewComments, getCourse } from '../controllers/authController.js';

router.get('/view-comments/:courseId', viewComments)
router.get('/get-Course/:id', getCourse)
export default router;