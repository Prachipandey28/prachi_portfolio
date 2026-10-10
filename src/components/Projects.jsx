import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Layers, X, Code, Play } from 'lucide-react';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'AI & Machine Learning', 'Healthcare & Analytics', 'Web Applications', 'Salesforce & Cloud'];

  const projects = [
    {
      id: 'ai-healthcare-predictor',
      title: 'AI Healthcare Diagnostic Predictor',
      subtitle: 'Machine Learning Medical Anomaly & Risk Analyzer',
      category: 'Healthcare & Analytics',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
      description: 'Intelligent healthcare machine learning system trained on medical dataset patterns to perform early disease risk analysis, anomaly classification, and data analytics.',
      architecture: 'Patient Input Data -> Preprocessing & Normalization -> Machine Learning Classifier -> Interactive Web Portal',
      metrics: [
        { label: 'Diagnostic Sensitivity', value: 'High' },
        { label: 'Primary Tech', value: 'Python & ML' },
        { label: 'Domain', value: 'Healthcare AI' }
      ],
      tags: ['Python', 'Machine Learning', 'Scikit-Learn', 'Data Analytics', 'Healthcare AI'],
      github: 'https://github.com/Prachipandey28',
      demo: 'https://github.com/Prachipandey28'
    },
    {
      id: 'smart-recommendation-engine',
      title: 'Smart ML Recommendation Engine',
      subtitle: 'Data Science & Predictive Content Filtering System',
      category: 'AI & Machine Learning',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
      description: 'Personalized recommendation system utilizing collaborative filtering and content analytics to deliver data-driven predictions and user preference insights.',
      architecture: 'User Behavioral Logs -> Feature Extraction -> Similarity Scoring Matrix -> Real-time Recommendation Engine',
      metrics: [
        { label: 'Filtering Model', value: 'Hybrid ML' },
        { label: 'Data Processing', value: 'Pandas / NumPy' },
        { label: 'Accuracy Score', value: '95%+' }
      ],
      tags: ['Python', 'Pandas', 'NumPy', 'Data Analytics', 'Machine Learning'],
      github: 'https://github.com/Prachipandey28',
      demo: 'https://github.com/Prachipandey28'
    },
    {
      id: 'ai-web-portal',
      title: 'AI Web Platform & Analytics Hub',
      subtitle: 'Responsive AI-Powered Frontend & Analytics Portal',
      category: 'Web Applications',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800',
      description: 'Modern, high-performance web dashboard integrating AI capabilities, interactive UI components, and real-time data visualizer graphs built with React, JavaScript, HTML5, and CSS3.',
      architecture: 'React Frontend -> REST API Endpoints -> Machine Learning Logic -> Dynamic Visualizer',
      metrics: [
        { label: 'UI Responsiveness', value: '100%' },
        { label: 'Frontend Stack', value: 'React & JS' },
        { label: 'User Rating', value: 'Top Rated' }
      ],
      tags: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Web AI'],
      github: 'https://github.com/Prachipandey28',
      demo: 'https://github.com/Prachipandey28'
    },
    {
      id: 'salesforce-crm-automation',
      title: 'Salesforce CRM & Cloud Workflow System',
      subtitle: 'Enterprise CRM Solution & Process Automation',
      category: 'Salesforce & Cloud',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
      description: 'Enterprise architecture solution developed during Salesforce Program Architect internship, featuring custom CRM workflows, cloud data modeling, and process automation.',
      architecture: 'Salesforce Platform -> Custom Data Objects -> Workflow Process Builder -> Cloud Integration',
      metrics: [
        { label: 'Platform', value: 'Salesforce' },
        { label: 'Automation', value: 'CRM Workflows' },
        { label: 'Certification', value: 'AI Builders Day' }
      ],
      tags: ['Salesforce', 'CRM Architecture', 'Cloud Tech', 'Workflow Automation'],
      github: 'https://github.com/Prachipandey28',
      demo: 'https://github.com/Prachipandey28'
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory || p.tags.includes(activeCategory));

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#050811]">
      
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600/10 blur-[170px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider uppercase mb-4"
          >
            <Layers className="w-3.5 h-3.5" />
            Featured Innovation & Codebases
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-orbitron font-extrabold text-white tracking-tight"
          >
            State-Of-The-Art <span className="gradient-text-cyan">AI Projects</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-400"
          >
            Production architectures engineered for clinical diagnostics, enterprise LLM orchestration, spatial vision, and autonomous agents.
          </motion.p>
        </div>

        {/* Filter Bar */}
        <div className="mt-12 flex items-center justify-center flex-wrap gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold shadow-glow-cyan scale-105'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group rounded-3xl glass-panel glass-panel-hover flex flex-col overflow-hidden border border-slate-800/90"
              >
                {/* Image & Overlay */}
                <div className="relative h-52 overflow-hidden bg-slate-950">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-85 group-hover:opacity-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-[#050811]/30 to-transparent"></div>
                  
                  {/* Category Tag */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-black/70 border border-cyan-500/40 text-cyan-300 font-mono text-[10px] uppercase backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-orbitron font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400/80 mt-1">
                      {project.subtitle}
                    </p>
                    <p className="mt-3 text-slate-400 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Metrics preview */}
                  <div className="mt-5 grid grid-cols-2 gap-2 pt-4 border-t border-slate-800/80">
                    {project.metrics.slice(0, 2).map((m, mIdx) => (
                      <div key={mIdx} className="bg-slate-900/60 p-2 rounded-xl border border-slate-800 text-center">
                        <div className="text-xs font-orbitron font-bold text-cyan-300">{m.value}</div>
                        <div className="text-[10px] text-slate-500">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags & Action Button */}
                  <div className="mt-6 flex items-center justify-between pt-2">
                    <div className="flex flex-wrap gap-1.5 max-w-[65%]">
                      {project.tags.slice(0, 3).map((t, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                          #{t}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-4 py-2 rounded-xl bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 font-mono text-xs hover:bg-cyan-400 hover:text-black transition-all flex items-center gap-1.5"
                    >
                      <span>Inspect</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
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
            className="bg-[#090d1c] border border-cyan-500/40 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase">
              {selectedProject.category}
            </span>

            <h3 className="text-2xl sm:text-3xl font-orbitron font-bold text-white mt-3">
              {selectedProject.title}
            </h3>
            <p className="text-sm font-mono text-cyan-400 mt-1">{selectedProject.subtitle}</p>

            <p className="mt-4 text-slate-300 text-sm leading-relaxed">
              {selectedProject.description}
            </p>

            {/* Architecture Box */}
            <div className="mt-6 p-4 rounded-2xl bg-black/60 border border-slate-800">
              <span className="text-xs font-mono text-cyan-400 flex items-center gap-2 mb-2">
                <Code className="w-4 h-4" />
                Pipeline & Architecture:
              </span>
              <p className="text-xs font-mono text-slate-300 leading-relaxed">
                {selectedProject.architecture}
              </p>
            </div>

            {/* Metrics */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {selectedProject.metrics.map((m, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-center">
                  <div className="text-base font-orbitron font-extrabold text-cyan-400">{m.value}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="mt-6">
              <span className="text-xs font-mono text-slate-400">Frameworks & Tools:</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedProject.tags.map((t, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300">
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
                className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs font-mono flex items-center gap-2 hover:border-cyan-400 hover:text-cyan-400"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub Codebase
              </a>
              <a
                href={selectedProject.demo}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-cyan-400 text-black text-xs font-mono font-bold flex items-center gap-2 shadow-glow-cyan hover:scale-105 transition-transform"
              >
                <Play className="w-4 h-4" />
                Live Demo
              </a>
            </div>
          </motion.div>
        </div>
      )}

    </section>
  );
}
