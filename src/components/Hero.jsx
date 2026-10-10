import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Cpu, Sparkles, Terminal, FileText, ShieldCheck, Activity } from 'lucide-react';
import prachiPhoto from '../assets/prachi.jpeg';

const TITLES = [
  "B.Tech AI & Data Science Student",
  "Machine Learning Intern",
  "AI Web Developer",
  "Data Science & Analytics Specialist"
];

export default function Hero({ onOpenResume, onOpenAiLab }) {

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Quick Terminal state inside hero
  const [terminalOutput, setTerminalOutput] = useState([
    { type: 'sys', text: '> Initializing Prachi Pandey Neural Kernel...' },
    { type: 'success', text: '> Arya College of Engineering & IT [AI & DS Dept]' },
    { type: 'info', text: '> Status: Seeking AI/ML, Data Science & Web Internships' }
  ]);
  const [terminalInput, setTerminalInput] = useState('');

  useEffect(() => {
    const targetText = TITLES[currentTitleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(targetText.substring(0, displayText.length + 1));
        if (displayText.length === targetText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
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

  const handleCommandSubmit = (cmd) => {
    const command = (cmd || terminalInput).toLowerCase().trim();
    if (!command) return;

    let response = [];
    if (command === 'help') {
      response = [
        { type: 'cmd', text: `$ ${command}` },
        { type: 'sys', text: 'Available Commands:' },
        { type: 'info', text: '  - skills : List Python, C++, SQL, React & ML skills' },
        { type: 'info', text: '  - education: View Arya College of Engineering & IT details' },
        { type: 'info', text: '  - internships: Display ML & Web dev internship experience' },
        { type: 'info', text: '  - clear : Clear terminal screen' }
      ];
    } else if (command === 'skills') {
      response = [
        { type: 'cmd', text: `$ ${command}` },
        { type: 'success', text: 'Technical Skills:' },
        { type: 'info', text: '  Python | C++ | SQL | HTML/CSS | JavaScript | React | Machine Learning | Data Modeling' }
      ];
    } else if (command === 'education') {
      response = [
        { type: 'cmd', text: `$ ${command}` },
        { type: 'success', text: 'Arya College of Engineering & IT, Jaipur' },
        { type: 'info', text: '  • B.Tech in Artificial Intelligence & Data Science (2023 - 2027)' }
      ];
    } else if (command === 'internships') {
      response = [
        { type: 'cmd', text: `$ ${command}` },
        { type: 'success', text: 'SkillInfyTech (ML Intern) | InAmigos Foundation (AI Web Dev Intern) | TechForce Academy' }
      ];
    } else if (command === 'clear') {
      setTerminalOutput([]);
      setTerminalInput('');
      return;
    } else {
      response = [
        { type: 'cmd', text: `$ ${command}` },
        { type: 'error', text: `Command non-executable: '${command}'. Type 'help' for options.` }
      ];
    }

    setTerminalOutput(prev => [...prev, ...response]);
    setTerminalInput('');
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center items-center overflow-hidden">
      
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-600/15 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Top Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(0,240,255,0.15)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-mono text-cyan-300 tracking-wider uppercase">
              B.TECH AI & DATA SCIENCE • ARYA COLLEGE, JAIPUR
            </span>
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          </div>
        </motion.div>

        {/* Hero Grid: Left Content & Right Visual Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-4">
          
          {/* Left Column: Heading & Bio */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-orbitron font-extrabold tracking-tight text-white leading-tight"
            >
              Hi, I'm <span className="gradient-text-cyan">PRACHI PANDEY</span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-4 text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300 h-12 flex items-center justify-center lg:justify-start gap-2"
            >
              <span className="text-cyan-400">{displayText}</span>
              <span className="w-0.5 h-7 bg-cyan-400 animate-pulse"></span>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mx-auto lg:mx-0"
            >
              Passionate B.Tech student specializing in Artificial Intelligence and Data Science. Experienced in Machine Learning, Data Analytics, Python, C++, SQL, React, and building AI-driven real-world web applications.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 text-black font-extrabold text-sm flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-glow-cyan hover:shadow-cyan-400/50"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#ai-lab"
                onClick={onOpenAiLab}
                className="px-7 py-3.5 rounded-2xl bg-slate-900/90 border border-purple-500/40 text-purple-300 font-semibold text-sm flex items-center gap-2.5 transition-all duration-300 hover:border-purple-400 hover:bg-purple-500/10 hover:text-white"
              >
                <Bot className="w-4 h-4 text-purple-400" />
                <span>Launch Prachi AI Assistant</span>
              </a>

              <button
                onClick={onOpenResume}
                className="px-6 py-3.5 rounded-2xl bg-slate-900/60 border border-slate-700/80 text-slate-300 font-medium text-sm flex items-center gap-2 transition-all hover:bg-slate-800 hover:text-cyan-400 hover:border-cyan-500/40"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Full Resume</span>
              </button>
            </motion.div>

            {/* Quick Metrics Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl mx-auto lg:mx-0"
            >
              <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
                <div className="text-2xl font-orbitron font-extrabold text-cyan-400">4+</div>
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">Internships Completed</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
                <div className="text-2xl font-orbitron font-extrabold text-purple-400">4+</div>
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">Honors & Awards</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
                <div className="text-2xl font-orbitron font-extrabold text-emerald-400">2027</div>
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">B.Tech AI & DS Batch</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
                <div className="text-2xl font-orbitron font-extrabold text-amber-400">100%</div>
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">Open to AI/ML Roles</div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Cyber Avatar & Terminal Simulation */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Avatar Profile Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative p-6 rounded-3xl glass-panel border border-cyan-500/30 shadow-2xl overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Cpu className="w-32 h-32 text-cyan-400" />
              </div>

              <div className="flex items-center gap-5">
                <div className="relative">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-cyan-400/80 shadow-glow-cyan p-0.5 bg-gradient-to-tr from-cyan-400 to-purple-600">
                    <img 
                      src={prachiPhoto} 
                      alt="Prachi Pandey - AI & Data Science" 
                      className="w-full h-full object-cover rounded-[14px]"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400";
                      }}
                    />
                  </div>
                  <span className="absolute -bottom-1 -right-1 flex h-5 w-5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-5 w-5 bg-emerald-500 border-2 border-[#050811]"></span>
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase">AI & Data Science Student</span>
                  <h3 className="text-xl font-orbitron font-bold text-white mt-1">PRACHI PANDEY</h3>
                  <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    Arya College of Engg & IT
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-[11px] font-mono text-slate-300 bg-slate-900/90 px-3 py-1 rounded-lg border border-slate-800">
                    <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                    <span>Open for Internships</span>
                  </div>
                </div>
              </div>

            </motion.div>

            {/* Interactive Terminal Simulator Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-2xl bg-black/80 border border-cyan-500/30 overflow-hidden font-mono text-xs shadow-cyber-card"
            >
              {/* Terminal Titlebar */}
              <div className="px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <span className="ml-2 text-slate-400 text-[11px]">prachi@neural-system:~</span>
                </div>
                <div className="text-[10px] text-cyan-400/70 uppercase tracking-widest flex items-center gap-1">
                  <Terminal className="w-3 h-3" />
                  CLI v4.2
                </div>
              </div>

              {/* Terminal Logs View */}
              <div className="p-4 h-48 overflow-y-auto space-y-2 bg-[#040711]">
                {terminalOutput.map((item, idx) => (
                  <div key={idx} className={`leading-relaxed ${
                    item.type === 'cmd' ? 'text-white font-bold' :
                    item.type === 'success' ? 'text-emerald-400' :
                    item.type === 'error' ? 'text-rose-400' :
                    item.type === 'sys' ? 'text-cyan-400' : 'text-slate-300'
                  }`}>
                    {item.text}
                  </div>
                ))}
              </div>

              {/* Quick Click Tags */}
              <div className="px-4 py-2 bg-slate-950 border-t border-slate-900 flex items-center gap-2 overflow-x-auto text-[10px]">
                <span className="text-slate-500">Quick run:</span>
                {['help', 'skills', 'metrics', 'projects', 'clear'].map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => handleCommandSubmit(cmd)}
                    className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400 transition-colors"
                  >
                    {cmd}
                  </button>
                ))}
              </div>

              {/* Terminal Input Box */}
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleCommandSubmit();
                }}
                className="px-4 py-2.5 bg-slate-900/60 border-t border-slate-800 flex items-center gap-2"
              >
                <span className="text-cyan-400">$</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="type command (e.g. skills)..."
                  className="w-full bg-transparent text-white focus:outline-none placeholder:text-slate-600"
                />
              </form>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
