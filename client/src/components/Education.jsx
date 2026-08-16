import { motion } from "framer-motion";
import { Landmark, Calendar } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import SectionIcon from "./SectionIcon";
import { SECTION_EMOJIS } from "../constants/navIcons";

export default function Education({ education = [] }) {
  const { theme } = useTheme();
  const isLightMode = theme === "light";
  const [expandedPoints, setExpandedPoints] = useState({});

  const togglePoints = (index) => {
    setExpandedPoints((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const normalizePoints = (edu) => {
    if (Array.isArray(edu?.points) && edu.points.length > 0) return edu.points;
    if (typeof edu?.description !== "string") return [];

    const lines = edu.description
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean)
      .map((l) => l.replace(/^[*•]\s*/, ""));

    return lines.length > 1 ? lines : [];
  };

  return (
    <section id="education" className={`min-h-0 md:min-h-screen flex flex-col items-center px-4 sm:px-6 py-4 sm:py-6 relative overflow-hidden ${isLightMode ? "text-slate-900" : "text-white"}`}>
      <div className="max-w-7xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <SectionIcon emoji={SECTION_EMOJIS.education} />
            <span
              className="section-title-text bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent inline-block"
            >
              Education
            </span>
            <SectionIcon emoji={SECTION_EMOJIS.education} />
          </h2>
          <div className="px-2 w-full flex justify-center">
            <p className={`${isLightMode ? "text-black" : "text-white"} text-[13px] sm:text-base md:text-lg leading-[1.65rem] sm:leading-7 md:leading-8 font-sans text-center max-w-[95%] sm:max-w-3xl md:max-w-4xl mx-auto break-words hyphens-auto`}>
              A comprehensive overview of my academic journey, highlighting institutions, completion timelines, academic performance CGPA, and the technical and professional skills gained throughout my education.
            </p>
          </div>

        </motion.div>

        <div className="relative">
          <div
            className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-[3px] ${
              isLightMode
                ? "bg-gradient-to-b from-slate-200/0 via-slate-400/50 to-slate-200/0"
                : "bg-gradient-to-b from-indigo-500/0 via-indigo-500/60 to-indigo-500/0"
            }`}
          />
          <div
            className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 md:-ml-7 h-full w-[3px] ${
              isLightMode
                ? "bg-gradient-to-b from-slate-200/0 via-slate-400/45 to-slate-200/0"
                : "bg-gradient-to-b from-indigo-500/0 via-indigo-500/55 to-indigo-500/0"
            }`}
          />
          <div className="space-y-12">
            {education.map((edu, index) => {
              const points = normalizePoints(edu);
              const isExpanded = !!expandedPoints[index];
              const visiblePoints = isExpanded ? points : points.slice(0, 1);
              const hasHiddenPoints = points.length > 1;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                <div
                  className={`absolute left-[-8px] md:left-1/2 md:-translate-x-1/2 top-0 w-4 h-4 rounded-full border-4 ${isLightMode ? "border-white" : "border-black"} z-10 ${
                    edu.duration.includes("Present")
                      ? "bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.8)]"
                      : "bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                  }`}
                >
                  {edu.duration.includes("Present") && (
                    <span className="absolute -inset-1 rounded-full bg-green-500 opacity-75 animate-ping" />
                  )}
                </div>
                <div className="ml-4 sm:ml-6 md:ml-0 md:w-3/5">
                  <div className={`portfolio-card w-full rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl transition-colors duration-300 ${isLightMode ? "bg-white border border-slate-200/80 text-slate-800 shadow-[0_18px_42px_rgba(15,23,42,0.28)]" : "bg-[#12131a] border border-gray-800/80 text-gray-200 shadow-[0_22px_52px_rgba(0,0,0,0.72)]"}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <FontAwesomeIcon icon={faGraduationCap} className="w-7 h-7 sm:w-8 sm:h-8 text-indigo-500 shrink-0" />
                      <h2 className={`text-xl sm:text-2xl font-bold tracking-tight ${isLightMode ? "text-slate-900" : "text-white"}`}>
                        {edu.title}
                      </h2>
                    </div>

                    <div className={`flex flex-wrap items-center gap-x-3 gap-y-2 text-sm sm:text-base mb-6 ${isLightMode ? "text-slate-500" : "text-gray-400"}`}>
                      <div className="flex items-center gap-2">
                        <Landmark className="w-5 h-5 text-indigo-500 shrink-0" />
                        <span>{edu.institution}</span>
                      </div>

                      <span className={`${isLightMode ? "text-slate-300" : "text-gray-600"} hidden sm:inline`}>|</span>

                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-indigo-500 shrink-0" />
                        <span>{edu.duration}</span>
                      </div>

                      <span className={`${isLightMode ? "text-slate-300" : "text-gray-600"} hidden sm:inline`}>|</span>

                      <span className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full border ${isLightMode ? "bg-indigo-50 text-indigo-600 border-indigo-200/60" : "bg-indigo-950/60 text-indigo-300 border-indigo-800/50"}`}>
                        {edu.grade}
                      </span>
                    </div>

                    {points.length > 0 ? (
                      <div>
                        <ul className={`space-y-2 text-sm sm:text-base ${isLightMode ? "text-black" : "text-white"}`}>
                        {visiblePoints.map((point, i) => (
                          <li key={i} className="flex items-start gap-3 leading-relaxed">
                            <span className={`mt-2 h-1.5 w-1.5 rounded-full ${isLightMode ? "bg-black" : "bg-white"} shrink-0`} />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                        {hasHiddenPoints && (
                          <button
                            type="button"
                            onClick={() => togglePoints(index)}
                            className="glass-button mt-3 inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 text-indigo-400 text-xs sm:text-sm font-semibold transition-colors hover:bg-white/10 hover:border-white/20 hover:text-indigo-300"
                          >
                            {isExpanded ? "See Less ▲" : "See More ▼"}
                          </button>
                        )}
                      </div>
                    ) : (
                      edu.description && (
                        <p className={`leading-relaxed text-sm sm:text-base ${isLightMode ? "text-slate-600" : "text-gray-300"}`}>
                          {edu.description}
                        </p>
                      )
                    )}
                  </div>
                </div>
                <div className="hidden md:block md:w-2/5" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
