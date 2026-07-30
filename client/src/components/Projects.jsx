import { motion } from "framer-motion";
import { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { usePortfolio } from "../hooks/usePortfolio";
import SectionIcon from "./SectionIcon";
import { SECTION_EMOJIS } from "../constants/navIcons";

const DESCRIPTION_LIMIT = 120;

export default function Projects() {
  const [expanded, setExpanded] = useState({});
  const { portfolio } = usePortfolio();

  const toggleExpand = (i) => setExpanded((prev) => ({ ...prev, [i]: !prev[i] }));

  const openInNewTab = (url) => {
    if (url && url !== "#") window.open(url, "_blank", "noopener,noreferrer");
  };

  const projectTitleWithEmoji = (title = "") => {
    const cleanTitle = String(title).trim();
    if (!cleanTitle) return "";
    if (/\p{Extended_Pictographic}$/u.test(cleanTitle)) return cleanTitle;

    const t = cleanTitle.toLowerCase();
    const emoji =
      (t.includes("attendance") && "📍") ||
      (t.includes("chat") && "💬") ||
      (t.includes("book") && "📚") ||
      ((t.includes("url") || t.includes("short")) && "🔗") ||
      (t.includes("food") && "🍔") ||
      (t.includes("amazon") && "🛒") ||
      (t.includes("portfolio") && "🌐") ||
      "🚀";

    return `${cleanTitle} ${emoji}`;
  };

  const actionButtonBase =
    "glass-button flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border";
  const actionButtonEnabled =
    "bg-green-500/10 border-green-500/20 text-green-400 hover:bg-green-500/20 hover:border-green-500/30 hover:text-green-300 hover:scale-[1.02] cursor-pointer";
  const actionButtonEnabledNeutral =
    "bg-white/10 border-white/10 text-white hover:bg-white/20 hover:scale-[1.02] cursor-pointer";
  const actionButtonDisabled = "bg-white/5 text-gray-500 cursor-not-allowed border-white/5";

  const projects = portfolio?.projects || [];

  return (
    <section
      id="projects"
      className="relative flex min-h-0 md:min-h-[80vh] flex-col items-center px-4 pb-8 pt-6 sm:px-6 sm:pt-10 sm:pb-10 md:pt-14 md:pb-14 lg:pt-16 lg:pb-16 overflow-hidden"
    >
      <div className="absolute top-20 left-[-10%] w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-[-10%] w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl md:max-w-7xl w-full relative z-10">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 inline-flex flex-wrap items-baseline justify-center gap-2 sm:gap-3">
            <SectionIcon emoji={SECTION_EMOJIS.projects} />
            <span className="section-title-text bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">My Projects</span>
            <SectionIcon emoji={SECTION_EMOJIS.projects} />
          </h2>
          <p className="text-white max-w-5xl mx-auto text-center text-sm sm:text-base md:text-lg px-2 leading-7">
            A selection of full-stack projects showcasing scalable architecture, secure authentication, API integrations, responsive user interfaces, and practical system design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 md:items-stretch">
          {projects.map((project, i) => {
            const isLive = project.liveLink && project.liveLink !== "#";
            const hasGithub = project.githubLink && project.githubLink !== "#";

            return (
              <motion.article
                key={i}
                initial={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                className="group relative portfolio-card bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-5 transition-colors duration-300 flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-3 gap-2">
                  <h3 className="portfolio-card-title text-base sm:text-lg font-bold text-white transition-colors">
                    {projectTitleWithEmoji(project.title)}
                  </h3>
                  <span className="text-xs font-medium text-indigo-300 bg-indigo-500/10 px-2 sm:px-3 py-1 rounded-full border border-indigo-500/20 whitespace-nowrap">
                    {project.date}
                  </span>
                </div>

                {project.img && (
                  <div className="mb-3">
                    <img src={project.img} alt={project.title} className="w-full h-auto rounded-2xl object-cover" />
                  </div>
                )}

                <div className="mb-4">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description.length > DESCRIPTION_LIMIT && !expanded[i]
                      ? project.description.slice(0, DESCRIPTION_LIMIT) + "…"
                      : project.description}
                  </p>
                  {project.description.length > DESCRIPTION_LIMIT && (
                    <button
                      onClick={() => toggleExpand(i)}
                      className="glass-button mt-2 inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 text-indigo-400 text-xs font-semibold hover:bg-white/10 hover:border-white/20 hover:text-indigo-300 transition-colors"
                    >
                      {expanded[i] ? "See less ▲" : "See more ▼"}
                    </button>
                  )}
                </div>

                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-auto">
                  <button
                    onClick={() => hasGithub && openInNewTab(project.githubLink)}
                    disabled={!hasGithub}
                    className={`${actionButtonBase} ${hasGithub ? actionButtonEnabledNeutral : actionButtonDisabled}`}
                  >
                    <FaGithub className="w-4 h-4" />
                    <span>Source Code</span>
                  </button>
                  <button
                    onClick={() => isLive && openInNewTab(project.liveLink)}
                    disabled={!isLive}
                    className={`${actionButtonBase} ${isLive ? actionButtonEnabled : actionButtonDisabled}`}
                  >
                    <FaExternalLinkAlt className="w-3 h-3" />
                    <span>Live Demo</span>
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
