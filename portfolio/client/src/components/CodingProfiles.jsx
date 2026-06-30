import { motion } from "framer-motion";
import { SiLeetcode, SiGeeksforgeeks, SiHackerrank, SiCodeforces } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";

const iconMap = {
  SiLeetcode: <SiLeetcode className="text-5xl text-[#FFA116]" />,
  SiGeeksforgeeks: <SiGeeksforgeeks className="text-5xl text-[#00A86B]" />,
  SiCodeforces: <SiCodeforces className="text-5xl text-[#1F8ACB]" />,
  SiHackerrank: <SiHackerrank className="text-5xl text-[#2EC866]" />,
};

export default function CodingProfiles({ profiles = [] }) {
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
      style={{ color: "var(--text-primary)" }}
    >
      <div className="max-w-6xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent inline-block">
            🏆 Coding Profiles
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Showcasing my problem-solving journey across top platforms.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center"
        >
          {profiles.map((profile, index) => (
            <motion.a
              key={index}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative w-full max-w-[350px] cursor-pointer"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${profile.color} rounded-2xl opacity-0 group-hover:opacity-75 blur transition duration-500`} />
              <div
                className="relative h-full border border-white/10 rounded-2xl p-8 flex flex-col items-center gap-6 transition-all duration-300"
                style={{ backgroundColor: "var(--bg-card)" }}
              >
                <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  {iconMap[profile.iconKey]}
                </div>
                <div className="text-center space-y-2">
                  <h3
                    className="text-2xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {profile.platform}
                  </h3>
                  {profile.desc && <p className="text-gray-400 text-sm font-medium">{profile.desc}</p>}
                </div>
                <div
                  className="mt-2 flex items-center gap-2 text-sm font-bold opacity-70 group-hover:opacity-100 transition-opacity"
                  style={{ color: "var(--text-primary)" }}
                >
                  <span>View Profile</span>
                  <FaExternalLinkAlt className="text-xs group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
