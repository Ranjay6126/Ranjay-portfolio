import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import SectionIcon from "./SectionIcon";
import { SECTION_EMOJIS } from "../constants/navIcons";

export default function Services() {
  const availabilityCardRef = useRef(null);
  const isAvailabilityCardInView = useInView(availabilityCardRef, { once: true, amount: 0.45 });
  const { theme } = useTheme();
  const isLightMode = theme === "light";
  const headingTextClass = isLightMode ? "text-slate-950" : "text-white";
  const bodyTextClass = isLightMode ? "text-black" : "text-white";
  const panelTextClass = isLightMode ? "text-slate-950" : "text-white";
  const availabilityTextClass = `service-contact-details w-full whitespace-nowrap font-semibold ${panelTextClass}`;

  return (
    <section
      id="services"
      className="min-h-0 sm:min-h-[34vh] lg:min-h-[40vh] flex flex-col items-center justify-start relative overflow-hidden px-4 py-5 pb-3 sm:px-5 sm:py-6 md:py-5"
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
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="pointer-events-auto portfolio-card bg-white/5 backdrop-blur-2xl border border-white/10 p-4 sm:p-6 md:p-8 rounded-3xl sm:rounded-[2.25rem] max-w-6xl md:max-w-7xl w-full relative z-10 shadow-[0_12px_28px_rgba(0,0,0,0.28)]"
      >
        <div className="mb-3 flex justify-center">
          <a
            href="#contact"
            className="service-opportunity-button persistent-rgb-border relative glass-button inline-flex items-center justify-center gap-3 rounded-full border bg-gradient-to-r from-emerald-500/20 via-green-500/20 to-lime-500/20 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_45px_rgba(16,185,129,0.22),0_10px_24px_rgba(0,0,0,0.24)] transition-all duration-300 hover:scale-[1.02] hover:bg-gradient-to-r hover:from-emerald-500/30 hover:via-green-500/25 hover:to-lime-500/25 sm:px-8 sm:text-base backdrop-blur-xl"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span>Open to Full-Time Opportunities & Freelance Projects</span>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-4 sm:gap-5 lg:gap-6">
          <div className="grid grid-cols-1 gap-4 sm:gap-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`portfolio-card shadow-[0_10px_24px_rgba(0,0,0,0.24)] backdrop-blur-xl border rounded-tr-3xl rounded-bl-3xl p-3 sm:p-4 ${
                isLightMode ? "bg-white border-slate-200/80" : "bg-[#12131a] border-gray-800/80"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🌐</span>
                <h3 className={`text-sm sm:text-base font-bold ${headingTextClass}`}>
                  Website & Mobile Application📱
                </h3>
              </div>
              <p className={`text-sm sm:text-base leading-relaxed ${bodyTextClass}`}>
                I provide end-to-end website and mobile application development services. Building responsive, scalable and user friendly solutions. I build fast, reliable, easy to maintain applications – from modern UI/UX design and secure backend APIs to database integration and real-time features. I also deploy on cloud platforms like AWS, configure Docker and CI/CD pipelines and optimize performance to make your app secure, scalable and production ready.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`portfolio-card shadow-[0_10px_24px_rgba(0,0,0,0.24)] backdrop-blur-xl border rounded-tr-3xl rounded-bl-3xl p-3 sm:p-4 ${
                isLightMode ? "bg-white border-slate-200/80" : "bg-[#12131a] border-gray-800/80"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🛡️</span>
                <h3 className={`text-sm sm:text-base font-bold ${headingTextClass}`}>
                  SOC (Security Operations Center)🔐
                </h3>
              </div>
              <p className={`text-sm sm:text-base leading-relaxed ${bodyTextClass}`}>
                I offer SOC Analyst services focused on continuous security monitoring, threat detection, and incident analysis to help protect your systems and networks. I investigate security alerts, analyze logs, identify potential threats, and support incident response using industry-standard SIEM tools and security best practices. My goal is to strengthen your organization's security posture through proactive monitoring, timely alert investigation, and effective risk mitigation.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-h-64 overflow-hidden rounded-tl-3xl rounded-tr-3xl lg:max-h-72"
            >
              <img
                src="images/boy.png"
                alt="Developer portrait"
                loading="eager"
                decoding="async"
                className="h-56 sm:h-64 lg:h-72 w-full object-contain"
              />
            </motion.div>

            <motion.div
              ref={availabilityCardRef}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="service-contact-card portfolio-card bg-white/5 shadow-[0_16px_38px_rgba(0,0,0,0.48),0_0_28px_rgba(16,185,129,0.12)] backdrop-blur-xl border border-white/10 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl p-3 sm:p-5 w-full max-w-md"
            >
              <motion.span
                aria-hidden="true"
                className="service-contact-spark absolute z-10 text-base leading-none text-green-400 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: isAvailabilityCardInView ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ➤
              </motion.span>
              <div className="space-y-2 text-sm leading-relaxed">
                <h4 className={`${availabilityTextClass} inline-flex items-center gap-1.5`}>
                  <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-emerald-400 mr-1 align-middle animate-pulse" />Available for Work & Freelance : (₹ 60K / Month)
                </h4>
                <p className={availabilityTextClass}>
                  <span className="mr-2">📍</span>Address : Bengaluru, Whitefield
                </p>
                <p className={availabilityTextClass}>
                  <span className="mr-2">📧</span>Email : {" "}
                  <a
                    href="mailto:panditranjay33@gmail.com"
                    className="hover:underline underline-offset-4"
                    aria-label="Email panditranjay33@gmail.com"
                  >
                    panditranjay33@gmail.com
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
