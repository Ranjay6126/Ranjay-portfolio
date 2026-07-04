import asyncHandler from "../middleware/asyncHandler.js";
import Portfolio from "../models/Portfolio.js";

export const getPortfolio = asyncHandler(async (req, res) => {
  const portfolio = await Portfolio.findOne().sort({ createdAt: -1 });

  if (!portfolio) {
    res.status(404);
    throw new Error("Portfolio data not found. Run npm run seed in server folder.");
  }

  res.json({ success: true, data: portfolio });
});
