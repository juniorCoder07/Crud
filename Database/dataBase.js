import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const DATABASE_URL = process.env.DATABASE_URL;

export const connectDB = async () => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log(error);
  }
};
