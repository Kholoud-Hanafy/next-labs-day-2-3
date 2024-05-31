import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/nextdb-products';

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      console.log('Connected to MongoDB...');
      return mongoose;
    }).catch((err) => {
      console.error("Couldn't connect to MongoDB...", err);
      throw err;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}