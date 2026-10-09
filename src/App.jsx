import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ParticleCanvas from './components/ParticleCanvas';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import AiLab from './components/AiLab';
import TechMatrix from './components/TechMatrix';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import TerminalDrawer from './components/TerminalDrawer';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#050811] text-slate-100 font-sans selection:bg-cyan-400 selection:text-black overflow-x-hidden">
      
      {/* Dynamic Synaptic Neural Background Canvas */}
      <ParticleCanvas />

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 cyber-grid pointer-events-none opacity-40 z-0"></div>

      {/* Floating Glass Navigation */}
      <Navbar 
        onOpenResume={() => setIsResumeOpen(true)}
        onToggleTerminal={() => setIsTerminalOpen(!isTerminalOpen)}
        isTerminalOpen={isTerminalOpen}
      />

      {/* Main Page Sections */}
      <main className="relative z-10">
        <Hero 
          onOpenResume={() => setIsResumeOpen(true)} 
          onOpenAiLab={() => {
            const el = document.getElementById('ai-lab');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />
        
        <About />

        <Projects />

        <AiLab />

        <TechMatrix />

        <Experience />

        <Contact />
      </main>

      {/* Cyber Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <ResumeModal 
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <TerminalDrawer
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

    </div>
  );
}