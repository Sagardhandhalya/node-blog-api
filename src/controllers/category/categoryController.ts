import { Request, Response } from 'express';
import { ICategory } from '../../types/ICategory.js';
import Category from '../../Models/Category.js';

export async function getAllCategories(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const categories: ICategory[] = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function createCategory(
  req: Request,
  res: Response
): Promise<void> {
  const { displayName, name } = req.body;

  try {
    const newCategory: ICategory = new Category({ displayName, name });
    const savedCategory: ICategory = await newCategory.save();
    res.status(201).json(savedCategory);
  } catch (error) {
    res.status(400).json({ error: 'Bad request, invalid data provided' });
  }
}
