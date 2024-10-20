import express from 'express';
import userRouter from './routes/userRouter.js'
import authRouter from './routes/authRoutes.js'
import courseRoutes from './routes/courseRoutes.js'
import cors from 'cors';
import connect from './config/db.js';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
dotenv.config();
//connect to DB
connect();
const app = express();
app.use(express.json());
app.use(cors());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use(express.urlencoded({ extended: true }));
console.log(path.join(__dirname, 'public/images'));

app.use('/api/v1/user', userRouter)
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/courses', courseRoutes);









app.listen(process.env.PORT, () => {
    console.log('Server is running!');
});

