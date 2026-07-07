import dotenv from "dotenv";
import mongoose from "mongoose";
import Portfolio from "../models/Portfolio.js";

dotenv.config();

export const portfolioSeedData = {
  profile: {
    name: "Ranjay Prajapati",
    firstName: "Ranjay",
    lastName: "Prajapati",
    rotatingTexts: ["Full Stack Developer","Problem Solver"],
    description:
      "Passionate about building scalable web applications and crafting intuitive user experiences. I bridge the gap between complex engineering and elegant design.",
    stats: [
      { value: "10+", label: "Projects Completed" },
      { value: "300+", label: "DSA Problems" },
    ],
    email: "panditranjay33@gmail.com",
    github: "https://github.com/Ranjay6126",
    linkedin: "https://www.linkedin.com/in/ranjay-pandit-prajapati-2b2455227/",
    instagram: "https://www.instagram.com/er.ranjay_prajapati/",
    resumePdf: "/resume.pdf",
    profileImage: "/images/Ranjay image.jpg",
  },
  skillCategories: [
    {
      title: "MERN Stack",
      icon: "🌐",
      tech: [
        { title: "React", iconKey: "FaReact" },
        { title: "Express.js", iconKey: "SiExpress" },
        { title: "Node.js", iconKey: "FaNodeJs" },
        { title: "MongoDB", iconKey: "SiMongodb" },
      ],
    },
    {
      title: "Frontend",
      icon: "🎨",
      tech: [
        { title: "HTML5", iconKey: "FaHtml5" },
        { title: "Tailwind CSS", iconKey: "SiTailwindcss" },
        { title: "React Router", iconKey: "SiReactrouter" },
        { title: "Redux", iconKey: "SiRedux" },
        { title: "JavaScript", iconKey: "FaJs" },
      ],
    },
    {
      title: "Languages",
      icon: "💻",
      tech: [
        { title: "C++", iconKey: "SiCplusplus" },
        { title: "Java", iconKey: "FaJava" },
        { title: "Python", iconKey: "FaPython" },
      ],
    },
    {
      title: "Backend & DB",
      icon: "🗄️",
      tech: [
        { title: "MongoDB", iconKey: "SiMongodb" },
        { title: "Node.js", iconKey: "FaNodeJs" },
        { title: "Express.js", iconKey: "SiExpress" },
        { title: "MySQL", iconKey: "GrMysql" },
      ],
    },
    {
      title: "Tools",
      icon: "🧰",
      tech: [
        { title: "Git", iconKey: "FaGitAlt" },
        { title: "GitHub", iconKey: "FaGithub" },
        { title: "Docker", iconKey: "FaDocker" },
        { title: "VS Code", iconKey: "VscVscodeInsiders" },
        { title: "Postman", iconKey: "SiPostman" },
        { title: "Figma", iconKey: "PiFigmaLogoFill" },
      ],
    },
  ],
  projects: [
    {
      title: "Attendance Management System",
      img: "/images/Attendance.png",
      description:
        "Professional MERN-based Attendance Management System with role-based access for Super Admin, Admin, and Employees. Features include JWT authentication, live selfie attendance, GPS location tracking, admin verification, attendance rectification, Excel export, notifications, and secure MongoDB storage",      tech: [
        "MERN Stack",
        "Tailwind",
        "Node.js",
        "Express.js",
        "MongoDB",
        "React.js",
        "Helmet",
        "Multer",
        "Node-corn",
      ],
      liveLink: "https://github.com/Ranjay6126/Attendance-Management-System",
      githubLink: "https://github.com/Ranjay6126/Attendance-Management-System",
      date: "Nov 25 - Mar 26",
    },
    {
      title: "Quick Chat App",
      img: "/images/chat.png",
      description:
      "Quick Chat is a real-time chat application built using the MERN stack and Socket.io. It allows users to send and receive instant messages with live updates, ensuring smooth and fast communication between multiple users. The app includes secure user authentication, chat rooms, and responsive UI for seamless use across devices.",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Web Socket.io",
        "Middleware",
        "Route API",
        "Axios",
        "CORS",
        "Cloudinary",
        "Tailwind CSS",
        "Bcrypt js"
      ],
      liveLink: "https://github.com/Ranjay6126/Quick-Chat",
      githubLink: "https://github.com/Ranjay6126/Quick-Chat",
      date: "june 25 - Aug 25",
    },
    {
      title: "Book Store System",
      img: "/images/Books.png",
      description:
      "A full-stack bookstore application that lets users browse, search, add and manage books through a clean and responsive interface. Built with the MERN stack, the project focuses on efficient data handling, modern UI design and smooth CRUD operations.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "CRUD", "Moder UI", "Toast"],
      liveLink: "https://github.com/Ranjay6126/Book-Store-Project-",
      githubLink: "https://github.com/Ranjay6126/Book-Store-Project-",
      date: "sep 24 - Dec 25",
    },
    {
      title: "URL Shortener",
      img: "/images/url.png",
      description:
      "A full-stack URL Shortener built with the MERN stack following the MVC architecture. Users can register and log in using JWT authentication, create and manage short links, and track basic usage. The backend uses Node.js, Express, MongoDB, and JWT, while the frontend is built with React for a fast, responsive UI.",
      tech: ["JWT", "Short url", "MVC" , "EJS", "Express.js", "Responsive UI"],
      liveLink: "https://github.com/Ranjay6126/URL-SHORTENER",
      githubLink: "https://github.com/Ranjay6126/URL-SHORTENER",
      date: "Mar 24 - May 24",
    },
    {
      title: "File Distributed System",
      img: "/images/filedistribution.0cb6712a.jpg",
      description:
        "Developed a distributed file system for efficient file storage and access using Flask and C++. Focused on backend architecture and scalability.",
      tech: ["Flask", "C++", "Networking"],
      liveLink: "https://file-recovery-system.vercel.app/",
      githubLink: "https://github.com/rajverma04/Distribute-File-System",
      date: "Apr 25",
    },
  ],
  certificates: [
    {
      title: "Full Stack Web Development - Skill Up",
      issuer: "GeeksforGeeks",
      img: "/images/Fullstack.png",
      verifyLink:
        "https://www.geeksforgeeks.org/certificate/1a7269239921954f96d5f50c9ba65c08",
      date: "jan 26",
    },
    {
      title: "Data Structures and Algorithms",
      issuer: "GeeksforGeeks",
      img: "/images/DSA.png",
      verifyLink:
        "https://drive.google.com/file/d/1XAzkNBXkmUcf_1YEM2i1ag_R64hN3cM6/view",
      date: "jun 24",
    },
    {
      title: "Backend Development Course",
      issuer: "Physics Wallah",
      img: "/images/Backend.png",
      verifyLink:
        "https://drive.google.com/file/d/143N_LTE5ygGV9YWAIHYzkpghRl7QBsjF/view?pli=1",
      date: "Aug 24",
    },

     {
      title: "SQL (Structured Query Language)",
      issuer: "Great Learning",
      img: "/images/sql.png",
      verifyLink:
        "https://drive.google.com/file/d/1nA9xuBUdikGHf30lr-xhtET2UmOjwpZN/view",
      date: "Nov 23",
    },
     {
      title: "CompTIA Linux+ XK0-005",
      issuer: "Cybrary",
      img: "/images/linux.png",
      verifyLink:
        "https://drive.google.com/file/d/1WUCJAAewLZO0XnL5WlGujsPqO_s6tUgx/view",
      date: "Sep 24",
    },

     {
      title: "HTML, CSS, JavaScript the Hard Way",
      issuer: "Udemy",
      img: "/images/udemy.png",
      verifyLink:
        "https://drive.google.com/file/d/1olSimLZnFy8GSmHxR9qDvzlPj7JhKyxv/view",
      date: "Nov 24",
    },
  ],
  achievements: [
   
    {
      title: "DSA Problem Solving",
      description: "Solved 300+ DSA problems across LeetCode and GeeksforGeeks platforms.",
      link: "https://leetcode.com/u/Ranjay_201/",
      date: "July 2026",
    },
    
  ],
  codingProfiles: [
    {
      platform: "LeetCode",
      link: "https://leetcode.com/u/Ranjay_201/",
      iconKey: "SiLeetcode",
      desc: "Solved 300+ Problems",
      color: "from-[#FFA116] to-[#FFD700]",
    },
    {
      platform: "GeeksforGeeks",
      link: "https://www.geeksforgeeks.org/profile/panditrageon?tab=activity",
      iconKey: "SiGeeksforgeeks",
      desc: "Institute Rank 4891",
      color: "from-[#00A86B] to-[#2E8B57]",
    },
   
    {
      platform: "HackerRank",
      link: "https://www.hackerrank.com/profile/panditranjay33",
      iconKey: "SiHackerrank",
      desc: "5 Star Gold Badge",
      color: "from-[#2EC866] to-[#00FF00]",
    },
  ],
  education: [
    {
      title: "Bachelor of Technology - B.Tech (CSE)",
      institution: "Lovely Professional University, Punjab",
      duration: "Aug 2021 – May 2025 ",
      grade: "CGPA: 6.7",
    },
    {
      title: "National Examinations Board(XI) & (XII)",
      institution: "Hetauda School of Management",
      duration: "Apr 2018 – Mar 2020",
      grade: "Percentage: 71.25%",
    },
    {
      title: "Secondary Education Examination (X)",
      institution: "Adhunik Rastriya Secondary School",
      duration: "Apr 2017 – Mar 2018",
      grade: "Percentage: 81.25%",
    },
  ],
};

