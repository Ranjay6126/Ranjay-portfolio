import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema(
  {
    profile: {
      name: String,
      firstName: String,
      lastName: String,
      phone: String,
      rotatingTexts: [String],
      description: String,
      stats: [{ value: String, label: String }],
      email: String,
      location: String,
      github: String,
      linkedin: String,
      instagram: String,
      twitter: String,
      facebook: String,
      resumePdf: String,
      profileImage: String,
    },
    leftSkillCategories: [
      {
        title: String,
        icon: String,
        tech: [{ title: String, iconKey: String }],
      },
    ],
    rightSkillCategories: [
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
        description: String,
        points: [String],
      },
    ],
    services: {
      intro: String,
      availability: String,
      cards: [
        {
          icon: String,
          title: String,
          description: String,
        },
      ],
      contactCard: {
        rate: String,
        address: String,
        email: String,
      },
    },
    resume: {
      summary: String,
      skills: [[String]],
      projects: [
        {
          title: String,
          date: String,
          tech: String,
          link: String,
          description: String,
        },
      ],
      achievements: [String],
    },
  },
  { timestamps: true }
);

const Portfolio = mongoose.model("Portfolio", portfolioSchema);

export default Portfolio;
