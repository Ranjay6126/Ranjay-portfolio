import { motion } from "framer-motion";
import { SiLeetcode, SiGeeksforgeeks, SiHackerrank } from "react-icons/si";
import { useTheme } from "../context/ThemeContext";

// Triangle Card Component (using user-provided code)
function TriangleCard({ icon, title, subtitle, link, color, theme }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-80 h-72 flex flex-col items-center justify-end pb-8 text-center font-sans group cursor-pointer"
    >
      {/* Triangle SVG Background with Rounded Corners */}
      <svg
        className="absolute inset-0 w-full h-full -z-10"
        viewBox="0 0 300 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: `drop-shadow(0 0 12px ${color}20) drop-shadow(0 0 40px ${color}10)`,
        }}
      >
        <path
          d="M 134 24.2 C 142 10.3 158 10.3 166 24.2 L 284.8 230.1 C 292.8 244 282.8 256 266.8 256 L 33.2 256 C 17.2 256 7.2 244 15.2 230.1 Z"
          className="stroke-slate-700/50 group-hover:stroke-slate-500 transition-colors duration-300"
          strokeWidth="2"
          style={{
            fill: theme === 'dark' ? '#12121a' : '#f8fafc',
          }}
        />
      </svg>

      {/* Card Content */}
      <div className="flex flex-col items-center z-10 px-6">
        {/* Glowing Icon Container */}
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mb-4 transition-all duration-300"
          style={{
            backgroundColor: theme === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.9)',
            boxShadow: `0 0 30px ${color}66`,
          }}
        >
          {icon}
        </div>

        {/* Text Details */}
        <h3
          className="text-xl font-bold tracking-wide"
          style={{
            color: theme === 'dark' ? '#ffffff' : '#0f172a',
          }}
        >
          {title}
        </h3>
        <p
          className="text-sm mt-1 mb-4 font-medium"
          style={{
            color: theme === 'dark' ? '#94a3b8' : '#475569',
          }}
        >
          {subtitle}
        </p>

        {/* Link / Button */}
        <div
          className="text-sm font-semibold flex items-center gap-1 transition-colors"
          style={{
            color: theme === 'dark' ? '#e2e8f0' : '#334155',
          }}
        >
          View Profile
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      </div>
    </a>
  );
}

const platformData = [
  {
    platform: "LeetCode",
    link: "https://leetcode.com/u/Ranjay_201/",
    icon: SiLeetcode,
    color: "#FFA116",
    desc: "Solved 300+ Problems"
  },
  {
    platform: "GeeksforGeeks",
    link: "https://www.geeksforgeeks.org/profile/panditrageon?tab=activity",
    icon: SiGeeksforgeeks,
    color: "#00A86B",
    desc: "Active Problem Solver"
  },
  {
    platform: "HackerRank",
    link: "https://www.hackerrank.com/profile/panditranjay33",
    icon: SiHackerrank,
    color: "#2EC866",
    desc: "Competitive Programming"
  }
];

export default function CodingProfiles() {
  const { theme } = useTheme();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="coding"
      className="min-h-[70vh] flex flex-col items-center px-4 sm:px-6 py-10 sm:py-12 relative overflow-hidden pointer-events-auto"
    >
      <div className="max-w-7xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent inline-block">
            Coding Profiles
          </h2>
          <p className={`text-base sm:text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            My problem-solving journey across platforms
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 md:gap-10 xl:gap-12 w-full"
        >
          {platformData.map((profile, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <TriangleCard
                icon={<profile.icon className="text-5xl" style={{ color: profile.color }} />}
                title={profile.platform}
                subtitle={profile.desc}
                link={profile.link}
                color={profile.color}
                theme={theme}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
