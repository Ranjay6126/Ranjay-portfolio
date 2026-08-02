import { motion } from "framer-motion";
import SectionIcon from "./SectionIcon";
import { SECTION_EMOJIS } from "../constants/navIcons";

export default function Services() {
  const services = [
    {
      title: "Full-Stack Development",
      description: "Designing and delivering end-to-end web applications with modern architecture, secure authentication, and scalable deployment strategies.",
      icon: "🌐"
    },
    {
      title: "Frontend Development",
      description: "Crafting responsive, high-performance interfaces with React and modern UI practices that feel intuitive, fast, and polished.",
      icon: "🎨"
    },
    {
      title: "Backend Development",
      description: "Building robust server-side systems with Node.js, Express, and databases, focused on reliability, security, and clean API design.",
      icon: "⚙️"
    },
    {
      title: "Database Management",
      description: "Designing efficient data models and optimizing database performance with MongoDB and MySQL to ensure integrity, scalability, and maintainability.",
      icon: "🗄️"
    },
    {
      title: "API Development",
      description: "Creating secure, well-documented APIs with strong validation, authentication, and error handling to support dependable integrations.",
      icon: "🔌"
    },
    {
      title: "Security Consulting",
      description: "Providing strategic cybersecurity guidance, risk assessment, and implementation support to strengthen systems and reduce vulnerabilities.",
      icon: "🔒"
    }
  ];

  return (
    <section 
      id="services" 
      className="min-h-0 sm:min-h-[36vh] lg:min-h-[33vh] flex items-center justify-center relative overflow-hidden px-4 py-6 pb-4 sm:px-6 sm:py-8 md:py-6"
    >
      <div className="absolute top-20 left-[-10%] w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-[-10%] w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="pointer-events-auto portfolio-card bg-white/5 backdrop-blur-2xl border border-white/10 p-5 sm:p-10 md:p-12 rounded-3xl sm:rounded-[2.5rem] max-w-6xl md:max-w-7xl w-full relative z-10 shadow-2xl"
      >
        <img
          src="/images/study.png"
          alt="Study"
          className="pointer-events-none absolute right-4 top-4 w-10 sm:w-12 md:w-14 h-auto opacity-95"
        />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-8"
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
              Professional services tailored to your needs, from full-stack development to security consulting, delivering high-quality solutions with modern technologies.
            </p>
          </div>
        </motion.div>

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
