import { motion } from "framer-motion";
import { SiLeetcode, SiGeeksforgeeks, SiHackerrank } from "react-icons/si";
import { useTheme } from "../context/ThemeContext";
import SectionIcon from "./SectionIcon";
import { SECTION_EMOJIS } from "../constants/navIcons";

const iconResolver = {
  SiLeetcode,
  SiGeeksforgeeks,
  SiHackerrank,
};

const platformAccents = {
  leetcode: "#FFA116",
  geeksforgeeks: "#00A86B",
  hackerrank: "#2EC866",
};

const profileOrder = {
  geeksforgeeks: 0,
  leetcode: 1,
  hackerrank: 2,
};

function getProfileAccent(platform, storedColor) {
  const normalizedPlatform = platform?.toLowerCase().replace(/\s/g, "");
  return platformAccents[normalizedPlatform] || storedColor || "#38bdf8";
}

function getProfileOrder(platform) {
  const normalizedPlatform = platform?.toLowerCase().replace(/\s/g, "");
  return profileOrder[normalizedPlatform] ?? Number.MAX_SAFE_INTEGER;
}

function TriangleCard({ icon, title, subtitle, link, color, theme }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="coding-profile-card relative w-80 h-72 flex flex-col items-center justify-end pb-8 text-center font-sans group cursor-pointer"
      style={{ "--profile-accent": color }}
    >
      <svg
        className="absolute inset-0 w-full h-full -z-10"
        viewBox="0 0 300 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: `drop-shadow(0 0 10px ${color}40) drop-shadow(0 0 30px ${color}1f)`,
        }}
      >
        <path
          d="M 134 24.2 C 142 10.3 158 10.3 166 24.2 L 284.8 230.1 C 292.8 244 282.8 256 266.8 256 L 33.2 256 C 17.2 256 7.2 244 15.2 230.1 Z"
          className="coding-profile-shape transition-colors duration-300"
          strokeWidth="2"
          style={{
            fill: theme === 'dark' ? '#12121a' : '#f8fafc',
            stroke: theme === 'dark' ? '#cbd5e1' : '#64748b',
            strokeOpacity: theme === 'dark' ? 0.12 : 0.3,
          }}
        />
      </svg>

      <div className="flex flex-col items-center z-10 px-6">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mb-4 transition-all duration-300"
          style={{
            backgroundColor: theme === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.9)',
            border: `1px solid ${color}55`,
            boxShadow: `0 0 14px ${color}55, 0 0 30px ${color}26`,
          }}
        >
          {icon}
        </div>

        <h3
          className="coding-profile-title text-xl font-bold tracking-wide transition-colors duration-300"
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

export default function CodingProfiles({ profiles = [] }) {
  const { theme } = useTheme();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const fallbackProfiles = [
    {
      platform: "GeeksforGeeks",
      link: "https://www.geeksforgeeks.org/profile/panditrageon?tab=activity",
      iconKey: "SiGeeksforgeeks",
      desc: "Active Problem Solver",
      color: "#00A86B",
    },
    {
      platform: "LeetCode",
      link: "https://leetcode.com/u/Ranjay_201/",
      iconKey: "SiLeetcode",
      desc: "Solved 300+ Problems",
      color: "#FFA116",
    },
    {
      platform: "HackerRank",
      link: "https://www.hackerrank.com/profile/panditranjay33",
      iconKey: "SiHackerrank",
      desc: "Competitive Programming",
      color: "#2EC866",
    },
  ];

  const activeProfiles = (Array.isArray(profiles) && profiles.length > 0 ? profiles : fallbackProfiles)
    .slice()
    .sort((first, second) => getProfileOrder(first.platform) - getProfileOrder(second.platform));

  return (
    <section
      id="coding"
      className="min-h-0 md:min-h-[70vh] flex flex-col items-center px-4 sm:px-6 py-4 sm:py-6 relative overflow-hidden pointer-events-auto"
    >
      <div className="absolute top-20 left-[-10%] w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-[-10%] w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-7xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 inline-flex items-center gap-2 sm:gap-3">
            <SectionIcon emoji={SECTION_EMOJIS.coding} />
            <span className="section-title-text bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Coding Profiles</span>
            <SectionIcon emoji={SECTION_EMOJIS.coding} />
          </h2>
          <div className="px-2 w-full flex justify-center">
            <p className="text-white text-[13px] sm:text-base md:text-lg leading-[1.65rem] sm:leading-7 md:leading-8 font-sans text-center max-w-[95%] sm:max-w-3xl md:max-w-4xl mx-auto break-words hyphens-auto">
              A collection of coding resources structured around practice in data structures and algorithms. Competitive programming and skill development with consistent practice on LeetCode, GeeksforGeeks, and HackerRank.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-around gap-8 md:gap-10 xl:gap-12 w-full"
        >
          {activeProfiles.map((profile, index) => {
            const IconComp = iconResolver[profile.iconKey];
            const accent = getProfileAccent(profile.platform, profile.color);
            const iconEl = IconComp ? (
              <IconComp className="text-5xl" style={{ color: accent }} />
            ) : null;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <TriangleCard
                  icon={iconEl}
                  title={profile.platform}
                  subtitle={profile.desc}
                  link={profile.link}
                  color={accent}
                  theme={theme}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
