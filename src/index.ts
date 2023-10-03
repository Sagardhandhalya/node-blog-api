import 'dotenv/config';

import { app } from './server.js';
import { connectToDb } from './database/db.js';
import Post from './Models/Post.js';
import Category from './Models/Category.js';

app.listen(5000, async () => {
  await connectToDb();
  await seedDb();
  console.log('server is running....');
});

const seedDb = async () => {
  Category.create({ displayName: 'Node JS', name: 'node' });
};
