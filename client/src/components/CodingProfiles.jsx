import { motion } from "framer-motion";
import { SiLeetcode, SiGeeksforgeeks, SiHackerrank } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";

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
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent inline-block">
            Coding Profiles
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
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
              <div className="absolute -inset-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl rounded-3xl transition-all duration-500" />
              
              <div className="relative bg-[#12121a] border border-white/10 rounded-3xl p-6 flex flex-col items-center gap-4 transition-all duration-300 hover:border-white/20">
                {/* Logo Circle */}
                <div 
                  className="w-24 h-24 rounded-full flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-white/10 transition-all duration-300"
                  style={{ 
                    boxShadow: `0 0 20px ${profile.color}22`,
                  }}
                >
                  <profile.icon 
                    className="text-5xl transition-all duration-300" 
                    style={{ color: profile.color }}
                  />
                </div>

                {/* Platform Name */}
                <h3 className="text-2xl font-bold text-white">
                  {profile.platform}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-base font-medium">
                  {profile.desc}
                </p>

                {/* View Profile Link */}
                <div className="flex items-center gap-2 mt-2 text-gray-300 font-semibold group-hover:text-white transition-all duration-300">
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
