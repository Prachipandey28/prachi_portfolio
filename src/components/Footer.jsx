import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 bg-slate-950 border-t border-slate-900 text-slate-400 text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left Brand */}
        <div className="flex items-center gap-3">
          <div>
            <span className="font-bold text-white text-sm">Prachi Pandey</span>
            <span className="text-slate-600 mx-2">•</span>
            <span className="text-slate-400 text-xs">B.Tech AI & Data Science</span>
            <p className="text-[11px] text-slate-500 mt-0.5">© {new Date().getFullYear()} Prachi Pandey. All rights reserved.</p>
          </div>
        </div>

        {/* Right Action */}
        <div className="flex items-center gap-4">
          <span className="text-xs text-slate-500 font-mono">Jaipur, Rajasthan, India</span>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all group"
            title="Scroll to Top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}

