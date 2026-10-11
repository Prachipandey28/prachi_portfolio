import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechMatrix from './components/TechMatrix';
import Projects from './components/Projects';
import DevDashboard from './components/DevDashboard';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import AiLab from './components/AiLab';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import GalleryModal from './components/GalleryModal';
import { Bot } from 'lucide-react';
import { playSound } from './utils/soundEffects';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#0c0f1d] text-slate-100 font-sans selection:bg-[#6c63ff] selection:text-white overflow-x-hidden">
      
      {/* Ambient Radial Background Glows */}
      <div className="fixed top-0 left-1/4 w-[650px] h-[650px] bg-[#6c63ff]/10 blur-[180px] rounded-full pointer-events-none z-0"></div>
      <div className="fixed bottom-0 right-1/4 w-[550px] h-[550px] bg-[#4d44db]/10 blur-[180px] rounded-full pointer-events-none z-0"></div>

      {/* Modern Glass Navigation */}
      <Navbar 
        onOpenResume={() => setIsResumeOpen(true)} 
        onOpenGallery={() => setIsGalleryOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="relative z-10">
        <Hero 
          onOpenResume={() => setIsResumeOpen(true)} 
          onOpenGallery={() => setIsGalleryOpen(true)}
        />
        <About />
        <TechMatrix />
        <Projects />
        <DevDashboard />
        <Certifications />
        <Experience />
        <AiLab />
        <Contact />
      </main>

      {/* Modern Footer */}
      <Footer />

      {/* Digital Resume Modal */}
      <ResumeModal 
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Campus & Tech Moments Gallery Modal */}
      <GalleryModal 
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
      />

      {/* Floating AI Copilot Trigger */}
      <a
        href="#ai-lab"
        onClick={() => playSound('click')}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#121627]/95 border border-[#6c63ff]/50 text-white font-mono text-xs shadow-2xl shadow-[#6c63ff]/30 hover:scale-105 active:scale-95 transition-all backdrop-blur-xl group"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <Bot className="w-4 h-4 text-[#6c63ff] group-hover:scale-110 transition-transform" />
        <span className="font-semibold text-white tracking-wide">Prachi AI Copilot</span>
      </a>

    </div>
  );
}