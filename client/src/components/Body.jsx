import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Body({ profileImage }) {
  const imageSrc = profileImage || "/images/Ranjay_boys.png";
  const [rgbBorderRuns, setRgbBorderRuns] = useState([]);
  const nextRgbBorderRun = useRef(0);
  const rgbBorderTimers = useRef([]);

  useEffect(() => {
    const startRgbBorderRun = () => {
      const runId = nextRgbBorderRun.current++;
      setRgbBorderRuns((runs) => [...runs, runId]);

      const removalTimer = window.setTimeout(() => {
        setRgbBorderRuns((runs) => runs.filter((id) => id !== runId));
        rgbBorderTimers.current = rgbBorderTimers.current.filter((timer) => timer !== removalTimer);
      }, 7_000);
      rgbBorderTimers.current.push(removalTimer);
    };

    startRgbBorderRun();
    const interval = window.setInterval(startRgbBorderRun, 5_000);
    return () => {
      window.clearInterval(interval);
      rgbBorderTimers.current.forEach((timer) => window.clearTimeout(timer));
      rgbBorderTimers.current = [];
      setRgbBorderRuns([]);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative group"
    >
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="relative z-10 flex items-center justify-center"
      >
        <div className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px] lg:w-[230px] lg:h-[230px] relative flex items-center justify-center">
          {rgbBorderRuns.map((runId) => (
            <span
              key={runId}
              aria-hidden="true"
              className="profile-image-rgb-border pointer-events-none absolute inset-0 z-20 rounded-full"
            />
          ))}
          <div className="profile-image-ring w-full h-full rounded-full overflow-hidden border border-white/20 relative z-10 bg-white shadow-sm shadow-black/10">
            <img
              src={imageSrc}
              alt="Profile"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </motion.div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-transparent rounded-full -z-10" />
    </motion.div>
  );
}
