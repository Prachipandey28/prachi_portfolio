import React, { useState, useEffect } from 'react';
import { Bot, Terminal, FileText, Send, Sparkles, Menu, X, Cpu, Layers, User, Code2, Briefcase } from 'lucide-react';

export default function Navbar({ onOpenResume, onToggleTerminal, isTerminalOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'projects', 'ai-lab', 'skills', 'experience', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Layers },
    { id: 'ai-lab', label: 'AI Lab', icon: Bot },
    { id: 'skills', label: 'Tech Matrix', icon: Cpu },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Send },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'py-3 bg-[#050811]/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-black/50' : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 p-[1px] shadow-glow-cyan transition-transform group-hover:scale-105">
            <div className="w-full h-full bg-[#070b19] rounded-[11px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-orbitron font-extrabold text-lg tracking-wider text-white flex items-center gap-2">
              PRACHI<span className="text-cyan-400">.AI</span>
            </span>
            <span className="text-[10px] font-mono text-cyan-400/70 tracking-widest uppercase flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              STATUS: ONLINE
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-[0_0_12px_rgba(0,240,255,0.2)]'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onToggleTerminal}
            className={`p-2.5 rounded-xl border text-xs font-mono transition-all flex items-center gap-2 ${
              isTerminalOpen 
                ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-glow-cyan' 
                : 'bg-slate-900/80 border-slate-700/60 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400'
            }`}
            title="Toggle Neural Terminal"
          >
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span className="hidden lg:inline">CLI Mode</span>
          </button>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold text-xs transition-all hover:scale-105 shadow-glow-cyan hover:shadow-cyan-400/40"
          >
            <FileText className="w-4 h-4" />
            Resume
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={onToggleTerminal}
            className="p-2 rounded-lg bg-slate-900 border border-cyan-500/30 text-cyan-400"
          >
            <Terminal className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900/80 text-slate-300 hover:text-cyan-400 border border-slate-800"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070b18]/95 border-b border-cyan-500/20 px-4 py-6 backdrop-blur-2xl transition-all">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-800/80 text-sm font-medium text-slate-200 hover:text-cyan-400 hover:border-cyan-500/30"
                >
                  <Icon className="w-4 h-4 text-cyan-400" />
                  {link.label}
                </a>
              );
            })}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex items-center justify-center gap-2 mt-2 w-full py-3 rounded-xl bg-cyan-400 text-black font-semibold text-sm shadow-glow-cyan"
            >
              <FileText className="w-4 h-4" />
              View & Download Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
