import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import Portfolio from "../models/portfolio.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const updateResumePdf = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/portfolio";
    
    console.log(`Connecting to MongoDB at: ${mongoUri}`);
    await mongoose.connect(mongoUri);
    console.log("✓ Connected to MongoDB");

    // Update the portfolio document to set the new resume PDF path
    const result = await Portfolio.findOneAndUpdate(
      {},
      {
        $set: {
          "profile.resumePdf": "/Ranjay_Prajapati-777.pdf"
        }
      },
      { new: true }
    );

    if (result) {
      console.log("✓ Successfully updated resume PDF path!");
      console.log(`  Resume PDF: ${result.profile.resumePdf}`);
    } else {
      console.log("⚠ No portfolio document found. Create one first with the seed script.");
    }

    await mongoose.connection.close();
    console.log("✓ Database connection closed");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error updating resume PDF:", error.message);
    process.exit(1);
  }
};

updateResumePdf();
