import express from 'express';
import userRouter from './routes/userRouter.js'
import authRouter from './routes/authRoutes.js'
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
app.use(cors({
    origin: 'http://localhost:3000', // Thay đổi theo địa chỉ của ứng dụng frontend của bạn
    methods: ['GET', 'POST'], // Các phương thức mà bạn muốn cho phép
    allowedHeaders: ['Content-Type', 'Authorization'] // Các tiêu đề mà bạn muốn cho phép
}));
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use(express.urlencoded({ extended: true }));
console.log(path.join(__dirname, 'public/images'));

app.use('/api/v1/user', userRouter)
app.use('/api/v1/auth', authRouter)









app.listen(process.env.PORT, () => {
    console.log('Server is running!');
});

