import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaDownload, FaSun, FaMoon } from 'react-icons/fa'
import Body from './body'
import Contact from './contact'
import RotatingText from './components/RotatingText'
import Background3D from './Backgroun3D'
import { ThemeProvider, useTheme } from './ThemeContext'

function AppContent() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Background3D />
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
          >
            Ranjay
          </motion.h1>
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20"
            >
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </motion.button>
            <a href="#contact" className="hidden sm:block px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 transition-opacity">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Body />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-4xl sm:text-5xl font-bold"
          >
            Hi, I'm <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Ranjay</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-xl text-gray-300"
          >
            I'm a <RotatingText texts={['Full Stack Developer', 'UI/UX Designer', 'Problem Solver']} className="text-indigo-400 font-semibold" />
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 flex flex-wrap gap-4 justify-center"
          >
            <a href="#contact" className="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
              Hire Me
            </a>
            <a href="/resume.pdf" download="Ranjay_Resume.pdf" className="px-8 py-3 rounded-xl bg-white/10 border border-white/20 font-semibold flex items-center gap-2 hover:bg-white/20 transition-colors">
              <FaDownload /> Resume
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-12 flex gap-6 justify-center"
          >
            <a href="#" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"><FaGithub size={24} /></a>
            <a href="#" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"><FaLinkedin size={24} /></a>
            <a href="#" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"><FaTwitter size={24} /></a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate developer with a love for creating beautiful and functional web applications. 
              With expertise in modern technologies like React, Node.js, and Three.js, I bring ideas to life with smooth animations and intuitive user experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
          >
            Skills
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {['React', 'Node.js', 'Three.js', 'Tailwind CSS', 'Framer Motion', 'Express', 'MongoDB', 'TypeScript'].map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-center hover:bg-white/10 transition-colors"
              >
                <span className="font-semibold">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
