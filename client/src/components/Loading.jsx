import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaBug,
  FaCode,
  FaDocker,
  FaFileCode,
  FaGitAlt,
  FaGithub,
  FaHashtag,
  FaKey,
  FaLinux,
  FaLock,
  FaNetworkWired,
  FaPalette,
  FaSearch,
  FaTerminal,
  FaWifi,
} from "react-icons/fa";
import {
  SiFigma,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiPostman,
  SiReact,
  SiWireshark,
} from "react-icons/si";

const tools = [
  { name: "Nikto", icon: <FaBug />, x: -110, y: -90 },
  { name: "Kali Linux", icon: <FaLinux />, x: -140, y: 10 },
  { name: "John the Ripper", icon: <FaKey />, x: -90, y: 110 },
  { name: "Hashcat", icon: <FaHashtag />, x: -20, y: -140 },
  { name: "Autopsy", icon: <FaSearch />, x: 80, y: -120 },
  { name: "Git", icon: <FaGitAlt />, x: 140, y: -25 },
  { name: "GitHub", icon: <SiGithub />, x: 110, y: 95 },
  { name: "Docker", icon: <FaDocker />, x: 30, y: 140 },
  { name: "VS Code", icon: <FaCode />, x: -95, y: -20 },
  { name: "Postman", icon: <SiPostman />, x: 95, y: -70 },
  { name: "Figma", icon: <SiFigma />, x: 140, y: 55 },
  { name: "Wireshark", icon: <SiWireshark />, x: -130, y: 90 },
  { name: "Nmap", icon: <FaNetworkWired />, x: 90, y: 120 },
  { name: "Metasploit", icon: <FaBug />, x: -45, y: 150 },
  { name: "HTML", icon: <SiHtml5 />, x: 125, y: -100 },
  { name: "CSS", icon: <FaFileCode />, x: 60, y: -150 },
  { name: "JavaScript", icon: <SiJavascript />, x: -70, y: -130 },
  { name: "React", icon: <SiReact />, x: 150, y: 120 },
];

export default function Loading({ onComplete }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(false);
      onComplete?.();
    }, 2200);

    return () => window.clearTimeout(timer);
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center overflow-hidden bg-[#050816] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_45%),radial-gradient(circle_at_bottom,_rgba(34,211,238,0.18),_transparent_45%)]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
        animate={{ opacity: 1, scale: [0.7, 1.08, 1], rotate: [0, 0, 0] }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex h-36 w-36 items-center justify-center rounded-[1.6rem] border border-cyan-400/40 bg-white/10 shadow-[0_0_50px_rgba(34,211,238,0.2)] backdrop-blur-xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: [0, 1, 1], scale: [0.7, 1.05, 1] }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex h-24 w-24 items-center justify-center rounded-[1.1rem] border border-white/15 bg-slate-950/60"
        >
          <div className="flex flex-col items-center text-cyan-300">
            <FaCode className="text-3xl" />
            <span className="mt-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-cyan-200">
              Build
            </span>
          </div>
        </motion.div>
      </motion.div>

      {tools.map((tool, index) => (
        <motion.div
          key={tool.name}
          initial={{ opacity: 0, x: 0, y: 0, scale: 0.85 }}
          animate={{
            opacity: [0, 1, 0],
            x: tool.x,
            y: tool.y,
            scale: [0.85, 1, 0.8],
          }}
          transition={{
            duration: 1.7,
            ease: "easeOut",
            delay: index * 0.03,
          }}
          className="pointer-events-none absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full border border-white/15 bg-slate-900/80 px-3 py-2 text-xs font-semibold text-slate-100 shadow-lg shadow-black/30 backdrop-blur-md"
        >
          <span className="text-sm text-cyan-300">{tool.icon}</span>
          <span>{tool.name}</span>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center"
      >
        <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Initializing portfolio</p>
      </motion.div>
    </div>
  );
}
