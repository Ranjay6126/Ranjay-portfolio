import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt, faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
import Body from "./Body";
import RotatingText from "./RotatingText";

export default function About({ profile }) {
  if (!profile) return null;

  const handleGitHubClick = () => window.open(profile.github, "_blank");
  const handleLeetCodeClick = () => window.open("https://leetcode.com/u/Ranjay_201/", "_blank");
  const handleLinkedinClick = () => window.open(profile.linkedin, "_blank");
  const handleInstagramClick = () => window.open(profile.instagram, "_blank");
  const handleGmailClick = () => window.open(`mailto:${profile.email}`, "_blank");

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-10 pb-2"
    >
      <div className="absolute top-20 left-[-10%] w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-[-10%] w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="pointer-events-auto bg-white/5 backdrop-blur-2xl border border-white/10 p-10 md:p-14 rounded-[2.5rem] max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10 shadow-2xl"
      >
        <div className="space-y-8 order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium">
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
              className="text-3xl sm:text-4xl md:text-3xl italic font-semibold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-slate-400 to-slate-600 drop-shadow-[0_0_30px_rgba(148,163,184,0.6)] cursor-default"
            >
              {profile.name}
            </motion.h1>
            <div className="flex items-center gap-3 text-xl sm:text-2xl text-gray-300 font-medium">
              <span>I am a</span>
              <RotatingText
                texts={profile.rotatingTexts}
                mainClassName="text-blue-400 font-semibold"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
          </div>

          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
            {profile.description}
          </p>

          <div className="flex gap-8 border-t border-white/10 pt-8">
            {profile.stats.map((stat, i) => (
              <div key={i}>
                <h4 className="text-3xl font-bold text-white">{stat.value}</h4>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-2 items-center">
            <a
              href={profile.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-1 rounded-2xl bg-white text-black font-bold transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center gap-2 cursor-pointer"
            >
              <FontAwesomeIcon icon={faFileAlt} />
              <span>Resume</span>
              <FontAwesomeIcon icon={faDownload} className="text-sm" />
            </a>

            <div className="flex gap-3">
              <button
                onClick={handleGitHubClick}
                className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white transition-all hover:bg-white/10 hover:scale-105 hover:border-white/20 cursor-pointer"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} className="text-xl" />
              </button>
              <button
                onClick={handleLeetCodeClick}
                className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white transition-all hover:bg-white/10 hover:scale-105 hover:border-white/20 cursor-pointer"
                aria-label="LeetCode"
              >
                <SiLeetcode className="text-xl" />
              </button>
              <button
                onClick={handleLinkedinClick}
                className="p-4 rounded-2xl text-white bg-gradient-to-tr from-[#0A66C2] to-[#0077B5] transition-all hover:scale-105 cursor-pointer shadow-md"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
              </button>
              <button
                onClick={handleInstagramClick}
                className="p-4 rounded-2xl text-white bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] transition-all hover:scale-105 cursor-pointer shadow-md"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-xl" />
              </button>
              <button
                onClick={handleGmailClick}
                className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white transition-all hover:bg-white/10 hover:scale-105 hover:border-white/20 cursor-pointer"
                aria-label="Gmail"
              >
                <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
              </button>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center items-center">
          <Body profileImage={profile.profileImage} />
        </div>
      </motion.div>
    </section>
  );
}
