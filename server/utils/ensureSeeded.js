import Portfolio from "../models/Portfolio.js";
import { portfolioSeedData } from "./seedData.js";
import { dbConnected } from "../config/db.js";

export async function ensureSeeded() {
  if (!dbConnected) {
    console.log("MongoDB unavailable – skipping auto-seed, using static data.");
    return;
  }

  try {
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
    const currentEducation = JSON.stringify(existingPortfolio?.education ?? []);
    const expectedEducation = JSON.stringify(portfolioSeedData.education ?? []);
    const currentLeftSkills = JSON.stringify(existingPortfolio?.leftSkillCategories ?? []);
    const expectedLeftSkills = JSON.stringify(portfolioSeedData.leftSkillCategories ?? []);
    const currentRightSkills = JSON.stringify(existingPortfolio?.rightSkillCategories ?? []);
    const expectedRightSkills = JSON.stringify(portfolioSeedData.rightSkillCategories ?? []);

    const needsFullUpdate =
      currentName !== expectedName ||
      currentDesc !== expectedDesc ||
      currentImage !== expectedImage ||
      currentRotating !== expectedRotating ||
      currentLocation !== expectedLocation ||
      currentEducation !== expectedEducation ||
      currentLeftSkills !== expectedLeftSkills ||
      currentRightSkills !== expectedRightSkills;

    if (needsFullUpdate) {
      await Portfolio.updateMany({}, { $set: portfolioSeedData });
      console.log("Portfolio database updated with latest seed data.");
    }
  } catch (err) {
    console.warn("ensureSeeded skipped:", err.message);
  }
}
