import mongoose from "mongoose";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import Portfolio from "../models/portfolio.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);

const checkPortfolio = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/portfolio";
    
    console.log(`\n📡 Connecting to MongoDB...`);
    console.log(`   URI: ${mongoUri}\n`);
    
    await mongoose.connect(mongoUri);
    console.log("✓ Connected to MongoDB\n");

    const portfolio = await Portfolio.findOne().select("profile.resumePdf");

    if (portfolio) {
      console.log("📋 Current Portfolio Resume Info:");
      console.log(`   Current resumePdf path: "${portfolio.profile?.resumePdf || "NOT SET"}"\n`);
      
      if (!portfolio.profile?.resumePdf) {
        console.log("⚠️  Resume PDF is NOT set in database!");
      } else if (portfolio.profile.resumePdf === "/Ranjay_Prajapati-777.pdf") {
        console.log("✓ Resume PDF is correctly set to: /Ranjay_Prajapati-777.pdf");
      } else {
        console.log("❌ Resume PDF is set to:", portfolio.profile.resumePdf);
        console.log("   This needs to be updated!\n");
      }
    } else {
      console.log("❌ No portfolio document found in database!");
      console.log("   Run: npm run seed --prefix server");
    }

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("❌ Error:", error.message);
    process.exit(1);
  }
};

checkPortfolio();
