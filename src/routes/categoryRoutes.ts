import { Router } from 'express';
import {
  getAllCategories,
  createCategory,
} from './../controllers/category/categoryController.js';

const router: Router = Router();

/**
 * @swagger
 * /api/v1/categories:
 *   get:
 *     summary: Get all categories
 *     description: Retrieve a list of all categories.
 *     tags:
 *       - Category
 *     responses:
 *       200:
 *         description: A list of categories.
 *       500:
 *         description: Internal server error.
 */
router.get('/', getAllCategories);

/**
 * @swagger
 * /api/v1/categories:
 *   post:
 *     summary: Create a new category
 *     description: Create a new category with the provided data.
 *     tags:
 *       - Category
 *     requestBody:
 *       description: The category data to be created.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               displayName:
 *                 type: string
 *               name:
 *                 type: string
 *             required:
 *               - displayName
 *               - name
 *     responses:
 *       201:
 *         description: The newly created category.
 *       400:
 *         description: Bad request, invalid data provided.
 *       500:
 *         description: Internal server error.
 */
router.post('/', createCategory);

export default router;
