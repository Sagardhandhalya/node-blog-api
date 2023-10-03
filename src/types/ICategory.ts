import { Document } from 'mongoose';
export interface ICategory extends Document {
  displayName: string;
  name: string;
}
