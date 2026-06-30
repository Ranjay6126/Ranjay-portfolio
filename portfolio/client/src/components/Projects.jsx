import { motion } from "framer-motion";
import { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const DESCRIPTION_LIMIT = 120;

const projects = [
  {
    title: "Taksy",
    img: "/images/taksyImg.34aba66a.jpg",
    description:
      "Developed a real-time chat application using WebSocket technology enabling instant messaging and seamless file sharing between devices on the same local network. Implemented end-to-end encryption to ensure secure and private communication, preventing unauthorized access during transmission. Designed a scalable room-based chat architecture allowing users to create, join, and manage both public and private chat rooms efficiently. Enhanced user interaction by adding advanced messaging features such as message reactions and dynamic message updates including edit and delete functionality.",
    tech: [
      "MERN Stack",
      "WebSocket",
      "Node.js",
      "Express.js",
      "MongoDB",
      "React.js",
      "Lucide-React",
      "Multer",
      "End-to-End Encryption",
    ],
    liveLink: "https://chat-appdev.vercel.app/",
    githubLink: "https://github.com/rajverma04/ChatApp",
    date: "Jan - Feb 26",
  },
  {
    title: "CodeNexus",
    img: "/images/codenexus.143040f6.jpg",
    description:
      "Developed a scalable MERN-based coding platform supporting multiple programming languages with real-time code execution via Judge0 API. Implemented Redis caching to optimize repeated API and database calls, improving backend performance. Built an AI-powered debugging assistant using Google Gemini API to analyze runtime/compiler errors and provide contextual fix suggestions. Integrated the Monaco Editor to deliver a VS Code–like coding experience with syntax highlighting and auto-completion. Implemented secure JWT-based authentication with OTP email verification and optimized performance and technical SEO, achieving Lighthouse scores of 100 in Performance and SEO.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "Monaco Editor",
      "Judge0 API",
      "Google Gemini API",
      "JWT Authentication",
      "Cloudinary",
      "Tailwind CSS",
    ],
    liveLink: "https://codenexusdev.vercel.app/",
    githubLink: "https://github.com/rajverma04/CodeNexus",
    date: "Nov - Dec 25",
  },
  {
    title: "GST-INVOICE GENERATOR",
    img: "/images/gstinvoice.459e8460.jpg",
    description:
      "Developed a responsive GST billing application that enables users to generate GST-compliant invoices with automated CGST, SGST, and IGST calculations. Implemented dynamic item management with real-time invoice creation and auto-calculated totals. Integrated MongoDB for storing shop details and transport IDs with an optimized schema for efficient retrieval. Utilized html2canvas to convert the invoice UI into images and jsPDF to generate and download compressed PDF invoices seamlessly.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Bootstrap", "html2canvas", "jsPDF"],
    liveLink: "https://gstinvoice.vercel.app",
    githubLink: "https://github.com/rajverma04/gstinvoice",
    date: "Jul - Aug 25",
  },
  {
    title: "AI CHATBOT",
    img: "/images/ailearning.8735f36b.jpg",
    description:
      "A personalized AI-powered chatbot designed to assist students with learning and Q&A. Focused on user experience and intelligent interactions.",
    tech: ["Python", "Flask", "NLP"],
    liveLink: "https://ai-personalized-learning.vercel.app/",
    githubLink: "https://github.com/rajverma04/AI_Personalized_Learning",
    date: "Apr 25",
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
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Projects() {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (i) => setExpanded((prev) => ({ ...prev, [i]: !prev[i] }));

  const openInNewTab = (url) => {
    if (url && url !== "#") window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="projects" className="min-h-screen flex py-10 flex-col items-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl w-full px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent inline-block">
            💻 My Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A selection of projects demonstrating full-stack development, API integrations, and practical system design.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, i) => {
            const isLive = project.liveLink && project.liveLink !== "#";
            const hasGithub = project.githubLink && project.githubLink !== "#";

            return (
              <motion.article
                key={i}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-colors duration-300 flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs font-medium text-indigo-300 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                    {project.date}
                  </span>
                </div>

                {project.img && (
                  <div className="mb-4">
                    <img src={project.img} alt={project.title} className="w-full h-auto rounded-2xl object-cover" />
                  </div>
                )}

                <div className="mb-6">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description.length > DESCRIPTION_LIMIT && !expanded[i]
                      ? project.description.slice(0, DESCRIPTION_LIMIT) + "…"
                      : project.description}
                  </p>
                  {project.description.length > DESCRIPTION_LIMIT && (
                    <button
                      onClick={() => toggleExpand(i)}
                      className="mt-1 text-indigo-400 text-xs font-semibold hover:text-indigo-300 transition-colors"
                    >
                      {expanded[i] ? "See less ▲" : "See more ▼"}
                    </button>
                  )}
                </div>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <button
                    onClick={() => hasGithub && openInNewTab(project.githubLink)}
                    disabled={!hasGithub}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      hasGithub
                        ? "bg-white/10 text-white hover:bg-white/20 hover:scale-[1.02] cursor-pointer border border-white/10"
                        : "bg-white/5 text-gray-500 cursor-not-allowed border border-white/5"
                    }`}
                  >
                    <FaGithub className="w-4 h-4" />
                    <span>Source</span>
                  </button>
                  <button
                    onClick={() => isLive && openInNewTab(project.liveLink)}
                    disabled={!isLive}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      isLive
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-[1.02] cursor-pointer"
                        : "bg-white/5 text-gray-500 cursor-not-allowed border border-white/5"
                    }`}
                  >
                    <FaExternalLinkAlt className="w-3 h-3" />
                    <span>Live Demo</span>
                  </button>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
