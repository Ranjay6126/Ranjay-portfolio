import mongoose from "mongoose";

export let dbConnected = false;

const connectDB = async () => {
  const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/portfolio";

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 3000,
    });
    dbConnected = true;
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.warn(
      `MongoDB connection failed (${error.message}). Portfolio API will be unavailable until MongoDB is started. Install and start MongoDB, then seed the database with "npm run seed".`
    );
    dbConnected = false;
  }
};

export default connectDB;
