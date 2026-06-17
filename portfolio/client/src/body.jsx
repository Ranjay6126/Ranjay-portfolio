import { motion } from 'framer-motion'
import profileImage from './assets/images/profile.jpg'

export default function Body() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative group"
    >
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        className="relative z-10"
      >
        <div className="w-[250px] h-[250px] relative">
          <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-500" />
          <div className="w-[250px] h-[250px] rounded-full overflow-hidden border-2 border-white/10 relative z-10 bg-white">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-indigo-500/20 blur-[100px] rounded-full -z-10" />
    </motion.div>
  )
}