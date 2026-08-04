import { motion } from "framer-motion";
import SectionIcon from "./SectionIcon";
import { SECTION_EMOJIS } from "../constants/navIcons";

export default function Services() {
  const services = [
    {
      title: "Custom Web Development",
      description: "Building responsive, scalable websites and applications with a strong focus on performance, usability, and long-term maintainability.",
      icon: "🌐"
    },
    {
      title: "Performance Optimization",
      description: "Improving loading speed, responsiveness, and overall efficiency through thoughtful development and clean system design.",
      icon: "⚡"
    },
    {
      title: "UI/UX Design",
      description: "Crafting polished, intuitive interfaces that balance visual appeal, clarity, and smooth user interaction.",
      icon: "🎨"
    },
    {
      title: "Backend Development",
      description: "Designing reliable server-side solutions with secure APIs, structured logic, and robust database integration.",
      icon: "⚙️"
    },
    {
      title: "Reliable Support",
      description: "Providing dependable maintenance, issue resolution, and ongoing improvements that help products evolve with confidence.",
      icon: "🛠️"
    },
    {
      title: "Security Awareness",
      description: "Applying practical security principles and best practices to strengthen systems and reduce avoidable risks.",
      icon: "🔒"
    }
  ];

  return (
    <section 
      id="services" 
      className="min-h-0 sm:min-h-[36vh] lg:min-h-[33vh] flex flex-col items-center justify-start relative overflow-hidden px-4 py-6 pb-4 sm:px-6 sm:py-8 md:py-6"
    >
      <div className="absolute top-20 left-[-10%] w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-[-10%] w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl md:max-w-7xl w-full relative z-10 text-center mb-5 sm:mb-7"
      >
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <SectionIcon emoji={SECTION_EMOJIS.services} />
          <span className="section-title-text bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent inline-block">
            Services
          </span>
          <SectionIcon emoji={SECTION_EMOJIS.services} />
        </h2>
        <div className="px-2 w-full flex justify-center">
          <p className="text-white text-[13px] sm:text-base md:text-lg leading-[1.65rem] sm:leading-7 md:leading-8 font-sans text-center max-w-[95%] sm:max-w-3xl md:max-w-4xl mx-auto break-words hyphens-auto">
            Delivering professional digital solutions with a strong focus on quality, efficiency, and long-term value for modern businesses and projects.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="pointer-events-auto portfolio-card bg-white/5 backdrop-blur-2xl border border-white/10 p-5 sm:p-10 md:p-12 rounded-3xl sm:rounded-[2.5rem] max-w-6xl md:max-w-7xl w-full relative z-10 shadow-2xl"
      >
        <div className="flex justify-center mb-6 sm:mb-8">
          <a
            href="#contact"
            className="glass-button about-action-btn inline-flex items-center justify-center gap-2 rounded-full border border-emerald-400/30 bg-gradient-to-r from-emerald-500/20 via-green-500/20 to-lime-500/20 px-5 py-3 text-sm font-semibold text-emerald-100 transition-all duration-300 hover:scale-[1.02] hover:border-emerald-300/50 hover:bg-gradient-to-r hover:from-emerald-500/30 hover:via-green-500/25 hover:to-lime-500/25 sm:px-6 sm:py-3.5 sm:text-base backdrop-blur-xl"
          >
            <span className="text-base sm:text-lg">🚀</span>
            <span>Open to Full-Time Opportunities &amp; Freelance Projects</span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="portfolio-card bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-6 transition duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl sm:text-4xl">{service.icon}</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {service.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
