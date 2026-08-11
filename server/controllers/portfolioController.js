import asyncHandler from "../middleware/asyncHandler.js";
import Portfolio from "../models/Portfolio.js";
import { dbConnected } from "../config/db.js";

export const getPortfolio = asyncHandler(async (req, res) => {
  if (!dbConnected) {
    return res.status(503).json({
      success: false,
      message: "Portfolio database is unavailable. Please start MongoDB and try again.",
    });
  }

  const portfolio = await Portfolio.findOne().sort({ createdAt: -1 });

  if (!portfolio) {
    return res.status(404).json({
      success: false,
      message: "Portfolio data was not found in the database.",
    });
  }

  res.json({ success: true, data: portfolio });
});
