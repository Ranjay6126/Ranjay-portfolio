import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { usePortfolio } from "./hooks/usePortfolio";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Background3D from "./components/Background3D";
import Loading from "./components/Loading";
import Resume from "./pages/Resume";

function Portfolio() {
  const { portfolio, error } = usePortfolio();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const disableContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", disableContextMenu);
    return () => document.removeEventListener("contextmenu", disableContextMenu);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loading onComplete={handleLoadingComplete} />}
      <div
        className="min-h-screen relative overflow-hidden"
        style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}
      >
        <Background3D />

        <header className="fixed top-0 w-full z-50 pointer-events-auto">
          <Navbar />
        </header>

        <main className="relative z-10 pt-10">
          {error ? (
            <div className="min-h-screen flex items-center justify-center text-red-400 px-6 text-center">
              {error}. Make sure the server is running and database is seeded.
            </div>
          ) : (
            <>
              <About profile={portfolio?.profile} />
              <TechStack />
              <Projects />
              <Certificates certificates={portfolio?.certificates} />
              <Achievements achievements={portfolio?.achievements} />
              <Education education={portfolio?.education} />
              <Contact />
            </>
          )}
        </main>
      </div>
    </>
  );
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
  );
}
