import { useState, useEffect } from 'react';
import { FileText, Send, Menu, X, Cpu, Layers, User, Award, CheckCircle2, Volume2, VolumeX, Bot, Camera, Activity } from 'lucide-react';
import { isSoundEnabled, toggleSound, subscribeSound, playSound } from '../utils/soundEffects';

export default function Navbar({ onOpenResume, onOpenGallery }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [soundOn, setSoundOn] = useState(() => isSoundEnabled());

  useEffect(() => {
    const unsubscribe = subscribeSound((enabled) => setSoundOn(enabled));
    return () => unsubscribe();
  }, []);

  const handleSoundToggle = () => {
    const newState = toggleSound();
    setSoundOn(newState);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'achievements', 'ai-lab', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Cpu },
    { id: 'projects', label: 'Projects', icon: Layers },
    { id: 'dashboard', label: 'Activity', icon: Activity },
    { id: 'certifications', label: 'Certifications', icon: CheckCircle2 },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'ai-lab', label: 'AI Copilot', icon: Bot },
    { id: 'contact', label: 'Contact', icon: Send },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'py-3 bg-[#0c0f1d]/90 backdrop-blur-xl border-b border-slate-800/80 shadow-xl' : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="#home" 
          onClick={() => playSound('click')}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#6c63ff] to-[#38bdf8] p-[2px] shadow-lg shadow-indigo-500/20 transition-transform group-hover:scale-105">
            <div className="w-full h-full bg-[#0c0f1d] rounded-[10px] flex items-center justify-center font-bold text-white text-base">
              PP
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-wide text-white">
              PRACHI<span className="text-[#6c63ff]">.AI</span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              CGPA: 9.3/10 • Arya College
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#151a2e]/90 border border-slate-800/90 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => playSound('hover')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#6c63ff] to-[#4d44db] text-white shadow-md shadow-indigo-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action */}
        <div className="hidden md:flex items-center gap-3">
          {/* Futuristic Audio FX Toggle */}
          <button
            onClick={handleSoundToggle}
            title={soundOn ? 'Futuristic Sound FX: Active (Click to Mute)' : 'Futuristic Sound FX: Muted (Click to Enable Audio)'}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-300 border ${
              soundOn
                ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-400 shadow-sm shadow-emerald-500/20'
                : 'bg-[#151a2e] border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
            }`}
          >
            {soundOn ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span className="text-[10px] tracking-wide font-semibold">SFX ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span className="text-[10px] tracking-wide">SFX OFF</span>
              </>
            )}
          </button>

          {/* Moments Gallery Button */}
          <button
            onClick={() => {
              playSound('modalOpen');
              onOpenGallery?.();
            }}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#151a2e] hover:bg-[#1f2746] border border-[#2d385e] hover:border-[#6c63ff] text-slate-200 hover:text-white font-semibold text-xs transition-all hover:scale-105 shadow-md"
          >
            <Camera className="w-3.5 h-3.5 text-[#6c63ff]" />
            <span>Gallery</span>
          </button>

          <button
            onClick={() => {
              playSound('click');
              onOpenResume();
            }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#6c63ff] to-[#4d44db] text-white font-semibold text-xs transition-all hover:scale-105 shadow-lg shadow-indigo-500/30 active:scale-95"
          >
            <FileText className="w-4 h-4" />
            <span>Resume PDF</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          {/* Mobile Sound Toggle */}
          <button
            onClick={handleSoundToggle}
            className={`p-2 rounded-lg border text-xs ${
              soundOn
                ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-400'
                : 'bg-[#151a2e] border-slate-800 text-slate-400'
            }`}
            title="Toggle SFX"
          >
            {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Mobile Gallery Button */}
          <button
            onClick={() => {
              playSound('modalOpen');
              onOpenGallery?.();
            }}
            className="p-2 rounded-lg bg-[#151a2e] border border-slate-800 text-[#a78bfa]"
            title="Moments Gallery"
          >
            <Camera className="w-5 h-5" />
          </button>

          <button
            onClick={() => {
              playSound('click');
              onOpenResume();
            }}
            className="p-2 rounded-lg bg-[#151a2e] border border-slate-800 text-[#6c63ff]"
          >
            <FileText className="w-5 h-5" />
          </button>
          <button
            onClick={() => {
              playSound('click');
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2 rounded-lg bg-[#151a2e] text-slate-300 hover:text-[#6c63ff] border border-slate-800"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0f1d]/98 border-b border-slate-800 px-4 py-6 backdrop-blur-2xl transition-all">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#151a2e] border border-slate-800 text-sm font-medium text-slate-200 hover:text-[#6c63ff]"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                playSound('modalOpen');
                onOpenGallery?.();
              }}
              className="flex items-center justify-center gap-2 mt-2 w-full py-3 rounded-xl bg-[#151a2e] border border-[#2d385e] text-white font-semibold text-sm shadow-md hover:border-[#6c63ff]"
            >
              <Camera className="w-4 h-4 text-[#6c63ff]" />
              Moments Gallery
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex items-center justify-center gap-2 mt-1 w-full py-3 rounded-xl bg-gradient-to-r from-[#6c63ff] to-[#4d44db] text-white font-semibold text-sm shadow-md"
            >
              <FileText className="w-4 h-4" />
              View PDF Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

