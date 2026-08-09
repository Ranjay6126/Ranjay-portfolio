import { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { usePortfolio } from "./hooks/usePortfolio";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import CodingProfiles from "./components/CodingProfiles";
import Education from "./components/Education";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Loading from "./components/Loading";
import Resume from "./pages/Resume";

const Background3D = lazy(() => import("./components/Background3D"));

function Portfolio() {
  // Load portfolio content once and pass it to sections that need it.
  const { portfolio, error } = usePortfolio();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const disableContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", disableContextMenu);
    return () => document.removeEventListener("contextmenu", disableContextMenu);
  }, []);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    window.location.hash = "";
  };

  return (
    <>
      {isLoading && <Loading onComplete={handleLoadingComplete} />}
      <div
        className="min-h-screen relative overflow-hidden"
        style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}
      >
        <Suspense fallback={null}>
          <Background3D />
        </Suspense>

        <header className="fixed top-0 w-full z-50 pointer-events-auto">
          <Navbar />
        </header>

        <main className="relative z-10 pt-4 sm:pt-8 md:pt-10 pb-16 md:pb-8">
          {error ? (
            <div className="min-h-screen flex items-center justify-center text-red-400 px-6 text-center">
              {error}. Make sure the server is running and database is seeded.
            </div>
          ) : (
            <>
              <About profile={portfolio?.profile} />
              <TechStack portfolio={portfolio} />
              <Projects portfolio={portfolio} />
              <Certificates certificates={portfolio?.certificates} />
              <CodingProfiles profiles={portfolio?.codingProfiles} />
              <Education education={portfolio?.education} />
              <Services />
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
