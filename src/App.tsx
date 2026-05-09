import { Navbar } from "./components/portfolio/Navbar";
import { Hero } from "./components/portfolio/Hero";
import { Projects } from "./components/portfolio/Projects";
import { Skills } from "./components/portfolio/Skills";
import { Experience } from "./components/portfolio/Experience";
import { AboutStrip } from "./components/portfolio/AboutStrip";
import { Contact } from "./components/portfolio/Contact";
import { Footer } from "./components/portfolio/Footer";

function App() {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <Navbar />
      <main id="main-content">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <AboutStrip />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
