import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema(
  {
    profile: {
      name: String,
      firstName: String,
      lastName: String,
      rotatingTexts: [String],
      description: String,
      stats: [{ value: String, label: String }],
      email: String,
      github: String,
      linkedin: String,
      instagram: String,
      resumePdf: String,
      profileImage: String,
    },
    skillCategories: [
      {
        title: String,
        icon: String,
        tech: [{ title: String, iconKey: String }],
      },
    ],
    projects: [
      {
        title: String,
        img: String,
        description: String,
        tech: [String],
        liveLink: String,
        githubLink: String,
        date: String,
      },
    ],
    certificates: [
      {
        title: String,
        issuer: String,
        img: String,
        verifyLink: String,
        date: String,
      },
    ],
    achievements: [
      {
        title: String,
        description: String,
        link: String,
        date: String,
      },
    ],
    codingProfiles: [
      {
        platform: String,
        link: String,
        iconKey: String,
        desc: String,
        color: String,
      },
    ],
    education: [
      {
        title: String,
        institution: String,
        duration: String,
        grade: String,
      },
    ],
  },
  { timestamps: true }
);

const Portfolio = mongoose.model("Portfolio", portfolioSchema);

export default Portfolio;
