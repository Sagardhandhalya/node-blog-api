import mongoose from 'mongoose';
import Category from './Category.js';

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    immutable: true,
  },
  updated_at: {
    type: Date,
    immutable: true,
    default: () => new Date(),
  },
  created_at: {
    type: Date,
    imutable: true,
    default: () => new Date(),
  },
});

const Post = mongoose.model('Post', PostSchema);

export default Post;
