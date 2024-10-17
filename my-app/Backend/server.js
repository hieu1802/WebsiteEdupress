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

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/user', userRouter)
app.use('/api/v1/auth', authRouter)









app.listen(process.env.PORT, () => {
    console.log('Server is running!');
});

