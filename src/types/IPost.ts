import mongoose from 'mongoose';

export interface IPost {
  title: string;
  content: string;
  category_id: mongoose.Schema.Types.ObjectId;
  updated_at: Date;
  created_at: Date;
}
