import express, { Request, Response, Express } from 'express';
import postRouter from './routes/postRoutes.js';

export const app: Express = express();

app.use(express.json());

app.use('/api/v1/posts', postRouter);
