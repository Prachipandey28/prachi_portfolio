import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechMatrix from './components/TechMatrix';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#0c0f1d] text-slate-100 font-sans selection:bg-[#6c63ff] selection:text-white overflow-x-hidden">
      
      {/* Ambient Radial Background Glows */}
      <div className="fixed top-0 left-1/4 w-[650px] h-[650px] bg-[#6c63ff]/10 blur-[180px] rounded-full pointer-events-none z-0"></div>
      <div className="fixed bottom-0 right-1/4 w-[550px] h-[550px] bg-[#4d44db]/10 blur-[180px] rounded-full pointer-events-none z-0"></div>

      {/* Modern Glass Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Page Sections */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <TechMatrix />
        <Projects />
        <Certifications />
        <Experience />
        <Contact />
      </main>

      {/* Modern Footer */}
      <Footer />

      {/* Digital Resume Modal */}
      <ResumeModal 
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </div>
  );
}