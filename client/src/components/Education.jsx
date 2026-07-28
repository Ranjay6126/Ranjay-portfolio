import { motion } from "framer-motion";
import { GraduationCap, Landmark, Calendar } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Education({ education = [] }) {
  const { theme } = useTheme();
  const isLightMode = theme === "light";
  return (
    <section id="education" className={`min-h-screen flex flex-col items-center px-6 py-10 relative overflow-hidden ${isLightMode ? "text-slate-900" : "text-white"}`}>
      <div className="max-w-7xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent inline-block">
            🎓 Education
          </h2>
          <p className={`${isLightMode ? "text-slate-600" : "text-white"} text-sm sm:text-base md:text-lg px-2 whitespace-nowrap`}>A comprehensive overview of my academic journey, showcasing educational milestones, institutions attended, completion timelines, academic performance CGPA, and the technical knowledge and professional skills developed throughout school, higher secondary, and university education.</p>

        </motion.div>

        <div className="relative">
          <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px ${isLightMode ? "bg-gradient-to-b from-slate-200/0 via-slate-400/40 to-slate-200/0" : "bg-gradient-to-b from-indigo-500/0 via-indigo-500/50 to-indigo-500/0"}`} />
          <div className="space-y-12">
            {education.map((edu, index) => (
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
                <div className="ml-6 md:ml-0 md:w-3/5">
                  <div className={`w-full rounded-2xl p-6 sm:p-8 shadow-xl hover:border-indigo-500/40 transition-colors duration-300 ${isLightMode ? "bg-white border border-slate-200/80 text-slate-800" : "bg-[#12131a] border border-gray-800/80 text-gray-200"}`}>
                    {/* Header: Degree Title */}
                    <div className="flex items-center gap-3 mb-4">
                      <GraduationCap className="w-8 h-8 text-indigo-500 shrink-0" />
                      <h2 className={`text-xl sm:text-2xl font-bold tracking-tight ${isLightMode ? "text-slate-900" : "text-white"}`}>
                        {edu.title}
                      </h2>
                    </div>

                    {/* Sub-header / Metadata Row */}
                    <div className={`flex flex-wrap items-center gap-x-3 gap-y-2 text-sm sm:text-base mb-6 ${isLightMode ? "text-slate-500" : "text-gray-400"}`}>
                      {/* University */}
                      <div className="flex items-center gap-2">
                        <Landmark className="w-5 h-5 text-indigo-500 shrink-0" />
                        <span>{edu.institution}</span>
                      </div>

                      <span className={`${isLightMode ? "text-slate-300" : "text-gray-600"} hidden sm:inline`}>|</span>

                      {/* Date */}
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-indigo-500 shrink-0" />
                        <span>{edu.duration}</span>
                      </div>

                      <span className={`${isLightMode ? "text-slate-300" : "text-gray-600"} hidden sm:inline`}>|</span>

                      {/* CGPA Badge */}
                      <span className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full border ${isLightMode ? "bg-indigo-50 text-indigo-600 border-indigo-200/60" : "bg-indigo-950/60 text-indigo-300 border-indigo-800/50"}`}>
                        {edu.grade}
                      </span>
                    </div>

                    {/* Description Paragraph */}
                    {edu.description && (
                      <p className={`leading-relaxed text-sm sm:text-base ${isLightMode ? "text-slate-600" : "text-gray-300"}`}>
                        {edu.description}
                      </p>
                    )}
                  </div>
                </div>
                <div className="hidden md:block md:w-2/5" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
