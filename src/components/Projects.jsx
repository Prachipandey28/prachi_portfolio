import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, X, Code2, CheckCircle2 } from 'lucide-react';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Healthcare AI', 'Machine Learning & Analytics'];

  const projects = [
    {
      id: 'bone-cancer-detection',
      title: 'AI-Based Bone Cancer Detection System',
      subtitle: 'Computer Vision & Clinical Diagnostic Platform',
      category: 'Healthcare AI',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
      description: 'Deep learning healthcare system built to assist radiographical analysis by detecting bone cancer anomalies in digital X-ray images. Implemented YOLOv8 object detection model with OpenCV preprocessing, Flask real-time web interface, and SQL patient scan logging.',
      architecture: 'X-Ray Scan Upload -> OpenCV Preprocessing & Resizing -> YOLOv8 Neural Network -> Bounding Box Render -> SQL Patient DB',
      bullets: [
        'Trained YOLOv8 model on annotated medical X-ray datasets, achieving >85% diagnostic accuracy.',
        'Engineered near real-time Flask web API for medical image uploading and automated lesion region highlighting.',
        'Designed SQL database schema to securely log patient scan history, timestamps, and model confidence scores.'
      ],
      metrics: [
        { label: 'Model Accuracy', value: '> 85%' },
        { label: 'Detection Model', value: 'YOLOv8' },
        { label: 'Web Server', value: 'Flask API' },
        { label: 'Image Engine', value: 'OpenCV' }
      ],
      tags: ['Python', 'YOLOv8', 'OpenCV', 'Flask', 'SQL', 'PyTorch'],
      github: 'https://github.com/prachipandey28'
    },
    {
      id: 'student-performance-prediction',
      title: 'Student Performance Prediction System',
      subtitle: 'Predictive Data Pipeline & Interactive Analytics Dashboard',
      category: 'Machine Learning & Analytics',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      description: 'End-to-end data science application that analyzes student academic indicators to predict performance outcomes and flag at-risk students. Built automated feature engineering pipelines, tuned ML models with GridSearchCV, and deployed a Streamlit dashboard with Plotly charts.',
      architecture: 'Academic Dataset -> 10+ Feature Preprocessing -> GridSearchCV Hyperparameter Tuning -> Scikit-Learn Classifier -> Streamlit / Plotly UI',
      bullets: [
        'Built automated data pipeline handling 10+ student demographic and academic features with scaling & encoding.',
        'Optimized classification model via GridSearchCV hyperparameter tuning, achieving ~12% F1-score lift over baseline.',
        'Developed interactive Streamlit web dashboard with custom Plotly charts for real-time risk visualization.'
      ],
      metrics: [
        { label: 'F1-Score Lift', value: '~12%' },
        { label: 'Pipeline Features', value: '10+ Features' },
        { label: 'Dashboard Stack', value: 'Streamlit' },
        { label: 'Visuals Engine', value: 'Plotly' }
      ],
      tags: ['Python', 'Scikit-learn', 'Streamlit', 'Plotly', 'SQL', 'Pandas'],
      github: 'https://github.com/prachipandey28'
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950 border-t border-slate-900">
      
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-500/5 blur-[170px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-mono tracking-wider uppercase mb-4"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Software & AI Projects</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Empirically Proven <span className="gradient-text-sky">AI Codebases</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base text-slate-400"
          >
            Real-world computer vision diagnostic tools and predictive machine learning pipelines built during B.Tech coursework and research.
          </motion.p>
        </div>

        {/* Filter Bar */}
        <div className="mt-10 flex items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-sky-500 text-slate-950 font-semibold shadow-md shadow-sky-500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 flex flex-col overflow-hidden transition-all duration-300 shadow-xl"
              >
                {/* Image Header */}
                <div className="relative h-56 overflow-hidden bg-slate-950">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
                  
                  {/* Category Tag */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-md bg-slate-950/90 border border-slate-800 text-sky-400 font-mono text-[11px] font-medium backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mt-1">
                      {project.subtitle}
                    </p>
                    <p className="mt-3 text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Bullet Points */}
                    <div className="mt-4 space-y-2">
                      {project.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics preview */}
                  <div className="mt-6 grid grid-cols-4 gap-2 pt-4 border-t border-slate-800/80">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="bg-slate-950 p-2 rounded-lg border border-slate-850 text-center">
                        <div className="text-xs font-bold text-sky-400">{m.value}</div>
                        <div className="text-[10px] text-slate-500 mt-0.5 truncate">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags & Action Buttons */}
                  <div className="mt-6 flex items-center justify-between pt-2">
                    <div className="flex flex-wrap gap-1.5 max-w-[65%]">
                      {project.tags.map((t, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                          #{t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
                      >
                        Details
                      </button>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                        aria-label="View Source Code on GitHub"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-3 py-1 rounded-md bg-slate-950 border border-slate-800 text-sky-400 font-mono text-xs uppercase">
              {selectedProject.category}
            </span>

            <h3 className="text-2xl font-bold text-white mt-3">
              {selectedProject.title}
            </h3>
            <p className="text-xs font-mono text-slate-400 mt-1">{selectedProject.subtitle}</p>

            <p className="mt-4 text-slate-300 text-sm leading-relaxed">
              {selectedProject.description}
            </p>

            {/* Architecture Box */}
            <div className="mt-5 p-4 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-xs font-mono text-sky-400 flex items-center gap-2 mb-2">
                <Code2 className="w-4 h-4" />
                Pipeline & System Flow:
              </span>
              <p className="text-xs font-mono text-slate-300 leading-relaxed">
                {selectedProject.architecture}
              </p>
            </div>

            {/* Key Accomplishments */}
            <div className="mt-5">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Key Implementation Highlights:</h4>
              <div className="space-y-2">
                {selectedProject.bullets.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div className="mt-6 grid grid-cols-4 gap-2">
              {selectedProject.metrics.map((m, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                  <div className="text-sm font-bold text-sky-400">{m.value}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="mt-6">
              <span className="text-xs font-mono text-slate-400">Frameworks & Tools:</span>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {selectedProject.tags.map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-8 flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-semibold flex items-center gap-2 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                View GitHub Codebase
              </a>
            </div>
          </motion.div>
        </div>
      )}

    </section>
  );
}

