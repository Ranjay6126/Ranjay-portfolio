import Portfolio from "../models/Portfolio.js";
import { myData } from "./MyData.js";
import { dbConnected } from "../config/db.js";

export async function sureData() {
  if (!dbConnected) {
    console.log("MongoDB unavailable – skipping auto-seed, using static data.");
    return;
  }

  try {
    const count = await Portfolio.countDocuments();

    if (count === 0) {
      await Portfolio.create(myData);
      console.log("Portfolio database auto-seeded.");
      return;
    }

    const existingPortfolio = await Portfolio.findOne().sort({ createdAt: -1 });
    const currentName = existingPortfolio?.profile?.name ?? "";
    const expectedName = myData.profile.name;
    const currentDesc = existingPortfolio?.profile?.description ?? "";
    const expectedDesc = myData.profile.description;
    const currentImage = existingPortfolio?.profile?.profileImage ?? "";
    const expectedImage = myData.profile.profileImage;
    const currentRotating = JSON.stringify(existingPortfolio?.profile?.rotatingTexts ?? []);
    const expectedRotating = JSON.stringify(myData.profile.rotatingTexts);
    const currentLocation = existingPortfolio?.profile?.location ?? "";
    const expectedLocation = myData.profile.location;
    const currentEducation = JSON.stringify(existingPortfolio?.education ?? []);
    const expectedEducation = JSON.stringify(myData.education ?? []);
    const currentLeftSkills = JSON.stringify(existingPortfolio?.leftSkillCategories ?? []);
    const expectedLeftSkills = JSON.stringify(myData.leftSkillCategories ?? []);
    const currentRightSkills = JSON.stringify(existingPortfolio?.rightSkillCategories ?? []);
    const expectedRightSkills = JSON.stringify(myData.rightSkillCategories ?? []);

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
      await Portfolio.updateMany({}, { $set: myData });
      console.log("Portfolio database updated with latest seed data.");
    }
  } catch (err) {
    console.warn("sureData skipped:", err.message);
  }
}
