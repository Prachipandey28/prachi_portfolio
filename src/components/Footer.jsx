import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="py-12 bg-[#080a14] border-t border-[#1b2238] text-[#94a3b8] text-xs relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="text-center md:text-left">
          <div className="font-bold text-white text-lg tracking-wider">
            PRACHI<span style={{ color: '#6c63ff' }}>.AI</span>
          </div>
          <p className="text-xs text-[#94a3b8] mt-1 font-medium">
            AI Enthusiast & Problem Solver • B.Tech AI & Data Science
          </p>
          <p className="text-[11px] text-[#64748b] mt-1">
            © {new Date().getFullYear()} Prachi Pandey. All Rights Reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#94a3b8] hover:text-[#6c63ff] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Back to top button */}
        <div>
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full text-white transition-all shadow-lg hover:scale-110 active:scale-95 group"
            style={{ background: 'linear-gradient(135deg, #6c63ff 0%, #4d44db 100%)' }}
            title="Scroll to Top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}


