import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faAddressBook,
  faTools,
  faLaptopCode,
  faCode,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

const NAV_ITEMS = [
  { id: "about", label: "Home", icon: faHouse },
  { id: "skills", label: "Skills", icon: faTools },
  { id: "projects", label: "Projects", icon: faLaptopCode },
  { id: "coding", label: "Coding", icon: faCode },
  { id: "education", label: "Education", icon: faGraduationCap },
  { id: "contact", label: "Contact", icon: faAddressBook },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [isMobile, setIsMobile] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const updateActiveSection = useCallback(() => {
    const offset = isMobile ? 180 : 120;
    let current = NAV_ITEMS[0].id;

    for (const { id } of NAV_ITEMS) {
      const section = document.getElementById(id);
      if (!section) continue;
      if (section.getBoundingClientRect().top <= offset) {
        current = id;
      }
    }

    setActiveSection(current);
  }, [isMobile]);

  useEffect(() => {
    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [updateActiveSection]);

  return (
    <div
      className={`fixed z-50 left-1/2 -translate-x-1/2 transition-all duration-300 ${
        isMobile ? "bottom-6 w-[90%] max-w-[400px]" : "top-6"
      }`}
    >
      <motion.nav
        initial={{ y: isMobile ? 100 : -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`flex items-center ${
          isMobile ? "justify-around px-2" : "gap-1"
        } backdrop-blur-md border border-white/10 rounded-full p-1.5 shadow-lg`}
        style={{ backgroundColor: "var(--navbar-bg)" }}
      >
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`relative rounded-full text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
              isMobile ? "p-3" : "px-5 py-2.5"
            } ${
              activeSection === item.id
                ? "text-white shadow-lg"
                : "text-gray-400 hover:text-white hover:bg-white/5 hover:cursor-pointer"
            }`}
            style={activeSection === item.id ? {
              background: "var(--nav-active-bg)",
              boxShadow: "0 10px 25px -5px var(--nav-active-shadow)"
            } : {}}
          >
            <FontAwesomeIcon icon={item.icon} className={isMobile ? "w-5 h-5" : "w-4 h-4"} />
            <span className={isMobile ? "hidden" : "hidden md:inline"}>{item.label}</span>
          </button>
        ))}
        <button
          onClick={toggleTheme}
          title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          className={`relative rounded-full transition-all duration-300 flex items-center justify-center ${
            isMobile ? "p-3" : "px-3 py-2.5"
          } text-gray-400 hover:text-white hover:bg-white/5 hover:cursor-pointer`}
        >
          {theme === "dark" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`${isMobile ? "w-5 h-5" : "w-4 h-4"} text-yellow-300`}
            >
              <path d="M12 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm0 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm9-5a1 1 0 010 2h-1a1 1 0 110-2h1zM4 11a1 1 0 010 2H3a1 1 0 110-2h1zm13.657-6.657a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707zM6.343 17.657a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707zM17.657 17.657a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 011.414-1.414l.707.707zM6.343 6.343a1 1 0 01-1.414 1.414l-.707-.707A1 1 0 015.636 5.636l.707.707zM12 7a5 5 0 100 10A5 5 0 0012 7z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`${isMobile ? "w-5 h-5" : "w-4 h-4"} text-indigo-300`}
            >
              <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
            </svg>
          )}
        </button>
      </motion.nav>
    </div>
  );
}
