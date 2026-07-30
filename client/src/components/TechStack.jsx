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
    <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M12 2.9c5.03 0 9.1 4.07 9.1 9.1 0 5.03-4.07 9.1-9.1 9.1-5.03 0-9.1-4.07-9.1-9.1 0-5.03 4.07-9.1 9.1-9.1Z"
      stroke="currentColor"
      strokeWidth="1.8"
      opacity="0.35"
    />
    <path d="M12 8.9V7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
    <path d="M12 17v-1.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
    <path d="M15.5 10.6l1.6-.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
    <path d="M6.9 14.3l1.6-.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
    <path d="M15.5 13.4l1.6.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
    <path d="M6.9 9.7l1.6.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
    <circle cx="12" cy="6.8" r="1.05" fill="currentColor" opacity="0.9" />
    <circle cx="12" cy="17.2" r="1.05" fill="currentColor" opacity="0.9" />
    <circle cx="17.6" cy="9.8" r="1.05" fill="currentColor" opacity="0.9" />
    <circle cx="6.4" cy="14.2" r="1.05" fill="currentColor" opacity="0.9" />
    <circle cx="17.6" cy="14.2" r="1.05" fill="currentColor" opacity="0.9" />
    <circle cx="6.4" cy="9.8" r="1.05" fill="currentColor" opacity="0.9" />
  </svg>
);

const ToolWireshark = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.2 15.2c2.1 0 2.6-1.6 4.7-1.6 2.1 0 2.6 1.6 4.7 1.6 2.1 0 2.6-1.6 4.7-1.6 2.1 0 2.6 1.6 4.8 1.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path
      d="M5.4 12.2c2.3-1.3 4.4-2 6.7-2 3.7 0 5.6 1.7 6.4 3.3"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      opacity="0.55"
    />
    <path
      d="M10.4 12.1c.4-2.2 1.7-5.1 5.6-6.2-.4 2.2-1.6 5.1-5.6 6.2Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path d="M15.8 8.1h2.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.4" />
    <path d="M15.2 6.7l1.8-1.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.35" />
  </svg>
);

const ToolNmap = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3.1a8.9 8.9 0 1 0 0 17.8 8.9 8.9 0 0 0 0-17.8Z" stroke="currentColor" strokeWidth="1.8" />
    <path d="M12 12l5.6-3.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M12 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" fill="currentColor" />
    <path d="M7 16a7.2 7.2 0 0 1 10.2-8" stroke="currentColor" strokeWidth="1.8" opacity="0.45" />
    <path d="M8.1 8.4a6.2 6.2 0 0 1 7.8 0" stroke="currentColor" strokeWidth="1.8" opacity="0.35" strokeLinecap="round" />
  </svg>
);

const ToolMetasploit = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3.2a8.8 8.8 0 1 0 0 17.6 8.8 8.8 0 0 0 0-17.6Z" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M7.8 16V8.2h1.8l2.4 4.1 2.4-4.1h1.8V16h-1.7v-5l-2 3.4h-1l-2-3.4v5H7.8Z"
      fill="currentColor"
      opacity="0.82"
    />
    <path d="M7.2 17.8h9.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.25" />
  </svg>
);

const ToolBurpSuite = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3.3 19 7.4v9.2l-7 4.1-7-4.1V7.4l7-4.1Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path
      d="M10.1 7.9h2.9c1.5 0 2.5.8 2.5 2 0 .9-.5 1.5-1.2 1.8 1 .3 1.6 1.1 1.6 2.1 0 1.4-1.1 2.3-2.8 2.3h-3V7.9Zm2.8 3.2c.7 0 1.1-.3 1.1-.8s-.4-.8-1.1-.8h-1.2v1.6h1.2Zm.2 4.3c.8 0 1.3-.4 1.3-1s-.5-1-1.3-1h-1.4v2h1.4Z"
      fill="currentColor"
      opacity="0.82"
    />
  </svg>
);

