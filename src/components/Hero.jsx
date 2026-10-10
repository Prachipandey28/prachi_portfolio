import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, ExternalLink, MapPin, Mail, Code2 } from 'lucide-react';
import prachiPhoto from '../assets/prachi.jpeg';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TITLES = [
  "B.Tech AI & Data Science Student",
  "Machine Learning & Data Analyst",
  "Computer Vision & Deep Learning Developer",
  "Python & SQL Specialist"
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
    <section id="home" className="relative min-h-[90vh] pt-28 pb-16 flex flex-col justify-center items-center">
      
      {/* Background Soft Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[500px] bg-sky-500/10 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Top Status Pill */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-800 backdrop-blur-md text-xs font-medium text-slate-300 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>B.Tech AI & DS</span>
            <span className="text-slate-600">•</span>
            <span className="text-sky-400 font-semibold">CGPA: 9.3 / 10</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Arya College of Engineering & IT</span>
          </div>
        </motion.div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Bio */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight"
            >
              Hi, I'm <span className="gradient-text-sky">PRACHI PANDEY</span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-xl sm:text-2xl font-medium text-slate-300 h-10 flex items-center justify-center lg:justify-start gap-1"
            >
              <span className="text-sky-400">{displayText}</span>
              <span className="w-0.5 h-6 bg-sky-400 animate-pulse"></span>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Passionate Artificial Intelligence & Data Science undergraduate at Arya College of Engineering & IT (9.3 CGPA). 
              Specializing in Machine Learning pipelines, Computer Vision (YOLOv8), Data Analytics, Python, SQL, and building end-to-end data-driven solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start items-center"
            >
              <button
                onClick={onOpenResume}
                className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm flex items-center gap-2 transition-all duration-200 shadow-lg shadow-sky-500/20 active:scale-95"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume PDF</span>
              </button>

              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-medium text-sm flex items-center gap-2 transition-all duration-200"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>

              {/* Social Icon Links */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href="https://github.com/prachipandey28"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/prachi-pandey-0042a8328/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-sky-400 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://leetcode.com/prachipandey"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode Profile"
                  className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1 text-xs font-semibold"
                >
                  <Code2 className="w-4 h-4" />
                  <span>LeetCode</span>
                </a>
              </div>
            </motion.div>

            {/* Empirical Metrics Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto lg:mx-0"
            >
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white">9.3 <span className="text-xs font-normal text-slate-400">/ 10</span></div>
                <div className="text-xs text-slate-400 mt-1">B.Tech AI & DS CGPA</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-sm">
                <div className="text-2xl font-bold text-sky-400">100+</div>
                <div className="text-xs text-slate-400 mt-1">LeetCode Solved (Rank 1470)</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-sm">
                <div className="text-2xl font-bold text-emerald-400">&gt;85%</div>
                <div className="text-xs text-slate-400 mt-1">YOLOv8 AI Detection Acc.</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-sm">
                <div className="text-2xl font-bold text-amber-400">Bronze</div>
                <div className="text-xs text-slate-400 mt-1">CodeChef Badge (100+ Solved)</div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="w-full max-w-md p-6 rounded-2xl bg-slate-900/70 border border-slate-800/90 shadow-2xl backdrop-blur-xl relative"
            >
              <div className="flex flex-col items-center text-center">
                {/* Profile Image */}
                <div className="relative mb-5">
                  <div className="w-36 h-36 rounded-2xl overflow-hidden border-2 border-slate-700 shadow-xl p-1 bg-slate-950">
                    <img 
                      src={prachiPhoto} 
                      alt="Prachi Pandey" 
                      className="w-full h-full object-cover rounded-xl"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400";
                      }}
                    />
                  </div>
                  <span className="absolute bottom-1 right-1 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-slate-900"></span>
                  </span>
                </div>

                {/* Name & Title */}
                <h2 className="text-2xl font-bold text-white">Prachi Pandey</h2>
                <p className="text-xs font-mono text-sky-400 mt-1 uppercase tracking-wider">AI & Data Science Specialist</p>

                <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>Jaipur, Rajasthan, India</span>
                </div>

                <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">
                  <Mail className="w-3.5 h-3.5 text-slate-500" />
                  <a href="mailto:prachipandey1528@gmail.com" className="hover:text-sky-400 transition-colors">
                    prachipandey1528@gmail.com
                  </a>
                </div>

                {/* Key Highlights */}
                <div className="w-full mt-6 pt-5 border-t border-slate-800/80 text-left space-y-2.5 text-xs text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Education:</span>
                    <span className="font-semibold text-slate-200">Arya College of Engg & IT</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Current CGPA:</span>
                    <span className="font-semibold text-emerald-400">9.3 / 10.0</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Certifications:</span>
                    <span className="font-semibold text-slate-200">HackerRank SQL Inter. & Basic</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Availability:</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[11px] font-medium border border-emerald-500/20">
                      Open to AI/ML Roles
                    </span>
                  </div>
                </div>

                {/* Quick GitHub Badge */}
                <a
                  href="https://github.com/prachipandey28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-5 py-2.5 px-4 rounded-xl bg-slate-950 hover:bg-slate-850 border border-slate-800 text-xs font-mono text-slate-300 flex items-center justify-between transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-slate-400 group-hover:text-white" />
                    <span>github.com/prachipandey28</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-400" />
                </a>

              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}

