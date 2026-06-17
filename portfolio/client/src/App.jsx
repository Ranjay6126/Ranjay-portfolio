import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './ThemeContext'
import Navbar from './navbar'
import About from './About'
import Resume from './resume'
import Contact from './contact'
import Projects from './projects'
import Education from './education'
import CodingProfiles from './codingProfiles'
import Background3D from './Background3D'
import TechStack from './techStack'
import Certificates from './certificates'
import Achievements from './achievements'
// import ChatBot from './ChatBot/chatbot'

function Portfolio() {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
    >
      <Background3D />

      <header className="fixed top-0 w-full z-50 pointer-events-auto">
        <Navbar />
      </header>

      <main className="relative z-10 pt-10">
        <About />
        <TechStack />
        <Projects />
        <Certificates />
        <Achievements />
        <CodingProfiles />
        <Education />
        <Contact />
        {/* <ChatBot /> */}
      </main>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}