const ToolNessus = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3.3 19 7.4v9.2l-7 4.1-7-4.1V7.4l7-4.1Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M9 16V8l6 8V8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ToolNikto = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3.2a8.8 8.8 0 1 0 0 17.6 8.8 8.8 0 0 0 0-17.6Z" stroke="currentColor" strokeWidth="1.8" />
    <path d="M9 16V8l6 8V8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.3 12h9.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.55" />
    <path d="M12 7.5v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.35" />
  </svg>
);

const ToolKaliLinux = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20 7.5c-1.8-1.8-4.2-2.7-6.7-2.7-4 0-7.3 2.3-8.7 6.1-.9 2.5-.7 5.5 1.4 7.6 1.2 1.2 2.7 1.9 4.4 1.9 2.3 0 4.2-1.2 5.2-3"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M9.2 13.4c2.2.4 4.4-.2 6.1-1.6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      opacity="0.55"
    />
    <path d="M15.6 9.3c.9-.1 1.9.2 2.7.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.45" />
    <circle cx="17.9" cy="11.2" r="0.9" fill="currentColor" opacity="0.9" />
  </svg>
);

const ToolJohnTheRipper = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3.2a8.8 8.8 0 1 0 0 17.6 8.8 8.8 0 0 0 0-17.6Z" stroke="currentColor" strokeWidth="1.8" />
    <path d="M9 8.2v7.2c0 .9-.7 1.5-1.6 1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path
      d="M12.2 16V8.2h2.7c1.5 0 2.4.8 2.4 2.1 0 1.2-.8 1.9-1.8 2.2L17.3 16h-2.1l-1.4-2.7h-.9V16h-1.6Z"
      fill="currentColor"
      opacity="0.78"
    />
    <path d="M12.2 11.1h2.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.35" />
  </svg>
);

const ToolHashcat = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 7.1h12v9.8H6V7.1Z" stroke="currentColor" strokeWidth="1.8" />
    <path d="M8.2 6.1v11.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M15.8 6.1v11.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M6.8 10.2h10.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.65" />
    <path d="M6.8 13.8h10.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.45" />
    <path d="M11.2 9.2v5.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.35" />
  </svg>
);

const ToolAutopsy = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.7 4.6a6.9 6.9 0 1 0 0 13.8 6.9 6.9 0 0 0 0-13.8Z" stroke="currentColor" strokeWidth="1.8" />
    <path d="M15.9 15.9 20 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M7.7 12.8 9.1 10l1.6 2.8L12.3 10l1.6 2.8L15.4 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.2 9.1h5.2" stroke="currentColor" strokeWidth="1.8" opacity="0.25" strokeLinecap="round" />
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
  SiWireshark: ToolWireshark,
  SiMetasploit: ToolMetasploit,
  SiKalilinux: ToolKaliLinux,
  SiBurpsuite: ToolBurpSuite,
  SiJsonwebtokens: JwtTokenIcon,
  SiGraphql: SiGraphql,
  VscVscodeInsiders: VscVscodeInsiders,
  PiFigmaLogoFill: PiFigmaLogoFill,
  GrMysql: GrMysql,
  GrDatabase: GrDatabase,
  ToolWireshark: ToolWireshark,
  ToolNmap: ToolNmap,
  ToolMetasploit: ToolMetasploit,
  ToolBurpSuite: ToolBurpSuite,
  ToolNessus: ToolNessus,
  ToolNikto: ToolNikto,
  ToolKaliLinux: ToolKaliLinux,
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
          <IconComponent className="text-3xl sm:text-4xl" style={{ color: getColor(iconKey) }} />
        </motion.div>
      </div>
      <span className="text-[11px] sm:text-xs font-medium text-white opacity-80 whitespace-nowrap">{title}</span>
    </motion.div>
  );
};

const Marquee = ({ techs, direction = "left", isLightMode }) => {
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
            duration: 10,
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

  return (
    <section id="skills" className="flex py-3 px-4 sm:px-6 sm:py-4 md:py-5 flex-col items-center relative overflow-hidden">
      <div className="absolute top-20 left-[-10%] w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-[-10%] w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="container mx-auto max-w-6xl md:max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-8 md:mb-10"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <SectionIcon emoji={SECTION_EMOJIS.skills} />
            <span className="section-title-text bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Technical Skills</span>
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
