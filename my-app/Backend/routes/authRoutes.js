import express from 'express';
const router = express.Router();
import { viewComments } from '../controllers/authController.js';

router.get('/view-comments', viewComments)

export default router;