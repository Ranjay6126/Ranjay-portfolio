import Portfolio from "../models/Portfolio.js";
import { portfolioSeedData } from "./seedData.js";

export async function ensureSeeded() {
  const count = await Portfolio.countDocuments();
  if (count === 0) {
    await Portfolio.create(portfolioSeedData);
    console.log("Portfolio database auto-seeded.");
  }
}
