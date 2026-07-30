import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import SectionIcon from "./SectionIcon";
import { SECTION_EMOJIS } from "../constants/navIcons";

export default function Certificates({ certificates = [] }) {
  const openInNewTab = (url) => {
    if (url && url !== "#") window.open(url, "_blank", "noopener,noreferrer");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="certificates" className="min-h-0 md:min-h-[70vh] flex py-6 px-4 sm:px-6 flex-col items-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-80 h-80 sm:w-96 sm:h-96 bg-indigo-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-80 h-80 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl md:max-w-7xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <SectionIcon emoji={SECTION_EMOJIS.certificates} />
            <span className="section-title-text bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Certificates</span>
            <SectionIcon emoji={SECTION_EMOJIS.certificates} />
          </h2>
          <div className="px-2 w-full flex justify-center">
            <p className="text-white text-[13px] sm:text-base md:text-lg leading-[1.65rem] sm:leading-7 md:leading-8 font-sans text-center max-w-[95%] sm:max-w-3xl md:max-w-4xl mx-auto break-words hyphens-auto">
              Verified certifications validating technical knowledge and hands-on skills in Data Structures &amp; Algorithms, Full-Stack Development, Frontend Engineering, Backend Development, Database Management, and Linux.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7"
        >
          {certificates.map((cert, i) => (
            <motion.article
              key={i}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group portfolio-card bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-6 transition duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                <h3 className="portfolio-card-title text-lg sm:text-xl font-bold text-white transition-colors">{cert.title}</h3>
                <span className="text-xs text-indigo-300 bg-indigo-500/10 px-3 py-1 rounded-full whitespace-nowrap self-start">{cert.date}</span>
              </div>
              <p className="text-sm text-gray-400 mb-3">
                Issued by <span className="text-indigo-300">{cert.issuer}</span>
              </p>
              {cert.img && (
                <div className="mb-4 overflow-hidden rounded-xl">
                  <img src={cert.img} alt={cert.title} className="w-full h-36 sm:h-40 object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
              )}
              <button
                onClick={() => openInNewTab(cert.verifyLink)}
                className="glass-button w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border bg-green-500/10 border-green-500/20 text-green-400 hover:bg-green-500/20 hover:border-green-500/30 hover:text-green-300"
              >
                <FaExternalLinkAlt className="w-3 h-3" />
                Verify Certificate
              </button>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
