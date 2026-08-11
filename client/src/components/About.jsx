import { faGithub, faLinkedin, faInstagram, faTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt, faDownload, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiLeetcode, SiGeeksforgeeks, SiHackerrank } from "react-icons/si";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import Body from "./Body";
import RotatingText from "./RotatingText";

export default function About({ profile }) {
  if (!profile) return null;

  const { theme } = useTheme();
  const isLightMode = theme === "light";

  const displayName = profile.name?.includes("Ranjay Prajapati")
    ? profile.name
    : profile.name || "<Ranjay Prajapati/>";

  const handleGitHubClick = () => window.open(profile.github, "_blank");
  const handleLeetCodeClick = () => window.open("https://leetcode.com/u/Ranjay_201/", "_blank");
  const handleGeeksforGeeksClick = () => window.open("https://www.geeksforgeeks.org/profile/panditrageon?tab=activity", "_blank");
  const handleHackerRankClick = () => window.open("https://www.hackerrank.com/profile/panditranjay33", "_blank");
  const handleLinkedinClick = () => window.open(profile.linkedin, "_blank");
  const handleInstagramClick = () => window.open(profile.instagram, "_blank");
  const handleTwitterClick = () => window.open(profile.twitter || "https://x.com/Ranjay10220", "_blank");
  const handleFacebookClick = () => window.open(profile.facebook || "https://www.facebook.com/mrranjay.prajapati/", "_blank");

  return (
    <section
      id="about"
      className="min-h-0 sm:min-h-[calc(72vh-114px)] lg:min-h-[calc(66vh-114px)] flex items-center justify-center relative overflow-hidden px-4 py-6 pb-4 sm:px-6 sm:py-8 md:py-6"
    >
      <div className="absolute top-20 left-[-10%] w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-[-10%] w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="pointer-events-auto portfolio-card bg-white/5 backdrop-blur-2xl border border-white/10 p-5 sm:px-10 sm:py-8 md:px-14 md:py-9 rounded-3xl sm:rounded-[2.5rem] max-w-6xl md:max-w-7xl w-full grid grid-cols-1 lg:grid-cols-6 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center relative z-10 shadow-2xl"
      >
        <div className="space-y-6 sm:space-y-8 order-2 md:order-1 lg:col-span-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs sm:text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for Work
          </div>

          <div>
            <motion.h1
              whileHover={{
                scale: 0.98,
                transition: {
                  duration: 0.2,
                  ease: "easeInOut",
                },
              }}
              className="about-name text-xl sm:text-3xl md:text-4xl font-bold tracking-wide mb-3 sm:mb-4 bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(56,189,248,0.35)] cursor-default break-words"
              style={{ color: isLightMode ? "#000000" : "#ffffff", WebkitTextFillColor: isLightMode ? "#000000" : "#ffffff" }}
            >
              {displayName}
            </motion.h1>
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-base sm:text-xl md:text-2xl text-white font-medium">
              <span className="whitespace-nowrap">I am a</span>
              <RotatingText
                texts={["Full-Stack Software Engineer", "Problem Solver & Cyber Security Enthusiast"]}
                mainClassName="text-blue-400 font-semibold whitespace-nowrap italic"
                staggerFrom="first"
                splitBy="words"
                initial={{ y: "120%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-120%", opacity: 0 }}
                staggerDuration={0.08}
                splitLevelClassName="overflow-hidden pb-0.5"
                transition={{ type: "spring", damping: 45, stiffness: 140 }}
                rotationInterval={4500}
              />
            </div>
          </div>

          <p className="text-base sm:text-[15px] md:text-base lg:text-[17px] text-white leading-relaxed max-w-none">
            {profile.description}
          </p>

          <div className="border-t border-white/10 pt-5 sm:pt-8">
            <div className="flex gap-4 sm:gap-7 md:gap-2 lg:gap-8 flex-wrap md:flex-nowrap items-center md:justify-between">
              {profile.stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center shrink-0">
                  <h4 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-bold text-white">{stat.value}</h4>
                  <p className="text-xs sm:text-sm md:text-[11px] lg:text-sm text-gray-400 whitespace-nowrap">{stat.label}</p>
                </div>
              ))}
              <div className="flex items-center gap-2 sm:gap-3 md:gap-1.5 lg:gap-3 text-white ml-0 font-normal sm:font-medium text-sm sm:text-base md:text-xs lg:text-base shrink-0">
                <FontAwesomeIcon icon={faEnvelope} className="text-base sm:text-xl md:text-base lg:text-xl text-white" />
                <a
                  href={`mailto:${profile.email}`}
                  className="break-all md:whitespace-nowrap hover:underline underline-offset-4"
                  aria-label={`Email ${profile.email}`}
                >
                  {profile.email}
                </a>
              </div>
              {profile.location && (
                <div className="flex items-center gap-2 sm:gap-3 md:gap-1.5 lg:gap-3 text-white ml-0 font-normal sm:font-medium text-sm sm:text-base md:text-xs lg:text-base shrink-0">
                  <FontAwesomeIcon icon={faLocationDot} className="text-base sm:text-xl md:text-base lg:text-xl text-white" />
                  <span className="whitespace-nowrap">{profile.location}</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-4 pt-2 items-center">
            <a
              href={profile.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button about-action-btn persistent-rgb-border h-10 sm:h-12 px-5 sm:px-8 rounded-2xl bg-white/10 border border-white/10 text-white font-bold transition-all hover:bg-white/20 hover:border-white/20 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base w-full sm:w-auto backdrop-blur-xl"
            >
              <FontAwesomeIcon icon={faFileAlt} />
              <span>Resume</span>
              <FontAwesomeIcon icon={faDownload} className="text-xs sm:text-sm" />
            </a>

            <div className="flex gap-2 sm:gap-3 flex-wrap justify-center sm:justify-start w-full sm:w-auto">
              <button
                onClick={handleGitHubClick}
                className="glass-button social-icon-btn flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white transition-all hover:bg-white/10 hover:scale-105 hover:border-white/20 cursor-pointer backdrop-blur-xl"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} className="text-lg sm:text-xl" />
              </button>
              <button
                onClick={handleLeetCodeClick}
                className="glass-button social-icon-btn flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white transition-all hover:bg-white/10 hover:scale-105 hover:border-white/20 cursor-pointer backdrop-blur-xl"
                aria-label="LeetCode"
              >
                <SiLeetcode className="text-lg sm:text-xl" />
              </button>
              <button
                onClick={handleGeeksforGeeksClick}
                className="glass-button social-icon-btn flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white transition-all hover:bg-white/10 hover:scale-105 hover:border-white/20 cursor-pointer backdrop-blur-xl"
                aria-label="GeeksforGeeks"
              >
                <SiGeeksforgeeks className="text-lg sm:text-xl" />
              </button>
              <button
                onClick={handleHackerRankClick}
                className="glass-button social-icon-btn flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white transition-all hover:bg-white/10 hover:scale-105 hover:border-white/20 cursor-pointer backdrop-blur-xl"
                aria-label="HackerRank"
              >
                <SiHackerrank className="text-lg sm:text-xl" />
              </button>
              <button
                onClick={handleLinkedinClick}
                className="glass-button social-icon-btn flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl text-white bg-gradient-to-tr from-[#0A66C2] to-[#0077B5] transition-all hover:scale-105 cursor-pointer shadow-md backdrop-blur-xl"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-lg sm:text-xl" />
              </button>
              <button
                onClick={handleInstagramClick}
                className="glass-button social-icon-btn flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl text-white bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] transition-all hover:scale-105 cursor-pointer shadow-md backdrop-blur-xl"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-lg sm:text-xl" />
              </button>
              <button
                onClick={handleTwitterClick}
                className="glass-button social-icon-btn flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl text-white bg-gradient-to-tr from-[#1DA1F2] to-[#0D8BD9] transition-all hover:scale-105 cursor-pointer shadow-md backdrop-blur-xl"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} className="text-lg sm:text-xl" />
              </button>
              <button
                onClick={handleFacebookClick}
                className="glass-button social-icon-btn flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl text-white bg-gradient-to-tr from-[#1877F2] to-[#0E5BD3] transition-all hover:scale-105 cursor-pointer shadow-md backdrop-blur-xl"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebookF} className="text-lg sm:text-xl" />
              </button>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2 lg:col-span-2 flex justify-center items-center">
          <Body profileImage="images/Ranjay_boys.png" />
        </div>
      </motion.div>
    </section>
  );
}
