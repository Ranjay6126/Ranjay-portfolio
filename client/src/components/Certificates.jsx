import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

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
    <section id="certificates" className="min-h-[70vh] flex py-6 px-4 sm:px-6 flex-col items-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-80 h-80 sm:w-96 sm:h-96 bg-indigo-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-80 h-80 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl md:max-w-7xl w-full relative z-10">
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent inline-block">
            🎓 Certificates
          </h2>
          <p className="text-white text-sm sm:text-base md:text-lg px-2 whitespace-nowrap">
            Verified certifications validating technical knowledge and hands-on skills in Data Structures & Algorithms, Full-Stack Development, Frontend Engineering, Backend Development, Database Management, and Linux.
          </p>
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
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-6 hover:border-white/20 transition duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-400">{cert.title}</h3>
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
                className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:scale-[1.02] transition"
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
