import dotenv from "dotenv";
import mongoose from "mongoose";
import Portfolio from "../models/Portfolio.js";

dotenv.config();

export const myData = {
  profile: {
    name: "<Ranjay Prajapati/>",
    firstName: "Ranjay",
    lastName: "Prajapati",
    rotatingTexts: ["Full-Stack Software Engineer", "Problem Solver & Cyber Security"],
    description:
      "I am a results-driven Full Stack Software Engineer Graduate (B.Tech) in Computer Science and Engineering from Lovely Professional University with specializations in Software Engineering and Cyber Security. I have experience with the MERN Stack (MongoDB, Express.js, React.js, and Node.js.) and have built secure, scalable, and user-centric web applications that follow models for clean architecture and code that will not deteriorate. I have a high affinity toward data structures and algorithms. In fact, I have solved over 300+ coding problems. My favorite part of my job is creating cutting-edge software solutions to fulfill the visions and ideas that my peers and I come up with. Currently, I am driven by curiosity more than any other factor and consistently learn new technologies with a special interest in artificial intelligence.",
    stats: [
      { value: "15+", label: "Projects Completed" },
      { value: "300+", label: "DSA Problems" },
    ],
    email: "panditranjay33@gmail.com",
    location: "Bengaluru, Whitefield",
    github: "https://github.com/Ranjay6126",
    linkedin: "https://www.linkedin.com/in/ranjay-pandit-prajapati/",
    instagram: "https://www.instagram.com/er.ranjay_prajapati/",
    twitter: "https://x.com/Ranjay10220",
    facebook: "https://www.facebook.com/mrranjay.prajapati/",
    resumePdf: "/resume.pdf",
    profileImage: "/images/Ranjay image.png",
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
      title: "Language",
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
        { title: "Wireshark", iconKey: "ToolWireshark" },
        { title: "Nmap", iconKey: "ToolNmap" },
        { title: "Metasploit", iconKey: "ToolMetasploit" },
        { title: "Burp Suite", iconKey: "ToolBurpSuite" },
        { title: "Nessus", iconKey: "ToolNessus" },
        { title: "Nikto", iconKey: "ToolNikto" },
        { title: "Kali Linux", iconKey: "ToolKaliLinux" },
        { title: "John the Ripper", iconKey: "ToolJohnTheRipper" },
        { title: "Hashcat", iconKey: "ToolHashcat" },
        { title: "Autopsy", iconKey: "ToolAutopsy" },
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
      title: "Employees Attendance Management",
      img: "/images/Attendance.png",
      description:
        "Professional MERN-based Attendance Management System with role-based access for Super Admin, Admin, and Employees. Features include JWT authentication, live selfie attendance, GPS location tracking, admin verification, attendance rectification, Excel export, notifications, and secure MongoDB storage",
      tech: [
        "MERN Stack",
        "Tailwind",
        "Helmet",
        "Multer",
        "Node-cron",
        "Responsive UI",
        "RBAC",
        "JWT-based authentication and authorization",
        "Web Media API",
      ],
      liveLink: "https://attendance-management-system-client-tttw.onrender.com/login",
      githubLink: "https://github.com/Ranjay6126/Attendance-Management-System",
      date: "Nov 25 - Mar 26",
    },
    {
      title: "Quick Chat & Call App",
      img: "/images/chat.png",
      description:
        "Quick Chat & call WebApplication is a real-time chat application built using the MERN stack and Socket.io. It allows users to messaging application for private text, image, and audio conversations. It pairs a responsive React i. The app includes secure user authentication, chat rooms, and responsive UI for seamless use across devices.",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Web Socket.io",
        "WebRTC",
        "Middleware",
        "Route API",
        "Axios",
        "CORS",
        "Cloudinary",
        "Tailwind CSS",
        "Bcrypt js",
      ],
      liveLink: "https://quick-chat-call-application.vercel.app/login",
      githubLink: "https://github.com/Ranjay6126/Quick-Chat",
      date: "June 25 - Aug 25",
    },
    {
      title: "Book Store System",
      img: "/images/Books.png",
      description:
        "A full-stack bookstore application that lets users browse, search, add and manage books through a clean and responsive interface. Built with the MERN stack, the project focuses on efficient data handling, modern UI design and smooth CRUD operations.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "CRUD", "Moder UI", "Toast", "Html", "Tailwind css", "Lazy Loading", "throttling", "JavaScript"],
      liveLink: "https://book-store-project-tuec.vercel.app/",
      githubLink: "https://github.com/Ranjay6126/Book-Store-Project-",
      date: "Sep 24 - Dec 25",
    },
    {
      title: "URL Shortener",
      img: "/images/url.png",
      description:
        "A full-stack URL Shortener built with the MERN stack following the MVC architecture. Users can register and log in using JWT authentication, create and manage short links, and track basic usage. The backend uses Node.js, Express, MongoDB, and JWT, while the frontend is built with React for a fast, responsive UI.",
      tech: [
        "MVC",
        "EJS",
        "JWT",
        "bcrypt",
        "REST API",
        "React Router",
        "Authentication",
        "Authorization",
        "URL Shortening",
        "Click Tracking",
        "Responsive UI",
        "Git",
        "GitHub",
      ],
      liveLink: "https://url-shortener-frontend-eva1.onrender.com/signup",
      githubLink: "https://github.com/Ranjay6126/URL-SHORTENER",
      date: "Mar 24 - May 24",
    },
    {
      title: "Food-Order-App",
      img: "/images/food.png",
      description:
        "Developed a beautiful and fully responsive food-ordering web application using HTML5, CSS3, and JavaScript (ES6+). Implemented dynamic food cards, food categories, search and filtering, an interactive slider, and a complete shopping cart system with add, remove, quantity management, and automatic total-price calculation. Used DOM manipulation, event handling, and Local Storage to create an interactive experience and persist cart data across page refreshes. Designed the interface with CSS Flexbox and Grid for a seamless experience across mobile, tablet, and desktop devices.",
      tech: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "DOM Manipulation",
        "Event Handling",
        "Local Storage",
        "Flexbox",
        "CSS Grid",
        "Responsive Design",
        "Dynamic Rendering",
      ],
      liveLink: "https://food-delivery-app-gilt-delta.vercel.app/",
      githubLink: "https://github.com/Ranjay6126/Food-Delivery-App",
      date: "Apr 23",
    },
    {
      title: "Facebook Clone",
      img: "/images/FaceBook clone.png",
      description:
        "Developed a fully responsive Facebook-inspired social media platform using the MERN stack (MongoDB, Express.js, React.js, Node.js) with modern social networking and real-time communication features. Implemented JWT authentication, complete CRUD operations, posts, likes, comments, shares, follow/friend requests, reels, media uploads, saved memories, notifications, and a shopping section. Integrated Socket.IO/WebSockets for real-time messaging and notifications and WebRTC for real-time audio and video calling. Designed a responsive UI closely inspired by Facebook for seamless experience across desktop, tablet, and mobile devices.",
      tech: [
        "MERN stack",
        "Redux Toolkit",
        "CRUD Operations",
        "Context API",
        "RESTful APIs",
        "Socket.IO / WebSockets",
        "WebRTC",
        "JWT",
        "bcrypt",
        "Mongoose",
        "Tailwind CSS",
      ],
      liveLink: "https://github.com/Ranjay6126/FaceBook-clone",
      githubLink: "https://github.com/Ranjay6126/FaceBook-clone",
      date: "Feb 25",
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
  codingProfiles: [
    {
      platform: "LeetCode",
      link: "https://leetcode.com/u/Ranjay_201/",
      iconKey: "SiLeetcode",
      desc: "Solved 300+ DSA problems",
      color: "from-orange-500 to-yellow-500"
    },
    {
      platform: "GeeksforGeeks",
      link: "https://www.geeksforgeeks.org/profile/panditrageon?tab=activity",
      iconKey: "SiGeeksforgeeks",
      desc: "Active problem solver",
      color: "from-green-600 to-green-400"
    },
    {
      platform: "HackerRank",
      link: "https://www.hackerrank.com/profile/panditranjay33",
      iconKey: "SiHackerrank",
      desc: "Competitive programming",
      color: "from-green-500 to-emerald-400"
    }
  ],
  education: [
    {
      title: "B.Tech in Computer Science & Engineering",
      institution: "Lovely Professional University, Punjab",
      duration: "Aug 2021 – May 2025",
      grade: "CGPA: 6.7",
      points: [
        "I learned C++, Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP), JavaScript and full stack software engineering using React.js, Node.js, REST APIs, Express.js, MongoDB, and server-side technologies like MySQL and Nginx, along with more advanced security features such as JWT, GraphQL, and AWS (Amazon Web Services).",
        "I built developing a deeper interest in Operating Systems, DBMS (Database Management System), Computer Networks, Cloud Computing, Cyber Security, and Software Development Life Cycle (SDLC).",
        "I began reading and understanding network security, basic ethical hacking, cryptography, secure coding, vulnerability assessment and web application security based on the OWASP Top 10 and OSINT.",
        "I gained hands-on experience using tools like Wireshark, Nmap, Metasploit, Recon-ng, Burp Suite, Nessus, Nikto, Kali Linux, John the Ripper, Hashcat, Autopsy, Splunk, and Snort for penetration testing and digital forensic analysis with tools for network security, vulnerability assessment, and security monitoring.",
      ],
    },
    {
      title: "National Examinations Board (XI) & (XII)",
      institution: "Hetauda School of Management",
      duration: "Apr 2018 – Mar 2020",
      grade: "CGPA: 7.1",
      points: [
        "I learned about C programming, logic gates, HTML, CSS, Java Script, networking basics, and software development concepts.",
        "I developed strong understanding of Maths, Physics, Chemistry, and English which helped me focus on the technical aspects and formalities of communication.",
      ],
    },
    {
      title: "Secondary Education Examination (X)",
      institution: "Shree Adhunik Rastriya Secondary School",
      duration: "Apr 2017 – Mar 2018",
      grade: "CGPA: 8.12",
      points: [
        "I understood about computer fundamentals, networking basics, and some MS Office tools along with a little introduction to coding and Qbasic and Paint.",
        "I finished my basic education with a rudimentary understanding of all core subjects (English, Science, Mathematics, Social Studies), and Computer Basics.",
      ],
    },
  ],
};

const seedMyData = async () => {
  const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/portfolio";

  try {
    await mongoose.connect(uri);
    await Portfolio.deleteMany({});
    await Portfolio.create(myData);
    console.log("Portfolio database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Seed error:", error.message);
    process.exit(1);
  }
};

const isDirectRun = process.argv[1]?.includes("MyData.js");
if (isDirectRun) {
  seedMyData();
}



