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

export default function CodingProfiles({ profiles }) {
  const profileList = profiles?.length ? profiles : platformData;
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 xl:gap-12 w-full items-center"
        >
          {profileList.map((profile, index) => (
            <motion.a
              key={index}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group mx-auto w-full max-w-xs lg:max-w-sm"
            >
              {/* Triangular Card */}
              <div 
                className="relative w-full aspect-[1/1] flex items-center justify-center"
              >
                {/* Background Triangle with smooth rounded corners */}
                <div 
                  className="absolute inset-0"
                  style={{
                    clipPath: 'path("M50 4 C30 10 10 30 8 50 C6 70 25 88 50 96 C75 88 94 70 92 50 C90 30 70 10 50 4 Z")',
                    backgroundColor: theme === 'dark' ? '#12121a' : '#f8fafc',
                    border: `2px solid ${theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(59,130,246,0.2)'}`,
                    boxShadow: `0 20px 40px rgba(0,0,0,0.3), 0 0 40px ${profile.color}22`,
                  }}
                />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center gap-5 px-6 pt-16 pb-10 text-center">
                  {/* Icon Circle */}
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      backgroundColor: theme === 'dark' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.9)',
                      boxShadow: `0 0 30px ${profile.color}55`,
                    }}
                  >
                    <profile.icon
                      className="text-4xl transition-all duration-300"
                      style={{ color: profile.color }}
                    />
                  </div>

                  {/* Platform Name */}
                  <h3 className="text-2xl font-extrabold" style={{ color: theme === 'dark' ? '#ffffff' : '#0f172a' }}>
                    {profile.platform}
                  </h3>

                  {/* Description */}
                  <p className="text-sm font-medium" style={{ color: theme === 'dark' ? '#94a3b8' : '#475569' }}>
                    {profile.desc}
                  </p>

                  {/* View Profile Link */}
                  <div className="flex items-center gap-2 mt-2 font-semibold transition-all duration-300" style={{ color: theme === 'dark' ? '#e2e8f0' : '#334155' }}>
                    <span>View Profile</span>
                    <FaExternalLinkAlt className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
