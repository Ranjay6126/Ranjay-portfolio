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
  const currentName = existingPortfolio?.profile?.name ?? "";
  const expectedName = portfolioSeedData.profile.name;
  const currentDesc = existingPortfolio?.profile?.description ?? "";
  const expectedDesc = portfolioSeedData.profile.description;
  const currentImage = existingPortfolio?.profile?.profileImage ?? "";
  const expectedImage = portfolioSeedData.profile.profileImage;
  const currentRotating = JSON.stringify(existingPortfolio?.profile?.rotatingTexts ?? []);
  const expectedRotating = JSON.stringify(portfolioSeedData.profile.rotatingTexts);
  const currentLocation = existingPortfolio?.profile?.location ?? "";
  const expectedLocation = portfolioSeedData.profile.location;

  const needsFullUpdate =
    currentName !== expectedName ||
    currentDesc !== expectedDesc ||
    currentImage !== expectedImage ||
    currentRotating !== expectedRotating ||
    currentLocation !== expectedLocation;

  if (needsFullUpdate) {
    await Portfolio.updateMany({}, { $set: portfolioSeedData });
    console.log("Portfolio database updated with latest seed data.");
  }
}
