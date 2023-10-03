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

/**
 * @swagger
 * /api/v1/posts:
 *   get:
 *     summary: Get a list of posts
 *     description: Retrieve a list of all users.
 *     tags:
 *       - Post
 *     responses:
 *       200:
 *         description: A list of users.
 *       500:
 *         description: Internal server error.
 */
router.get('/', getAllPostsController);

/**
 * @swagger
 * /api/v1/posts/latest:
 *   get:
 *     summary: Get the latest posts by category
 *     description: Retrieve the latest posts for a specific category.
 *     tags:
 *       - Post
 *     responses:
 *       200:
 *         description: The latest posts for the specified category.
 *       500:
 *         description: Internal server error.
 */
router.get('/latest', getLatestPostsByCategoryController);

/**
 * @swagger
 * /api/v1/posts/{id}:
 *   get:
 *     summary: Get a post by ID
 *     description: Retrieve a post by its unique identifier.
 *     tags:
 *       - Post
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the post to retrieve.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The requested post.
 *       500:
 *         description: Internal server error.
 */
router.get('/:id', getPostByIdController);

/**
 * @swagger
 * /api/v1/posts:
 *   post:
 *     summary: Create a new post
 *     description: Create a new post with the provided data.
 *     tags:
 *       - Post
 *     requestBody:
 *       description: The post data to be created.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               category_id:
 *                 type: get category Id from a category collection
 *             required:
 *               - title
 *               - content
 *               - category_id
 *     responses:
 *       201:
 *         description: The newly created post.
 *       500:
 *         description: Internal server error.
 */
router.post('/', createPostController);

/**
 * @swagger
 * /api/v1/posts/{id}:
 *   put:
 *     summary: Update a post by ID
 *     description: Update a post with the provided data.
 *     tags:
 *       - Post
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the post to update.
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       description: The post data to be created.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               category_id:
 *                 type: get category Id from a category collection
 *             required:
 *               - title
 *               - content
 *               - category_id
 *     responses:
 *       200:
 *         description: The updated post.
 *       400:
 *         description: Bad request, invalid data provided.
 *       500:
 *         description: Internal server error.
 */
router.put('/:id', updatePostController);

/**
 * @swagger
 * /api/v1/posts/{id}:
 *   delete:
 *     summary: Delete a post by ID
 *     description: Delete a post with the provided ID.
 *     tags:
 *       - Post
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the post to delete.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Post deleted successfully.
 *       500:
 *         description: Internal server error.
 */
router.delete('/:id', deletePostController);

export default router;
