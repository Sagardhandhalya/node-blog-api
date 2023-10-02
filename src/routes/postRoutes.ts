import express, { Request, Response } from 'express';
import { getAllPosts } from '../controllers/posts/postController.js';

const postRouter = express.Router();

postRouter.get('/', (req, res) => {
  getAllPosts(req, res);
});

postRouter.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.send(`send all the post ${id}`);
});

export { postRouter };