const seedDatabase = async () => {
  const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/portfolio";

  try {
    await mongoose.connect(uri);
    await Portfolio.deleteMany({});
    await Portfolio.create(portfolioSeedData);
    console.log("Portfolio database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Seed error:", error.message);
    process.exit(1);
  }
};

const isDirectRun = process.argv[1]?.includes("seedData.js");
if (isDirectRun) {
  seedDatabase();
}

export const PORTFOLIO_CONTEXT = `
You are an AI assistant for Raj Verma's Portfolio.
Your goal is to answer questions strictly related to Raj's professional background, projects, skills, and coding achievements.
If a user asks about general knowledge, jokes, math, or anything unrelated to the portfolio, politely refuse and redirect them to the portfolio topics.

Details about Raj Verma:
- **Role:** Full Stack Developer, UI/UX Enthusiast, Problem Solver.
- **Availability:** Available for work.
- **Experience:** Passionate about building scalable web apps and intuitive UX.
- **Stats:** 8+ Projects, 500+ DSA Problems solved.
- **Socials:** GitHub (rajverma04), LinkedIn (rajverma04), Instagram (rajjo.4).

Skills (Tech Stack):
- **MERN Stack:** React, Express.js, Node.js, MongoDB.
- **Frontend:** HTML5, Tailwind CSS, Redux, React Router, TypeScript.
- **Languages:** JavaScript, Python, Java, C++.
- **Backend & DB:** MySQL, MongoDB, Express, Node.
- **Tools:** Git, GitHub, Docker, VS Code, Postman, Figma.

Projects:
1. **Taksy:** Real-time chat app with WebSocket, E2E encryption. MERN Stack. Jan-Feb 2026.
2. **Code Nexus:** Full-stack coding platform. VS Code-like editor (Monaco), real-time execution (Judge0), Node.js/MongoDB backend. Nov-Dec 2025.
3. **GST-INVOICE GENERATOR:** Full-stack invoice generator. React, MongoDB, Express. Live at gstinvoice.vercel.app. Jul-Aug 2025.
4. **AI CHATBOT:** Python/Flask/NLP based chatbot for students. Apr 2025.
5. **File Distributed System:** Distributed file system using Flask and C++. Apr 2025.

Coding Profiles:
- **LeetCode:** 300+ Problems solved.
- **GeeksforGeeks:** Institute Rank 4891.
- **HackerRank:** 5 Star Gold Badge.
`;
