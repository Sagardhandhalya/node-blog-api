import { Request, Response } from 'express';
const getAllPosts = (req: Request, res: Response) => {
  res.send(`send all the post ${process.env.MONGODB_URL}`);
};

export { getAllPosts };
