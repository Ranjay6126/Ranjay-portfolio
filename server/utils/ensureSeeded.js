import Portfolio from "../models/Portfolio.js";
import { portfolioSeedData } from "./seedData.js";

export async function ensureSeeded() {
  const count = await Portfolio.countDocuments();

  if (count === 0) {
    await Portfolio.create(portfolioSeedData);
    console.log("Portfolio database auto-seeded.");
    return;
  }

  const existingPortfolio = await Portfolio.findOne().sort({ createdAt: -1 });
  const needsUpdate = existingPortfolio?.profile?.profileImage !== portfolioSeedData.profile.profileImage;

  if (needsUpdate) {
    await Portfolio.updateMany({}, {
      $set: {
        "profile.profileImage": portfolioSeedData.profile.profileImage,
      },
    });
    console.log("Portfolio image path normalized to the correct PNG file.");
  }
}
