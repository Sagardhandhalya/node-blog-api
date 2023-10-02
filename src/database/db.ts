import mongoose from 'mongoose';

const connectToDb = async () => {
  let connection = await mongoose.connect(process.env.MONGODB_URL);
  return connection;
};

export { connectToDb };
