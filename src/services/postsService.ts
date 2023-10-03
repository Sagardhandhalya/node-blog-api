import Post from '../Models/Post.js';
import { IPost } from '../types/IPost.js';

export const getAllPosts = async (): Promise<IPost[]> => {
  try {
    return await Post.find<IPost>().populate('category_id').exec();
  } catch (error) {
    throw new Error('Unable to fetch posts');
  }
};

export const getPostById = async (id: string): Promise<IPost | null> => {
  try {
    return await Post.findById<IPost>(id).populate('category_id').exec();
  } catch (error) {
    throw new Error('Unable to fetch the post');
  }
};

export const createPost = async (postData: IPost): Promise<any> => {
  try {
    const post = new Post(postData);
    return await post.save();
  } catch (error) {
    throw new Error('Unable to create the post');
  }
};

export const updatePost = async (
  id: string,
  postData: Partial<IPost>
): Promise<IPost | null> => {
  try {
    return await Post.findByIdAndUpdate<IPost>(id, postData, {
      new: true,
    }).exec();
  } catch (error) {
    throw new Error('Unable to update the post');
  }
};

export const deletePost = async (id: string): Promise<void> => {
  try {
    await Post.findByIdAndRemove(id).exec();
  } catch (error) {
    throw new Error('Unable to delete the post');
  }
};

export const getLatestPostsByCategory = async (): Promise<IPost[]> => {
  try {
    return await Post.aggregate([
      {
        $group: {
          _id: '$category_id',
          latestPost: { $last: '$$ROOT' },
        },
      },
      {
        $replaceRoot: { newRoot: '$latestPost' },
      },
      {
        $lookup: {
          from: 'categories',
          localField: 'category_id',
          foreignField: '_id',
          as: 'category',
        },
      },
      {
        $unwind: '$category',
      },
    ]).exec();
  } catch (error) {
    throw new Error('Unable to fetch the latest posts by category');
  }
};
