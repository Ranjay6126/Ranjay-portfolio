import {
  faHouse,
  faAddressBook,
  faTools,
  faLaptopCode,
  faCode,
  faGraduationCap,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

export const NAV_ITEMS = [
  { id: "about", label: "Home", icon: faHouse },
  { id: "skills", label: "Skills", icon: faTools },
  { id: "projects", label: "Projects", icon: faLaptopCode },
  { id: "coding", label: "Coding", icon: faCode },
  { id: "education", label: "Education", icon: faGraduationCap },
  { id: "services", label: "Services", icon: faCog },
  { id: "contact", label: "Contact", icon: faAddressBook },
];

export const SECTION_EMOJIS = {
  skills: "🛠️",
  projects: "🚀",
  certificates: "🏅",
  coding: "💻",
  education: "🎓",
  services: "⚙️",
  contact: "📩",
};
