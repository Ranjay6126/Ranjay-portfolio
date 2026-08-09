import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaCss3,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaLinux,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiPostman,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const skillIcons = [
  { name: "HTML", Icon: FaHtml5, color: "#f97316", x: 0, y: -180, rotate: -18 },
  { name: "CSS", Icon: FaCss3, color: "#2563eb", x: 68, y: -166, rotate: -8 },
  { name: "JavaScript", Icon: FaJs, color: "#facc15", x: 128, y: -128, rotate: 10 },
  { name: "React", Icon: FaReact, color: "#06b6d4", x: 166, y: -68, rotate: 16 },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#38bdf8", x: 180, y: 0, rotate: 8 },
  { name: "Node.js", Icon: FaNodeJs, color: "#16a34a", x: 166, y: 68, rotate: 18 },
  { name: "Express", Icon: SiExpress, color: "#e2e8f0", x: 128, y: 128, rotate: 10 },
  { name: "MongoDB", Icon: SiMongodb, color: "#22c55e", x: 68, y: 166, rotate: 4 },
  { name: "Postman", Icon: SiPostman, color: "#f97316", x: 0, y: 180, rotate: -6 },
  { name: "Docker", Icon: FaDocker, color: "#0ea5e9", x: -68, y: 166, rotate: -12 },
  { name: "Git", Icon: FaGitAlt, color: "#f97316", x: -128, y: 128, rotate: -16 },
  { name: "GitHub", Icon: FaGithub, color: "#f8fafc", x: -166, y: 68, rotate: 0 },
  { name: "Python", Icon: FaPython, color: "#60a5fa", x: -180, y: 0, rotate: 7 },
  { name: "Java", Icon: FaJava, color: "#fb923c", x: -166, y: -68, rotate: 9 },
  { name: "TypeScript", Icon: SiTypescript, color: "#3b82f6", x: -128, y: -128, rotate: -10 },
  { name: "Linux", Icon: FaLinux, color: "#eab308", x: -68, y: -166, rotate: -4 },
];

const ICON_ANIMATION_DURATION = 2.6;
const ICON_INITIAL_DELAY = 0.06;
const ICON_STAGGER_DELAY = 0;
const LOADING_DURATION = (ICON_ANIMATION_DURATION + ICON_INITIAL_DELAY + (skillIcons.length - 1) * ICON_STAGGER_DELAY) * 1000;

export default function Loading({ onComplete }) {
  const [visible, setVisible] = useState(true);

  const handleCircleComplete = () => {
    setVisible(false);
    onComplete?.();
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_42%),radial-gradient(circle_at_bottom,_rgba(34,211,238,0.14),_transparent_42%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative h-full w-full">
        <div className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 scale-[0.72] sm:scale-100">
          <div className="absolute left-1/2 top-1/2 z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border border-white/20 bg-white/10 shadow-[0_12px_28px_rgba(0,0,0,0.24)] sm:h-96 sm:w-96 lg:h-[calc(24rem-2.5cm)] lg:w-[calc(24rem-2.5cm)]">
            <span
              aria-hidden="true"
              className="profile-image-rgb-border pointer-events-none absolute inset-0 z-20 rounded-full"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: ICON_INITIAL_DELAY }}
              src="/images/boy.png"
              alt="Ranjay"
              className="h-full w-full object-cover"
            />
          </div>

          {skillIcons.map((skill, index) => {
            const Icon = skill.Icon;

            return (
              <div
                key={skill.name}
                className="absolute left-1/2 top-1/2 z-20 h-12 w-12 -translate-x-1/2 -translate-y-1/2 sm:h-14 sm:w-14"
              >
                <motion.div
                initial={{ opacity: 0, x: 0, y: 0, scale: 0.18, rotate: 0 }}
                animate={{
                  opacity: [0, 0, 1],
                  x: [0, 0, skill.x],
                  y: [0, 0, skill.y],
                  scale: [0.18, 0.22, 1],
                  rotate: [0, 0, skill.rotate],
                }}
                transition={{
                  duration: ICON_ANIMATION_DURATION,
                  times: [0, 0.02, 1],
                  ease: [0.22, 1, 0.36, 1],
                  delay: ICON_INITIAL_DELAY + index * ICON_STAGGER_DELAY,
                }}
                onAnimationComplete={index === skillIcons.length - 1 ? handleCircleComplete : undefined}
                className="pointer-events-none flex h-full w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-[0_12px_28px_rgba(0,0,0,0.24)] backdrop-blur-xl"
                style={{ transformOrigin: "center center" }}
              >
                <Icon className="text-[1.45rem] sm:text-[1.65rem]" style={{ color: skill.color }} />
              </motion.div>
              </div>
            );
          })}
        </div>


        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: [0, 1, 1, 1], y: [14, 0, 0, 0] }}
          transition={{ duration: LOADING_DURATION / 1000, times: [0, 0.08, 0.99, 1], ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-1/2 z-40 w-max text-center text-sm font-semibold tracking-[0.2em] text-white"
          style={{ left: "calc(50% - 3cm)", marginTop: "6.5cm" }}
        >
          Initializing Ranjay Portfolio...
        </motion.p>
      </div>
    </div>
  );
}
