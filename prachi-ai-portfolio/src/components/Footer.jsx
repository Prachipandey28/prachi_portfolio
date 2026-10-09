import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowUp, Terminal, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#03050c] border-t border-slate-900 text-slate-400 font-mono text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-400">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <span className="font-orbitron font-extrabold text-white text-sm">PRACHI<span className="text-cyan-400">.AI</span></span>
            <p className="text-[10px] text-slate-500">© 2026 PRACHI. ALL RIGHTS RESERVED.</p>
          </div>
        </div>

        {/* Center Live System Time */}
        <div className="flex items-center gap-4 px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px]">
          <span className="flex items-center gap-1.5 text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            SYS_TIME: {time || '19:41:07'}
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-emerald-400">UPTIME: 99.99%</span>
        </div>

        {/* Right Action */}
        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500 transition-all group"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
