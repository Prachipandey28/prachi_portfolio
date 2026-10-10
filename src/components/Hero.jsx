import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Send, Mail, Phone, Bot, Database, Brain, ArrowDown } from 'lucide-react';
import prachiPhoto from '../assets/prachi.jpeg';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TITLES = [
  "B.Tech AI & Data Science Student",
  "Machine Learning & AI Developer",
  "Computer Vision (YOLOv8) Specialist",
  "Data Science & Analytics Engineer"
];

export default function Hero({ onOpenResume }) {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetText = TITLES[currentTitleIndex];
    const typingSpeed = isDeleting ? 35 : 70;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(targetText.substring(0, displayText.length + 1));
        if (displayText.length === targetText.length) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setDisplayText(targetText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % TITLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitleIndex]);

  return (
    <section id="home" className="relative min-h-[92vh] pt-32 pb-16 flex flex-col justify-between items-center overflow-hidden">
      
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-[#6c63ff]/15 blur-[160px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Greeting & Bio */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            <motion.h3 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg sm:text-xl font-semibold text-[#818cf8] mb-2"
            >
              Hello, It's Me
            </motion.h3>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight"
            >
              PRACHI PANDEY
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-3 text-xl sm:text-2xl font-semibold text-slate-200 h-10 flex items-center justify-center lg:justify-start gap-1"
            >
              <span>And I'm a</span>
              <span className="text-[#38bdf8] font-bold ml-1">{displayText}</span>
              <span className="w-0.5 h-6 bg-[#38bdf8] animate-pulse"></span>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Building intelligent systems to solve real-world problems through Artificial Intelligence, Computer Vision, and Data Science at Arya College of Engineering & IT (9.3 CGPA).
            </motion.p>

            {/* Social Icon Circles */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 flex items-center justify-center lg:justify-start gap-3"
            >
              <a
                href="https://www.linkedin.com/in/prachi-pandey-0042a8328/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="w-11 h-11 rounded-full bg-[#151a2e] border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#6c63ff] hover:border-[#6c63ff] transition-all hover:scale-110 shadow-md"
              >
                <LinkedinIcon />
              </a>

              <a
                href="https://github.com/prachipandey28"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="w-11 h-11 rounded-full bg-[#151a2e] border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#6c63ff] hover:border-[#6c63ff] transition-all hover:scale-110 shadow-md"
              >
                <GithubIcon />
              </a>

              <a
                href="mailto:prachipandey1528@gmail.com"
                aria-label="Send Email"
                className="w-11 h-11 rounded-full bg-[#151a2e] border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#6c63ff] hover:border-[#6c63ff] transition-all hover:scale-110 shadow-md"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href="tel:+919352103753"
                title="+91 93521 03753"
                aria-label="Call Phone Number"
                className="w-11 h-11 rounded-full bg-[#151a2e] border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#6c63ff] hover:border-[#6c63ff] transition-all hover:scale-110 shadow-md"
              >
                <Phone className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start items-center"
            >
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#6c63ff] to-[#4d44db] text-white font-semibold text-sm flex items-center gap-2 transition-all hover:scale-105 shadow-lg shadow-indigo-500/30"
              >
                <span>Contact Me</span>
                <Send className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-8 py-3.5 rounded-full border-2 border-[#6c63ff] text-[#818cf8] hover:bg-[#6c63ff] hover:text-white font-semibold text-sm flex items-center gap-2 transition-all hover:scale-105"
              >
                <FileText className="w-4 h-4" />
                <span>View CV / Resume</span>
              </button>
            </motion.div>

          </div>

          {/* Right Column: Profile Photo Card with Glow Ring & Floating Icons */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {/* Profile Image Circle Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full profile-glow-ring p-1.5 bg-gradient-to-tr from-[#6c63ff] to-[#38bdf8] shadow-2xl">
                <img 
                  src={prachiPhoto} 
                  alt="Prachi Pandey" 
                  className="w-full h-full object-cover rounded-full border-4 border-[#0c0f1d]"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400";
                  }}
                />
              </div>

              {/* Floating Element Badges around Photo */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-3 -left-3 p-3 rounded-2xl bg-[#151a2e] border border-slate-700/80 text-[#38bdf8] shadow-xl"
              >
                <Bot className="w-6 h-6" />
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/2 -right-6 -translate-y-1/2 p-3 rounded-2xl bg-[#151a2e] border border-slate-700/80 text-[#6c63ff] shadow-xl"
              >
                <Brain className="w-6 h-6" />
              </motion.div>

              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-3 left-6 p-3 rounded-2xl bg-[#151a2e] border border-slate-700/80 text-emerald-400 shadow-xl"
              >
                <Database className="w-6 h-6" />
              </motion.div>

            </motion.div>
          </div>

        </div>

      </div>

      {/* Scroll Down Animated Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 0.8 }, y: { repeat: Infinity, duration: 2 } }}
        className="flex flex-col items-center gap-1.5 text-xs font-mono text-slate-500 cursor-pointer pt-6"
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span>Scroll Down</span>
        <ArrowDown className="w-4 h-4 text-[#6c63ff]" />
      </motion.div>

    </section>
  );
}


