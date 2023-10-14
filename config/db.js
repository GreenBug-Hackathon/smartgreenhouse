import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const dbUrl = "mongodb+srv://aseem:2003@cluster0.yxh8f.mongodb.net/kabelmarket";
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

export default connectDB;
