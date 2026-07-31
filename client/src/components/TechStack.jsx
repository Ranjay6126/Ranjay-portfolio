import {
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGithub,
  FaGitAlt,
  FaDocker,
  FaCss3,
  FaAws,
  FaLinux,
  FaMicrochip,
  FaNetworkWired,
  FaCode,
  FaKey,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiPostman,
  SiRedux,
  SiTailwindcss,
  SiReactrouter,
  SiCplusplus,
  SiTypescript,
  SiWireshark,
  SiMetasploit,
  SiKalilinux,
  SiBurpsuite,
  SiGraphql,
} from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { PiFigmaLogoFill } from "react-icons/pi";
import { GrMysql, GrDatabase } from "react-icons/gr";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { usePortfolio } from "../hooks/usePortfolio";
import SectionIcon from "./SectionIcon";
import { SECTION_EMOJIS } from "../constants/navIcons";
import { useTheme } from "../context/ThemeContext";

const JwtTokenIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.8" opacity="0.7" />
    <path
      d="M7.1 9.5 12 6.7l4.9 2.8v5.6L12 17.9l-4.9-2.8V9.5Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      opacity="0.9"
    />
    <circle cx="12" cy="6.7" r="1.05" fill="currentColor" />
    <circle cx="16.9" cy="9.5" r="1.05" fill="currentColor" />
    <circle cx="16.9" cy="15.1" r="1.05" fill="currentColor" />
    <circle cx="12" cy="17.9" r="1.05" fill="currentColor" />
    <circle cx="7.1" cy="15.1" r="1.05" fill="currentColor" />
    <circle cx="7.1" cy="9.5" r="1.05" fill="currentColor" />
  </svg>
);

const ToolNmap = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2.2 12s3.6-6.8 9.8-6.8S21.8 12 21.8 12s-3.6 6.8-9.8 6.8S2.2 12 2.2 12Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="2.6" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="1.1" fill="currentColor" />
    <path
      d="M4.6 12c2.1-2.9 4.7-4.3 7.4-4.3 2.7 0 5.3 1.4 7.4 4.3"
      stroke="currentColor"
      strokeWidth="1.8"
      opacity="0.32"
      strokeLinecap="round"
    />
    <path d="M12 9.2v2.1l1.6.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.55" />
  </svg>
);

const ToolNessus = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 3.2 19 6.9v6.2c0 4.2-2.7 7.2-7 8.7-4.3-1.5-7-4.5-7-8.7V6.9l7-3.7Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path d="M9 16V8l6 8V8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ToolNikto = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="8.8" stroke="currentColor" strokeWidth="1.8" />
    <path d="M9 16V8h1.9l4.1 5.7V8H17v8h-1.9L11 10.3V16H9Z" fill="currentColor" opacity="0.84" />
    <path d="M12 6.2v1.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.4" />
    <path d="M12 16v1.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.4" />
  </svg>
);

const ToolJohnTheRipper = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3.2a8.8 8.8 0 1 0 0 17.6 8.8 8.8 0 0 0 0-17.6Z" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M8.2 12.2c0-2.1 1.7-3.8 3.8-3.8s3.8 1.7 3.8 3.8v2.2c0 1.5-1.2 2.7-2.7 2.7h-2.2c-1.5 0-2.7-1.2-2.7-2.7v-2.2Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      opacity="0.95"
    />
    <circle cx="12" cy="13.1" r="1.05" fill="currentColor" opacity="0.9" />
    <path d="M12 14.2v1.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.55" />
  </svg>
);

const ToolHashcat = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.4 9.5 5 7.4V13c0 3.4 2.8 6.1 6.2 6.1h1.6c3.4 0 6.2-2.7 6.2-6.1V7.4l-1.4 2.1-1.8-2.1-1.6 2-1.6-2-1.8 2-1.8-2Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path d="M8.5 9.6 7 7.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.55" />
    <path d="M15.5 9.6 17 7.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.55" />
    <circle cx="10.2" cy="12.2" r="0.95" fill="currentColor" opacity="0.9" />
    <circle cx="13.8" cy="12.2" r="0.95" fill="currentColor" opacity="0.9" />
    <path d="M10.7 15.1c.7.8 1.9.8 2.6 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.65" />
  </svg>
);

const ToolAutopsy = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.6 4.8a6.8 6.8 0 1 0 0 13.6 6.8 6.8 0 0 0 0-13.6Z" stroke="currentColor" strokeWidth="1.8" />
    <path d="M15.8 15.8 20 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M8.3 15 10.6 8.1 12.9 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 12.2h3.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.55" />
    <path d="M10.6 8.1 13.1 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.25" />
  </svg>
);

