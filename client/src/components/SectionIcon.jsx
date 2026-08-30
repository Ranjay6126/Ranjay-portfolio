import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../context/ThemeContext";

export default function SectionIcon({ icon, emoji }) {
  const { theme } = useTheme();
  const isLightMode = theme === "light";

  if (emoji) {
    return (
      <span
        className="text-2xl sm:text-3xl md:text-4xl leading-none shrink-0"
        role="img"
        aria-hidden="true"
      >
        {emoji}
      </span>
    );
  }

  if (!icon) {
    return null;
  }

  return (
    <FontAwesomeIcon
      icon={icon}
      className={`w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 shrink-0 ${
        isLightMode ? "text-black" : "text-white"
      }`}
    />
  );
}
