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
  const handleGmailClick = () => window.open(`mailto:${profile.email}`, "_blank");

  return (
    <section
      id="about"
      className="min-h-[68vh] sm:min-h-[72vh] lg:min-h-[66vh] flex items-center justify-center relative overflow-hidden px-4 py-4 pb-2 sm:px-6 sm:py-5 md:py-6"
    >
      <div className="absolute top-20 left-[-10%] w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-[-10%] w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="pointer-events-auto bg-white/5 backdrop-blur-2xl border border-white/10 p-6 sm:p-10 md:p-14 rounded-[2rem] sm:rounded-[2.5rem] max-w-6xl md:max-w-7xl w-full grid md:grid-cols-6 gap-8 md:gap-10 lg:gap-12 items-center relative z-10 shadow-2xl"
      >
        <div className="space-y-6 sm:space-y-8 order-2 md:order-1 md:col-span-4">
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
              className="about-name text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide mb-3 sm:mb-4 bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(56,189,248,0.35)] cursor-default"
              style={{ color: isLightMode ? "#000000" : "#ffffff", WebkitTextFillColor: isLightMode ? "#000000" : "#ffffff" }}
            >
              {displayName}
            </motion.h1>
            <div className="flex flex-wrap items-baseline gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl text-white font-medium">
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

          <div className="border-t border-white/10 pt-6 sm:pt-8">
            <div className="flex gap-5 sm:gap-7 md:gap-8 flex-wrap items-center">
              {profile.stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center">
                  <h4 className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</h4>
                  <p className="text-xs sm:text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
              <div className="flex items-center gap-2 sm:gap-3 text-white ml-0 font-normal sm:font-medium text-sm sm:text-base">
                <FontAwesomeIcon icon={faEnvelope} className="text-base sm:text-xl text-white" />
                <span className="break-all">{profile.email}</span>
              </div>
              {profile.location && (
                <div className="flex items-center gap-2 sm:gap-3 text-white ml-0 font-normal sm:font-medium text-sm sm:text-base">
                  <FontAwesomeIcon icon={faLocationDot} className="text-base sm:text-xl text-white" />
                  <span className="whitespace-nowrap">{profile.location}</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 items-center">
            <a
              href={profile.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="about-action-btn h-11 sm:h-12 px-6 sm:px-8 rounded-2xl bg-white text-black font-bold transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base"
            >
              <FontAwesomeIcon icon={faFileAlt} />
              <span>Resume</span>
              <FontAwesomeIcon icon={faDownload} className="text-xs sm:text-sm" />
            </a>

            <div className="flex gap-2 sm:gap-3">
              <button
                onClick={handleGitHubClick}
                className="social-icon-btn flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white transition-all hover:bg-white/10 hover:scale-105 hover:border-white/20 cursor-pointer"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} className="text-lg sm:text-xl" />
              </button>
              <button
                onClick={handleLeetCodeClick}
                className="social-icon-btn flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white transition-all hover:bg-white/10 hover:scale-105 hover:border-white/20 cursor-pointer"
                aria-label="LeetCode"
              >
                <SiLeetcode className="text-lg sm:text-xl" />
              </button>
              <button
                onClick={handleGeeksforGeeksClick}
                className="social-icon-btn flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white transition-all hover:bg-white/10 hover:scale-105 hover:border-white/20 cursor-pointer"
                aria-label="GeeksforGeeks"
              >
                <SiGeeksforgeeks className="text-lg sm:text-xl" />
              </button>
              <button
                onClick={handleHackerRankClick}
                className="social-icon-btn flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white transition-all hover:bg-white/10 hover:scale-105 hover:border-white/20 cursor-pointer"
                aria-label="HackerRank"
              >
                <SiHackerrank className="text-lg sm:text-xl" />
              </button>
              <button
                onClick={handleLinkedinClick}
                className="social-icon-btn flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl text-white bg-gradient-to-tr from-[#0A66C2] to-[#0077B5] transition-all hover:scale-105 cursor-pointer shadow-md"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-lg sm:text-xl" />
              </button>
              <button
                onClick={handleInstagramClick}
                className="social-icon-btn flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl text-white bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] transition-all hover:scale-105 cursor-pointer shadow-md"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-lg sm:text-xl" />
              </button>
              <button
                onClick={handleTwitterClick}
                className="social-icon-btn flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl text-white bg-gradient-to-tr from-[#1DA1F2] to-[#0D8BD9] transition-all hover:scale-105 cursor-pointer shadow-md"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} className="text-lg sm:text-xl" />
              </button>
              <button
                onClick={handleFacebookClick}
                className="social-icon-btn flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl text-white bg-gradient-to-tr from-[#1877F2] to-[#0E5BD3] transition-all hover:scale-105 cursor-pointer shadow-md"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebookF} className="text-lg sm:text-xl" />
              </button>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2 md:col-span-2 flex justify-center items-center">
          <Body profileImage={profile.profileImage} />
        </div>
      </motion.div>
    </section>
  );
}
