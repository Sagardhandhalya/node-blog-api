import express from 'express';
import {
  getAllPostsController,
  getPostByIdController,
  createPostController,
  updatePostController,
  deletePostController,
  getLatestPostsByCategoryController,
} from '../controllers/posts/postsController.js';

const router = express.Router();

router.get('/', getAllPostsController);
router.get('/latest', getLatestPostsByCategoryController);
router.get('/:id', getPostByIdController);
router.post('/', createPostController);
router.put('/:id', updatePostController);
router.delete('/:id', deletePostController);

export default router;
