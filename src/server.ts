import express, { Request, Response } from 'express';
import { postRouter } from './routes/postRoutes.js';
import authRouter from './routes/authRoutes.js';

export const app = express();

app.use(express.json());

app.use('/v1/posts', postRouter);
app.use('/v1/users', authRouter);
