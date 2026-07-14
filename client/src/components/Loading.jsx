import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Dot = ({ delay, angle, radius }) => {
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <motion.div
      className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500"
      style={{
        left: "50%",
        top: "50%",
        marginLeft: "-6px",
        marginTop: "-6px",
        transform: `translate(${x}px, ${y}px)`,
      }}
      animate={{
        scale: [1, 1.4, 1],
      }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  );
};

export default function Loading({ onComplete }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onComplete?.();
    }, 300);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const numDots = 12;
  const radius = 60;

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0F0F23]">
      <div className="relative w-32 h-32 mb-8">
        {Array.from({ length: numDots }).map((_, index) => {
          const angle = (index / numDots) * Math.PI * 2;
          const delay = index * (1.2 / numDots);
          return (
            <Dot key={index} delay={delay} angle={angle} radius={radius} />
          );
        })}
      </div>

      <motion.h1
        className="text-2xl font-bold text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        Loading...
      </motion.h1>
    </div>
  );
}
