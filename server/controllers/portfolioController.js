import asyncHandler from "../middleware/asyncHandler.js";
import Portfolio from "../models/Portfolio.js";
import { myData } from "../utils/MyData.js";
import { dbConnected } from "../config/db.js";

export const getPortfolio = asyncHandler(async (req, res) => {
  if (!dbConnected) {
    return res.json({ success: true, data: myData });
  }

  try {
    const portfolio = await Portfolio.findOne().sort({ createdAt: -1 });

    if (!portfolio) {
      return res.json({ success: true, data: myData });
    }

    res.json({ success: true, data: portfolio });
  } catch (err) {
    res.json({ success: true, data: myData });
  }
});
