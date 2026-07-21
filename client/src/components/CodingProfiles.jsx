import { motion } from "framer-motion";
import { SiLeetcode, SiGeeksforgeeks, SiHackerrank } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

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
      className="min-h-[60vh] flex flex-col items-center px-6 py-10 relative overflow-hidden pointer-events-auto"
    >
      <div className="max-w-7xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent inline-block">
            Coding Profiles
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            My problem-solving journey across platforms
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
        >
          {platformData.map((profile, index) => (
            <motion.a
              key={index}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative cursor-pointer"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl rounded-3xl transition-all duration-500 -z-10"></div>
              
              <div 
                className="relative border rounded-3xl p-6 flex flex-col items-center gap-4 transition-all duration-300"
                style={{
                  backgroundColor: theme === 'dark' ? '#12121a' : 'rgba(255,255,255,0.8)',
                  borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(59,130,246,0.2)'
                }}
              >
                {/* Logo Circle */}
                <div 
                  className="w-24 h-24 rounded-full flex items-center justify-center border transition-all duration-300"
                  style={{ 
                    backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(59,130,246,0.05)',
                    borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(59,130,246,0.2)',
                    boxShadow: `0 0 20px ${profile.color}33`,
                  }}
                >
                  <profile.icon 
                    className="text-5xl transition-all duration-300" 
                    style={{ color: profile.color }}
                  />
                </div>

                {/* Platform Name */}
                <h3 className="text-2xl font-bold" style={{ color: theme === 'dark' ? '#ffffff' : '#0f172a' }}>
                  {profile.platform}
                </h3>

                {/* Description */}
                <p className="text-base font-medium" style={{ color: theme === 'dark' ? '#a0aec0' : '#475569' }}>
                  {profile.desc}
                </p>

                {/* View Profile Link */}
                <div className="flex items-center gap-2 mt-2 font-semibold transition-all duration-300" style={{ color: theme === 'dark' ? '#cbd5e0' : '#334155' }}>
                  <span>View Profile</span>
                  <FaExternalLinkAlt className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