const iconMap = {
  FaHtml5: FaHtml5,
  FaCss3: FaCss3,
  FaJs: FaJs,
  FaReact: FaReact,
  FaNodeJs: FaNodeJs,
  FaPython: FaPython,
  FaJava: FaJava,
  FaGithub: FaGithub,
  FaGitAlt: FaGitAlt,
  FaDocker: FaDocker,
  FaAws: FaAws,
  FaLinux: FaLinux,
  FaMicrochip: FaMicrochip,
  FaNetworkWired: FaNetworkWired,
  FaCode: FaCode,
  FaKey: FaKey,
  SiMongodb: SiMongodb,
  SiExpress: SiExpress,
  SiPostman: SiPostman,
  SiRedux: SiRedux,
  SiTailwindcss: SiTailwindcss,
  SiReactrouter: SiReactrouter,
  SiCplusplus: SiCplusplus,
  SiTypescript: SiTypescript,
  SiWireshark: SiWireshark,
  SiMetasploit: SiMetasploit,
  SiKalilinux: SiKalilinux,
  SiBurpsuite: SiBurpsuite,
  SiJsonwebtokens: JwtTokenIcon,
  SiGraphql: SiGraphql,
  VscVscodeInsiders: VscVscodeInsiders,
  PiFigmaLogoFill: PiFigmaLogoFill,
  GrMysql: GrMysql,
  GrDatabase: GrDatabase,
  ToolWireshark: SiWireshark,
  ToolNmap: ToolNmap,
  ToolMetasploit: SiMetasploit,
  ToolBurpSuite: SiBurpsuite,
  ToolNessus: ToolNessus,
  ToolNikto: ToolNikto,
  ToolKaliLinux: SiKalilinux,
  ToolJohnTheRipper: ToolJohnTheRipper,
  ToolHashcat: ToolHashcat,
  ToolAutopsy: ToolAutopsy,
};

const IconRenderer = ({ iconKey, title, isLightMode }) => {
  const IconComponent = iconMap[iconKey];
  if (!IconComponent) return null;

  const getColor = (key) => {
    const colorMap = {
      FaReact: "#20d9ff",
      SiExpress: isLightMode ? "#0f172a" : "#e2e8f0",
      FaNodeJs: "#3c873a",
      SiMongodb: "#4db33d",
      FaHtml5: "#f75403",
      FaCss3: "#264de4",
      FaJs: "#f4e11e",
      SiTailwindcss: "#38BDF8",
      SiReactrouter: "#CA4245",
      SiRedux: "#764ABC",
      SiCplusplus: "#0c4a86",
      FaJava: "#f89820",
      FaPython: "#3776AB",
      SiTypescript: "#3178c6",
      GrMysql: "#00758F",
      SiJsonwebtokens: "#22c55e",
      SiGraphql: "#e535ab",
      FaGitAlt: "#f05032",
      FaGithub: isLightMode ? "#0f172a" : "#ffffff",
      FaDocker: "#2496ED",
      VscVscodeInsiders: "#3e9dd7",
      SiPostman: "#f75403",
      PiFigmaLogoFill: "#8a1bfc",
      GrDatabase: "#00758F",
      FaMicrochip: "#7a81ff",
      FaNetworkWired: "#00758F",
      FaAws: "#ff9900",
      FaLinux: "#fcc624",
      FaCode: "#61DAFB",
      ToolNmap: "#f97316",
      ToolWireshark: "#60a5fa",
      SiWireshark: "#60a5fa",
      ToolMetasploit: "#c084fc",
      SiMetasploit: "#c084fc",
      ToolBurpSuite: "#ef4444",
      SiBurpsuite: "#ef4444",
      ToolNessus: "#22c55e",
      ToolNikto: "#f43f5e",
      ToolKaliLinux: "#38bdf8",
      SiKalilinux: "#38bdf8",
      ToolJohnTheRipper: "#fbbf24",
      ToolHashcat: "#a3a3a3",
      ToolAutopsy: "#e879f9",
    };
    return colorMap[key] || "#ffffff";
  };

  return (
    <motion.div
      whileHover={{ rotate: [0, -6, 6, 0], scale: 1.04, transition: { duration: 0.35 } }}
      className="flex flex-col items-center gap-1.5 sm:gap-2 min-w-[64px] sm:min-w-[100px] md:min-w-[110px]"
    >
      <div className="p-2 sm:p-3 rounded-xl bg-black/30 border border-white/10">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 8, 0] }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
        >
          <IconComponent className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: getColor(iconKey) }} />
        </motion.div>
      </div>
      <span
        className={`text-[11px] sm:text-xs font-medium opacity-80 whitespace-nowrap ${
          isLightMode ? "text-slate-900" : "text-white"
        }`}
      >
        {title}
      </span>
    </motion.div>
  );
};

