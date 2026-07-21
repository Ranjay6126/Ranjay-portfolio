import { motion } from "framer-motion";

export default function Body({ profileImage }) {
  const imageSrc = profileImage || "/images/Ranjay image.png";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative group"
    >
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="relative z-10 flex items-center justify-center"
      >
        <div className="w-[250px] h-[250px] relative flex items-center justify-center">
          <div className="w-[250px] h-[250px] rounded-full overflow-hidden border border-white/20 relative z-10 bg-white shadow-sm shadow-black/10">
            <img
              src={imageSrc}
              alt="Profile"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </motion.div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-transparent rounded-full -z-10" />
    </motion.div>
  );
}
