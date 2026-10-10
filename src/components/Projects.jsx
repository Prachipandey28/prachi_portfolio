import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Code2, CheckCircle2 } from 'lucide-react';

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
        { label: 'Accuracy', value: '> 85%' },
        { label: 'Model', value: 'YOLOv8' },
        { label: 'API Backend', value: 'Flask' },
        { label: 'Vision', value: 'OpenCV' }
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
        { label: 'F1 Lift', value: '~12%' },
        { label: 'Features', value: '10+' },
        { label: 'Dashboard', value: 'Streamlit' },
        { label: 'Charts', value: 'Plotly' }
      ],
      tags: ['Python', 'Scikit-learn', 'Streamlit', 'Plotly', 'SQL', 'Pandas'],
      github: 'https://github.com/prachipandey28'
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#0c0f1d] border-t border-[#1b2238]">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[300px] bg-[#6c63ff]/10 blur-[170px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-white"
          >
            My <span style={{ color: '#6c63ff' }}>Projects</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#94a3b8] text-sm sm:text-base font-medium tracking-wide uppercase mt-4"
          >
            Empirically Proven AI & ML Codebases
          </motion.p>
        </div>

        {/* Filter Bar */}
        <div className="flex justify-center flex-wrap gap-2.5 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 ${
                  isActive
                    ? 'text-white shadow-lg shadow-[#6c63ff]/30 scale-105'
                    : 'bg-[#151a2e] text-[#94a3b8] hover:text-white hover:bg-[#1f2642] border border-[#232d4b]'
                }`}
                style={isActive ? { background: 'linear-gradient(135deg, #6c63ff 0%, #4d44db 100%)' } : {}}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group rounded-2xl bg-[#121627]/90 border border-[#232d4b] hover:border-[#6c63ff]/60 flex flex-col overflow-hidden transition-all duration-300 shadow-xl"
              >
                {/* Image Header */}
                <div className="relative h-56 overflow-hidden bg-[#0d101e]">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121627] via-transparent to-transparent"></div>
                  
                  {/* Category Tag */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0c0f1d]/90 border border-[#2d385e] text-[#a78bfa] font-mono text-[11px] font-semibold backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#a78bfa] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-[#6c63ff] mt-1 font-semibold">
                      {project.subtitle}
                    </p>
                    <p className="mt-3 text-[#94a3b8] text-xs sm:text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Bullet Points */}
                    <div className="mt-4 space-y-2">
                      {project.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs text-[#cbd5e1]">
                          <CheckCircle2 className="w-4 h-4 text-[#6c63ff] shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics preview */}
                  <div className="mt-6 grid grid-cols-4 gap-2 pt-4 border-t border-[#232d4b]">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="bg-[#171d33] p-2 rounded-xl border border-[#252f52] text-center">
                        <div className="text-xs font-bold text-[#a78bfa]">{m.value}</div>
                        <div className="text-[10px] text-[#94a3b8] mt-0.5 truncate">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags & Action Buttons */}
                  <div className="mt-6 flex items-center justify-between pt-2">
                    <div className="flex flex-wrap gap-1.5 max-w-[65%]">
                      {project.tags.map((t, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-mono text-[#94a3b8] bg-[#171d33] px-2 py-0.5 rounded-full border border-[#252f52]">
                          #{t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="px-4 py-2 rounded-full text-xs font-semibold text-white transition-all shadow-md"
                        style={{ background: 'linear-gradient(135deg, #6c63ff 0%, #4d44db 100%)' }}
                      >
                        Details
                      </button>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-full bg-[#1a2038] hover:bg-[#232d4b] text-[#cbd5e1] hover:text-white transition-colors border border-[#2d385e]"
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
            className="bg-[#121627] border border-[#232d4b] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative text-white"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#1a2038] border border-[#2d385e] text-[#94a3b8] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-3 py-1 rounded-full bg-[#1a2038] border border-[#2d385e] text-[#a78bfa] font-mono text-xs font-semibold uppercase">
              {selectedProject.category}
            </span>

            <h3 className="text-2xl font-bold text-white mt-3">
              {selectedProject.title}
            </h3>
            <p className="text-xs font-mono text-[#6c63ff] mt-1 font-semibold">{selectedProject.subtitle}</p>

            <p className="mt-4 text-[#cbd5e1] text-sm leading-relaxed">
              {selectedProject.description}
            </p>

            {/* Architecture Box */}
            <div className="mt-5 p-4 rounded-xl bg-[#171d33] border border-[#252f52]">
              <span className="text-xs font-mono text-[#a78bfa] flex items-center gap-2 mb-2 font-bold">
                <Code2 className="w-4 h-4 text-[#6c63ff]" />
                Pipeline & System Architecture:
              </span>
              <p className="text-xs font-mono text-[#cbd5e1] leading-relaxed">
                {selectedProject.architecture}
              </p>
            </div>

            {/* Key Accomplishments */}
            <div className="mt-5">
              <h4 className="text-xs font-mono text-[#94a3b8] uppercase tracking-wider mb-2 font-bold">Key Implementation Highlights:</h4>
              <div className="space-y-2">
                {selectedProject.bullets.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#cbd5e1] bg-[#171d33] p-3 rounded-xl border border-[#252f52]">
                    <CheckCircle2 className="w-4 h-4 text-[#6c63ff] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div className="mt-6 grid grid-cols-4 gap-2">
              {selectedProject.metrics.map((m, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-[#171d33] border border-[#252f52] text-center">
                  <div className="text-sm font-bold text-[#a78bfa]">{m.value}</div>
                  <div className="text-[10px] text-[#94a3b8] mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="mt-6">
              <span className="text-xs font-mono text-[#94a3b8]">Frameworks & Tools:</span>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {selectedProject.tags.map((t, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-[#171d33] border border-[#252f52] text-xs font-mono text-[#cbd5e1]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-8 flex items-center justify-end gap-3 pt-4 border-t border-[#232d4b]">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 rounded-full text-white text-xs font-semibold flex items-center gap-2 transition-all shadow-lg"
                style={{ background: 'linear-gradient(135deg, #6c63ff 0%, #4d44db 100%)' }}
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