const Marquee = ({ techs, direction = "left", isLightMode, duration = 10 }) => {
  const combinedTechs = [...techs, ...techs];

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex w-max gap-4 sm:gap-6 md:gap-8"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration,
            ease: "linear",
          },
        }}
      >
        {combinedTechs.map((tech, i) => (
          <IconRenderer
            key={`${tech.title}-${i}`}
            iconKey={tech.iconKey}
            title={tech.title}
            isLightMode={isLightMode}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default function TechStack() {
  const { portfolio } = usePortfolio();
  const { theme } = useTheme();
  const isLightMode = theme === "light";
  const [leftCategoryIndex, setLeftCategoryIndex] = useState(0);
  const [rightCategoryIndex, setRightCategoryIndex] = useState(0);

  const leftCategories = portfolio?.leftSkillCategories || [];
  const rightCategories = portfolio?.rightSkillCategories || [];

  useEffect(() => {
    if (leftCategories.length > 0) {
      const interval = setInterval(() => {
        setLeftCategoryIndex((prev) => (prev + 1) % leftCategories.length);
      }, 15000);
      return () => clearInterval(interval);
    }
  }, [leftCategories.length]);

  useEffect(() => {
    if (rightCategories.length > 0) {
      const interval = setInterval(() => {
        setRightCategoryIndex((prev) => (prev + 1) % rightCategories.length);
      }, 15000);
      return () => clearInterval(interval);
    }
  }, [rightCategories.length]);

  const getMarqueeDuration = (categoryTitle) => {
    if (categoryTitle === "Tools") return 16;
    return 10;
  };

  return (
    <section id="skills" className="flex py-2 px-4 sm:px-6 sm:py-3 md:py-4 flex-col items-center relative overflow-hidden">
      <div className="absolute top-20 left-[-10%] w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-[-10%] w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="container mx-auto max-w-6xl md:max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4 sm:mb-6 md:mb-7"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <SectionIcon emoji={SECTION_EMOJIS.skills} />
            <span
              className={`section-title-text bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 sm:after:-bottom-1.5 after:h-[2px] after:w-14 sm:after:w-20 md:after:w-24 after:rounded-full ${
                isLightMode ? "after:bg-black/35" : "after:bg-white/30"
              }`}
            >
              Technical Skills
            </span>
            <SectionIcon emoji={SECTION_EMOJIS.skills} />
          </h2>
          <p className="text-white max-w-4xl mx-auto text-center text-sm sm:text-base md:text-lg px-2 leading-7">
            The tools, technologies, and frameworks I use to bring ideas to life by building secure, scalable, and high-performance applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:gap-6">
          {/* Left Rectangle */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-3 sm:gap-4"
          >
            <div className="flex items-center justify-center gap-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`left-${leftCategoryIndex}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-indigo-500/20 border border-indigo-500/30"
                >
                  <span className="text-xl sm:text-2xl">{leftCategories[leftCategoryIndex]?.icon}</span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">{leftCategories[leftCategoryIndex]?.title}</h3>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="portfolio-card bg-white/5 backdrop-blur-xl border border-white/10 rounded-tl-[2.5rem] sm:rounded-tl-[3rem] rounded-br-[2.5rem] sm:rounded-br-[3rem] p-2 sm:p-3 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`left-tech-${leftCategoryIndex}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <Marquee
                    techs={leftCategories[leftCategoryIndex]?.tech || []}
                    direction="left"
                    isLightMode={isLightMode}
                    duration={getMarqueeDuration(leftCategories[leftCategoryIndex]?.title)}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right Rectangle */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-3 sm:gap-4"
          >
            <div className="flex items-center justify-center gap-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`right-${rightCategoryIndex}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-purple-500/20 border border-purple-500/30"
                >
                  <span className="text-xl sm:text-2xl">{rightCategories[rightCategoryIndex]?.icon}</span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">{rightCategories[rightCategoryIndex]?.title}</h3>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="portfolio-card bg-white/5 backdrop-blur-xl border border-white/10 rounded-tl-[2.5rem] sm:rounded-tl-[3rem] rounded-br-[2.5rem] sm:rounded-br-[3rem] p-2 sm:p-3 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`right-tech-${rightCategoryIndex}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <Marquee
                    techs={rightCategories[rightCategoryIndex]?.tech || []}
                    direction="right"
                    isLightMode={isLightMode}
                    duration={getMarqueeDuration(rightCategories[rightCategoryIndex]?.title)}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
