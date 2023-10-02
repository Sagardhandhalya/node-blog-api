import 'dotenv/config';

import { app } from './server.js';
import { connectToDb } from './database/db.js';
import Post from './Models/Post.js';

app.listen(5000, async () => {
  await connectToDb();
  const run = async () => {
    let x = await Post.create({ title: 'cool' });
    console.log(x);
  };

  await run();
  console.log('server is running....');
});
