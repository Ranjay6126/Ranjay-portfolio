import asyncHandler from "../middleware/asyncHandler.js";
import Portfolio from "../models/Portfolio.js";
import { portfolioSeedData } from "../utils/seedData.js";
import { dbConnected } from "../config/db.js";

export const getPortfolio = asyncHandler(async (req, res) => {
  if (!dbConnected) {
    return res.json({ success: true, data: portfolioSeedData });
  }

  try {
    const portfolio = await Portfolio.findOne().sort({ createdAt: -1 });

    if (!portfolio) {
      return res.json({ success: true, data: portfolioSeedData });
    }

    res.json({ success: true, data: portfolio });
  } catch (err) {
    res.json({ success: true, data: portfolioSeedData });
  }
});
