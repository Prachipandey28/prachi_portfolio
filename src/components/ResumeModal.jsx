import { motion } from 'framer-motion';
import { X, Download, FileText, Mail, MapPin, Globe, Printer } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-[#090d1e] border border-cyan-500/40 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-cyan-400" />
            <div>
              <h2 className="text-xl font-orbitron font-bold text-white">Prachi_Pandey_Resume.pdf</h2>
              <p className="text-xs font-mono text-cyan-400/80">B.Tech AI & Data Science Student | Arya College of Engg & IT</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono flex items-center gap-2 hover:border-cyan-400 hover:text-cyan-400"
            >
              <Printer className="w-4 h-4" />
              Print / Save PDF
            </button>
            <a
              href="https://www.linkedin.com/in/prachi-pandey-0042a8328"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 rounded-xl bg-cyan-400 text-black text-xs font-mono font-bold flex items-center gap-2 shadow-glow-cyan hover:scale-105 transition-transform"
            >
              <Download className="w-4 h-4" />
              LinkedIn Profile
            </a>
          </div>
        </div>

        {/* Resume Content View */}
        <div className="mt-8 space-y-8 text-slate-200 text-xs sm:text-sm">
          
          {/* Header Info */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-wrap justify-between items-center gap-4">
            <div>
              <h1 className="text-2xl font-orbitron font-extrabold text-white">PRACHI PANDEY</h1>
              <p className="text-xs font-mono text-cyan-400 mt-0.5">B.Tech Artificial Intelligence & Data Science Student</p>
            </div>
            <div className="flex flex-col gap-1 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-cyan-400" /> prachipandey1528@gmail.com</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-cyan-400" /> Bhilwara / Jaipur, Rajasthan</span>
              <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-cyan-400" /> github.com/Prachipandey28</span>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h3 className="text-sm font-orbitron font-bold text-cyan-400 uppercase tracking-wider border-b border-slate-800 pb-2">
              Summary Profile
            </h3>
            <p className="mt-3 text-slate-300 leading-relaxed">
              I am a B.Tech student specializing in Artificial Intelligence and Data Science at Arya College of Engineering & IT, Jaipur. Passionate about building intelligent solutions, I enjoy working on Machine Learning, Data Analytics, Artificial Intelligence, and Frontend Development projects. My technical skills include Python, C++, SQL, HTML, CSS, JavaScript, React, and Machine Learning fundamentals. Currently seeking internship opportunities in AI, Machine Learning, Data Science, and Software Development.
            </p>
          </div>

          {/* Core Technical Expertise */}
          <div>
            <h3 className="text-sm font-orbitron font-bold text-cyan-400 uppercase tracking-wider border-b border-slate-800 pb-2">
              Core Technical Skills & Certifications
            </h3>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                <span className="text-cyan-300 font-bold">AI & Data Science:</span> Python, Machine Learning, Data Analytics, Data Modeling, Recommendation Systems
              </div>
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                <span className="text-purple-300 font-bold">Languages & DB:</span> Python, C++, SQL, JavaScript (ES6+), HTML5, CSS3, React
              </div>
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                <span className="text-emerald-300 font-bold">Developer Tools:</span> Microsoft VS Code, Git, GitHub, Salesforce Tools, Canva
              </div>
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                <span className="text-amber-300 font-bold">Certifications:</span> SQL (Basic), CodeForge'25, Salesforce AI Builders Day, AI for Beginners
              </div>
            </div>
          </div>

          {/* Internship Experience */}
          <div>
            <h3 className="text-sm font-orbitron font-bold text-cyan-400 uppercase tracking-wider border-b border-slate-800 pb-2">
              Internship Experience
            </h3>
            <div className="mt-4 space-y-6">
              <div>
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-white text-base">Machine Learning Intern</h4>
                  <span className="font-mono text-xs text-cyan-400">May 2026 - July 2026</span>
                </div>
                <div className="text-xs font-mono text-slate-400">SkillInfyTech IT Solutions Private Limited</div>
                <ul className="mt-2 space-y-1.5 text-slate-300 text-xs list-disc list-inside">
                  <li>Working on Machine Learning concepts, data analysis, and model development.</li>
                  <li>Participating in industry-oriented projects under direct mentorship.</li>
                  <li>Strengthening problem-solving and analytical data modeling skills.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-white text-base">AI Web Development Intern</h4>
                  <span className="font-mono text-xs text-cyan-400">May 2026 - July 2026</span>
                </div>
                <div className="text-xs font-mono text-slate-400">InAmigos Foundation (IAF) | Internshala Selection</div>
                <ul className="mt-2 space-y-1.5 text-slate-300 text-xs list-disc list-inside">
                  <li>Selected for AI Web Development Internship focusing on AI-powered web solutions.</li>
                  <li>Collaborating with team members on frontend development and website enhancement.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-white text-base">Salesforce Program Architect Intern</h4>
                  <span className="font-mono text-xs text-cyan-400">June 2025 - August 2025</span>
                </div>
                <div className="text-xs font-mono text-slate-400">TechForce Academy Australia</div>
                <ul className="mt-2 space-y-1.5 text-slate-300 text-xs list-disc list-inside">
                  <li>Structured internship focused on Salesforce architecture, CRM solutions, and cloud workflow automation.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-sm font-orbitron font-bold text-cyan-400 uppercase tracking-wider border-b border-slate-800 pb-2">
              Education
            </h3>
            <div className="mt-3 space-y-3">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-white">Arya College of Engineering and IT</h4>
                  <p className="text-xs font-mono text-slate-400">B.Tech in Artificial Intelligence & Data Science</p>
                </div>
                <span className="font-mono text-xs text-purple-400">2023 - 2027</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-white">Birla Shiksha Kendra School</h4>
                  <p className="text-xs font-mono text-slate-400">Higher Secondary School, PCM</p>
                </div>
                <span className="font-mono text-xs text-purple-400">2022 - 2023</span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-white">Sterling Academy School</h4>
                  <p className="text-xs font-mono text-slate-400">Secondary School, RBSE</p>
                </div>
                <span className="font-mono text-xs text-purple-400">2020 - 2021</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Close Button */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-white border border-slate-800 text-xs font-mono"
          >
            Close Resume
          </button>
        </div>

      </motion.div>
    </div>
  );
}
