import dotenv from "dotenv";
import mongoose from "mongoose";
import Portfolio from "../models/Portfolio.js";

dotenv.config();

export const portfolioSeedData = {
  profile: {
    name: "< Ranjay Prajapati />",
    firstName: "Ranjay",
    lastName: "Prajapati",
    rotatingTexts: ["Full Stack Developer", "Problem Solver"],
    description:
      "Full-Stack Software Engineer with expertise in the MERN stack, experienced in developing scalable, secure, and high-performance web applications. Passionate about building modern user-centric solutions with clean code and intuitive design. Demonstrated strong problem-solving and analytical skills with a solid understanding of Data Structures and Algorithms, with 300+ problems solved. I am passionate about learning and developing new software solutions.",
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
  leftSkillCategories: [
    {
      title: "MERN Stack",
      icon: "🌐",
      tech: [
        { title: "React", iconKey: "FaReact" },
        { title: "Express.js", iconKey: "SiExpress" },
        { title: "Node.js", iconKey: "FaNodeJs" },
        { title: "MongoDB", iconKey: "SiMongodb" },
        { title: "SQL", iconKey: "GrMysql" },
      ],
    },
    {
      title: "Frontend",
      icon: "🎨",
      tech: [
        { title: "HTML5", iconKey: "FaHtml5" },
        { title: "CSS", iconKey: "FaCss3" },
        { title: "JavaScript", iconKey: "FaJs" },
        { title: "React Router", iconKey: "SiReactrouter" },
        { title: "Redux", iconKey: "SiRedux" },
        { title: "Tailwind CSS", iconKey: "SiTailwindcss" },
      ],
    },
    {
      title: "Languages",
      icon: "💻",
      tech: [
        { title: "C++", iconKey: "SiCplusplus" },
        { title: "Java", iconKey: "FaJava" },
        { title: "Python", iconKey: "FaPython" },
        { title: "JavaScript", iconKey: "FaJs" },
        { title: "TypeScript", iconKey: "SiTypescript" },
      ],
    },
  ],
  rightSkillCategories: [
    {
      title: "Backend & DB",
      icon: "🗄️",
      tech: [
        { title: "MongoDB", iconKey: "SiMongodb" },
        { title: "Node.js", iconKey: "FaNodeJs" },
        { title: "Express.js", iconKey: "SiExpress" },
        { title: "MySQL", iconKey: "GrMysql" },
        { title: "JWT", iconKey: "SiJsonwebtokens" },
        { title: "GraphQL", iconKey: "SiGraphql" },
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
    {
      title: "Core CS",
      icon: "🖥️",
      tech: [
        { title: "DBMS", iconKey: "GrDatabase" },
        { title: "OS", iconKey: "FaMicrochip" },
        { title: "CN", iconKey: "FaNetworkWired" },
        { title: "AWS", iconKey: "FaAws" },
        { title: "Linux", iconKey: "FaLinux" },
        { title: "OOP", iconKey: "FaCode" },
      ],
    },
  ],
  projects: [
    {
      title: "Attendance Management System",
      img: "/images/Attendance.png",
      description:
        "Professional MERN-based Attendance Management System with role-based access for Super Admin, Admin, and Employees. Features include JWT authentication, live selfie attendance, GPS location tracking, admin verification, attendance rectification, Excel export, notifications, and secure MongoDB storage",
      tech: [
        "MERN Stack",
        "Tailwind",
        "Node.js",
        "Express.js",
        "MongoDB",
        "React.js",
        "Helmet",
        "Multer",
        "Node-cron",
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
        "Bcrypt js",
      ],
      liveLink: "https://github.com/Ranjay6126/Quick-Chat",
      githubLink: "https://github.com/Ranjay6126/Quick-Chat",
      date: "June 25 - Aug 25",
    },
    {
      title: "Book Store System",
      img: "/images/Books.png",
      description:
        "A full-stack bookstore application that lets users browse, search, add and manage books through a clean and responsive interface. Built with the MERN stack, the project focuses on efficient data handling, modern UI design and smooth CRUD operations.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "CRUD", "Moder UI", "Toast"],
      liveLink: "https://github.com/Ranjay6126/Book-Store-Project-",
      githubLink: "https://github.com/Ranjay6126/Book-Store-Project-",
      date: "Sep 24 - Dec 25",
    },
    {
      title: "URL Shortener",
      img: "/images/url.png",
      description:
        "A full-stack URL Shortener built with the MERN stack following the MVC architecture. Users can register and log in using JWT authentication, create and manage short links, and track basic usage. The backend uses Node.js, Express, MongoDB, and JWT, while the frontend is built with React for a fast, responsive UI.",
      tech: ["JWT", "Short url", "MVC", "EJS", "Express.js", "Responsive UI"],
      liveLink: "https://github.com/Ranjay6126/URL-SHORTENER",
      githubLink: "https://github.com/Ranjay6126/URL-SHORTENER",
      date: "Mar 24 - May 24",
    },
    {
      title: "Food-Order-App",
      img: "/images/food.png",
      description:
        "Developed a full-stack food ordering application that allows users to browse food items, add products to the cart, place orders, and track order status. Implemented secure user authentication, responsive UI design, and RESTful APIs for efficient data management. Integrated MongoDB for storing user, menu, and order data, ensuring a seamless and user-friendly ordering experience across devices.",
      tech: ["RESTful API", "React UI", "MongoDB", "Node.js"],
      liveLink: "https://github.com/Ranjay6126/Learning-React-/tree/main/Learning-React-/FoodOrder_App",
      githubLink: "https://github.com/Ranjay6126/Learning-React-/tree/main/Learning-React-/FoodOrder_App",
      date: "Apr 26",
    },
    {
      title: "Amazon Clone 🛒",
      img: "/images/Amazon.png",
      description:
        "A responsive Amazon clone built using HTML and CSS, designed to replicate the core layout and visual experience of the Amazon e-commerce platform. This project focuses on front-end structure, styling, and responsive design to closely match the original user interface.",
      tech: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://github.com/Ranjay6126/Amazon_clone",
      githubLink: "https://github.com/Ranjay6126/Amazon_clone",
      date: "Dec 23",
    },
  ],
  certificates: [
    {
      title: "Full Stack Web Development - Skill Up",
      issuer: "GeeksforGeeks",
      img: "/images/Fullstack.png",
      verifyLink: "https://www.geeksforgeeks.org/certificate/1a7269239921954f96d5f50c9ba65c08",
      date: "Jan 26",
    },
    {
      title: "Data Structures and Algorithms",
      issuer: "GeeksforGeeks",
      img: "/images/DSA.png",
      verifyLink: "https://drive.google.com/file/d/1XAzkNBXkmUcf_1YEM2i1ag_R64hN3cM6/view",
      date: "June 24",
    },
    {
      title: "Backend Development Course",
      issuer: "Physics Wallah",
      img: "/images/Backend.png",
      verifyLink: "https://drive.google.com/file/d/143N_LTE5ygGV9YWAIHYzkpghRl7QBsjF/view?pli=1",
      date: "Aug 24",
    },
    {
      title: "SQL (Structured Query Language)",
      issuer: "Great Learning",
      img: "/images/sql.png",
      verifyLink: "https://drive.google.com/file/d/1nA9xuBUdikGHf30lr-xhtET2UmOjwpZN/view",
      date: "Nov 23",
    },
    {
      title: "CompTIA Linux+ XK0-005",
      issuer: "Cybrary",
      img: "/images/linux.png",
      verifyLink: "https://drive.google.com/file/d/1WUCJAAewLZO0XnL5WlGujsPqO_s6tUgx/view",
      date: "Sep 24",
    },
    {
      title: "HTML, CSS, JavaScript the Hard Way",
      issuer: "Udemy",
      img: "/images/udemy.png",
      verifyLink: "https://drive.google.com/file/d/1olSimLZnFy8GSmHxR9qDvzlPj7JhKyxv/view",
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
  education: [
    {
      title: "Bachelor of Technology - B.Tech (CSE)",
      institution: "Lovely Professional University, Punjab",
      duration: "Aug 2021 – May 2025",
      grade: "CGPA: 6.7",
    },
    {
      title: "National Examinations Board (XI) & (XII)",
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

export const PORTFOLIO_CONTEXT = `You are an AI assistant for Ranjay Prajapati's Portfolio.
Your goal is to answer questions strictly related to Ranjay's professional background, projects, skills, education, and achievements.
If a user asks about general knowledge, jokes, math, or anything unrelated to the portfolio, politely refuse and redirect them to the portfolio topics.

Details about Ranjay Prajapati:
- **Role**: Full Stack Developer, Problem Solver.
- **Availability**: Available for work.
- **Experience**: Full-Stack Software Engineer with expertise in the MERN stack, building scalable, secure, and high-performance web applications.
- **Stats**: 10+ Projects Completed, 300+ DSA Problems solved.
- **Email**: panditranjay33@gmail.com
- **Socials**: GitHub (Ranjay6126), LinkedIn (ranjay-pandit-prajapati-2b2455227), Instagram (er.ranjay_prajapati).

Skills (Tech Stack):
- **MERN Stack**: React, Express.js, Node.js, MongoDB.
- **Frontend**: HTML5, Tailwind CSS, React Router, Redux, JavaScript, CSS.
- **Languages**: C++, Java, Python, JavaScript, TypeScript.
- **Backend & DB**: MongoDB, Node.js, Express.js, MySQL, JWT, GraphQL.
- **Tools**: Git, GitHub, Docker, VS Code, Postman, Figma.
- **Core CS**: DBMS, OS, CN, AWS, Linux, OOPs.

Projects:
1. **Attendance Management System**: MERN-based system with JWT auth, live selfie attendance, GPS tracking. Nov 25 - Mar 26.
2. **Quick Chat App**: Real-time chat with Socket.io, MERN stack. June 25 - Aug 25.
3. **Book Store System**: Full-stack bookstore with CRUD operations. Sep 24 - Dec 25.
4. **URL Shortener**: MERN URL shortener with JWT authentication and MVC architecture. Mar 24 - May 24.
5. **Food-Order-App**: Full-stack food ordering app with authentication and RESTful APIs. Apr 26.
6. **Amazon Clone**: Responsive Amazon clone with HTML, CSS, JavaScript. Dec 23.

Achievements:
- **DSA Problem Solving**: Solved 300+ DSA problems on LeetCode and GeeksforGeeks. Profile: https://leetcode.com/u/Ranjay_201/

Education:
- B.Tech (CSE) at Lovely Professional University, Punjab (Aug 2021 – May 2025, CGPA: 6.7)
- NEB (XI) & (XII) at Hetauda School of Management (Apr 2018 – Mar 2020, 71.25%)
- SEE (X) at Adhunik Rastriya Secondary School (Apr 2017 – Mar 2018, 81.25%)
`;
