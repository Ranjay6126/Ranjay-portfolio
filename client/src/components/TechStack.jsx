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
  SiJsonwebtokens,
  SiGraphql,
} from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { PiFigmaLogoFill } from "react-icons/pi";
import { GrMysql, GrDatabase } from "react-icons/gr";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { usePortfolio } from "../hooks/usePortfolio";

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
  SiJsonwebtokens: SiJsonwebtokens,
  SiGraphql: SiGraphql,
  VscVscodeInsiders: VscVscodeInsiders,
  PiFigmaLogoFill: PiFigmaLogoFill,
  GrMysql: GrMysql,
  GrDatabase: GrDatabase,
};

const IconRenderer = ({ iconKey, title }) => {
  const IconComponent = iconMap[iconKey];
  if (!IconComponent) return null;

  const getColor = (key) => {
    const colorMap = {
      FaReact: "#20d9ff",
      SiExpress: "#e2e8f0",
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
      SiJsonwebtokens: "#000",
      SiGraphql: "#e535ab",
      FaGitAlt: "#f05032",
      FaGithub: "#ffffff",
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
    };
    return colorMap[key] || "#ffffff";
  };

  return (
    <div className="flex flex-col items-center gap-2 min-w-[100px]">
      <div className="p-3 rounded-xl bg-black/30 border border-white/10">
        <IconComponent className="text-4xl" style={{ color: getColor(iconKey) }} />
      </div>
      <span className="text-xs font-medium text-gray-400">{title}</span>
    </div>
  );
};

const Marquee = ({ techs, direction = "left" }) => {
  const combinedTechs = [...techs, ...techs];

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex gap-8"
        animate={{
          x: direction === "left" ? [0, -1000] : [-1000, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 5,
            ease: "linear",
          },
        }}
      >
        {combinedTechs.map((tech, i) => (
          <IconRenderer key={`${tech.title}-${i}`} iconKey={tech.iconKey} title={tech.title} />
        ))}
      </motion.div>
    </div>
  );
};

export default function TechStack() {
  const { portfolio } = usePortfolio();
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
    <section id="skills" className="min-h-screen flex pt-2 pb-2 flex-col items-center relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent inline-block">
            Technical Skills
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            The tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          {/* Left Rectangle */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center justify-center gap-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`left-${leftCategoryIndex}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/30"
                >
                  <span className="text-2xl">{leftCategories[leftCategoryIndex]?.icon}</span>
                  <h3 className="text-xl font-bold text-indigo-300">{leftCategories[leftCategoryIndex]?.title}</h3>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-tl-[3rem] rounded-br-[3rem] p-3 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`left-tech-${leftCategoryIndex}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <Marquee techs={leftCategories[leftCategoryIndex]?.tech || []} direction="left" />
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
            className="flex flex-col gap-4"
          >
            <div className="flex items-center justify-center gap-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`right-${rightCategoryIndex}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30"
                >
                  <span className="text-2xl">{rightCategories[rightCategoryIndex]?.icon}</span>
                  <h3 className="text-xl font-bold text-purple-300">{rightCategories[rightCategoryIndex]?.title}</h3>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-tl-[3rem] rounded-br-[3rem] p-3 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`right-tech-${rightCategoryIndex}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <Marquee techs={rightCategories[rightCategoryIndex]?.tech || []} direction="right" />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
