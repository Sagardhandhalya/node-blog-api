import { Request, Response } from 'express';
import {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  getLatestPostsByCategory,
} from '../../services/postsService.js';

export async function getAllPostsController(req: Request, res: Response) {
  try {
    const posts = await getAllPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function getPostByIdController(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const post = await getPostById(id);

    if (!post) {
      res.status(404).json({ error: 'Post not found' });
      return;
    }

    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function createPostController(req: Request, res: Response) {
  const postData = req.body;

  try {
    const post = await createPost(postData);
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function updatePostController(req: Request, res: Response) {
  const { id } = req.params;
  const postData = req.body;

  try {
    const updatedPost = await updatePost(id, postData);

    if (!updatedPost) {
      res.status(404).json({ error: 'Post not found' });
      return;
    }

    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function deletePostController(req: Request, res: Response) {
  const { id } = req.params;

  try {
    await deletePost(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function getLatestPostsByCategoryController(
  req: Request,
  res: Response
) {
  try {
    const latestPosts = await getLatestPostsByCategory();
    res.json(latestPosts);
  } catch (error) {
    console.log(error.message);

    res.status(500).json({ error: 'Internal Server Error' });
  }
}
