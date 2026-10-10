import { motion } from 'framer-motion';
import { X, FileText, Mail, MapPin, Phone, Printer, Code2 } from 'lucide-react';

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

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-slate-900 border border-slate-800 rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative text-slate-200"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Action Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sky-400">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Prachi_Pandey_Resume.pdf</h2>
              <p className="text-xs text-slate-400">Official 1-Page Resume • Arya College of Engineering & IT</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs font-medium flex items-center gap-2 hover:border-slate-700"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
            <a
              href="https://www.linkedin.com/in/prachi-pandey-0042a8328/"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-semibold flex items-center gap-2 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* 1-Page PDF Digital View */}
        <div className="mt-6 p-6 sm:p-8 bg-slate-950 rounded-xl border border-slate-800 space-y-6 text-xs sm:text-sm">
          
          {/* Resume Header */}
          <div className="border-b border-slate-800 pb-5">
            <h1 className="text-3xl font-extrabold text-white tracking-tight">PRACHI PANDEY</h1>
            <p className="text-xs font-mono text-sky-400 mt-1 uppercase tracking-wider">
              B.Tech Artificial Intelligence & Data Science Student
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                +91 93521 03753
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                prachipandey1528@gmail.com
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                Jaipur, Rajasthan
              </span>
            </div>

            <div className="mt-2.5 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-slate-400">
              <a href="https://www.linkedin.com/in/prachi-pandey-0042a8328/" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-sky-400">
                <LinkedinIcon className="w-3.5 h-3.5 text-sky-400" />
                linkedin.com/in/prachi-pandey
              </a>
              <a href="https://github.com/prachipandey28" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-sky-400">
                <GithubIcon className="w-3.5 h-3.5 text-sky-400" />
                github.com/prachipandey28
              </a>
              <a href="https://leetcode.com/prachipandey" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-sky-400">
                <Code2 className="w-3.5 h-3.5 text-amber-400" />
                leetcode.com/prachipandey
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider border-b border-slate-800 pb-1.5">
              Education
            </h3>
            <div className="mt-3 space-y-3">
              <div className="flex flex-wrap justify-between items-start gap-1">
                <div>
                  <h4 className="font-bold text-white">Arya College of Engineering & IT</h4>
                  <p className="text-xs text-slate-300">Bachelor of Technology (B.Tech) - Artificial Intelligence & Data Science</p>
                </div>
                <div className="text-right font-mono text-xs">
                  <span className="text-emerald-400 font-bold block">CGPA: 9.3 / 10.0</span>
                  <span className="text-slate-400">2023 - Present</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-between items-start gap-1">
                <div>
                  <h4 className="font-bold text-white">Birla Shiksha Kendra School</h4>
                  <p className="text-xs text-slate-300">Higher Secondary School (12th CBSE) - PCM</p>
                </div>
                <div className="text-right font-mono text-xs">
                  <span className="text-slate-300 font-semibold block">Percentage: 68%</span>
                  <span className="text-slate-400">2022 - 2023</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-between items-start gap-1">
                <div>
                  <h4 className="font-bold text-white">Sterling Academy School</h4>
                  <p className="text-xs text-slate-300">Secondary School (10th RBSE)</p>
                </div>
                <div className="text-right font-mono text-xs">
                  <span className="text-slate-300 font-semibold block">Percentage: 88%</span>
                  <span className="text-slate-400">2020 - 2021</span>
                </div>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider border-b border-slate-800 pb-1.5">
              Key Academic Projects
            </h3>
            <div className="mt-3 space-y-4">
              <div>
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-white">AI-Based Bone Cancer Detection System</h4>
                  <span className="text-xs font-mono text-slate-400">Python, YOLOv8, OpenCV, Flask, SQL</span>
                </div>
                <ul className="mt-1.5 space-y-1 text-xs text-slate-300 list-disc list-inside">
                  <li>Trained YOLOv8 object detection model on medical X-ray datasets, achieving &gt;85% diagnostic accuracy.</li>
                  <li>Engineered Flask web API for near real-time image uploads and lesion region highlighting.</li>
                  <li>Logged patient scan history, timestamps, and confidence scores into SQL database.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-white">Student Performance Prediction System</h4>
                  <span className="text-xs font-mono text-slate-400">Python, SQL, Scikit-learn, Streamlit, Plotly</span>
                </div>
                <ul className="mt-1.5 space-y-1 text-xs text-slate-300 list-disc list-inside">
                  <li>Built automated data pipeline for 10+ student demographic and academic features.</li>
                  <li>Tuned hyperparameters via GridSearchCV, yielding a ~12% F1-score lift over baseline models.</li>
                  <li>Deployed Streamlit dashboard with interactive Plotly visual analytics for educator risk assessments.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Achievements & Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider border-b border-slate-800 pb-1.5">
                Achievements & Coding Profiles
              </h3>
              <ul className="mt-2.5 space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                <li><strong className="text-white">LeetCode:</strong> 100+ Solved (Rank 1470)</li>
                <li><strong className="text-white">CodeChef:</strong> Bronze Badge (100+ Solved)</li>
                <li><strong className="text-white">IEEE Project Expo:</strong> Consolation Prize</li>
                <li><strong className="text-white">Scintillations 2024:</strong> 2nd Position Winner</li>
                <li><strong className="text-white">Victory-24 Fest:</strong> 3rd Position Winner</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider border-b border-slate-800 pb-1.5">
                Certifications
              </h3>
              <ul className="mt-2.5 space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                <li><strong className="text-white">HackerRank:</strong> SQL Intermediate Certification</li>
                <li><strong className="text-white">HackerRank:</strong> SQL Basic Certification</li>
                <li><strong className="text-white">HP LIFE:</strong> AI for Beginners</li>
              </ul>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider border-b border-slate-800 pb-1.5">
              Technical Skills Breakdown
            </h3>
            <div className="mt-3 space-y-2 text-xs">
              <div>
                <span className="font-semibold text-white">Languages:</span> <span className="text-slate-300">Python, SQL, C++</span>
              </div>
              <div>
                <span className="font-semibold text-white">Data Science & ML:</span> <span className="text-slate-300">Pandas, NumPy, MySQL, Machine Learning, Deep Learning, PyTorch, TensorFlow, Scikit-learn, YOLOv8, Data Modeling, Data Analytics</span>
              </div>
              <div>
                <span className="font-semibold text-white">Tools & IDEs:</span> <span className="text-slate-300">Git, GitHub, VS Code, Jupyter Notebook, Google Colab</span>
              </div>
              <div>
                <span className="font-semibold text-white">Core Computer Science:</span> <span className="text-slate-300">Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP), Database Management Systems (DBMS)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-950 text-slate-300 hover:text-white border border-slate-800 text-xs font-medium"
          >
            Close Modal
          </button>
        </div>

      </motion.div>
    </div>
  );
}
