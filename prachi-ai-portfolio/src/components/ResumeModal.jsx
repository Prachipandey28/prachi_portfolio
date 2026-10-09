import React from 'react';
import { motion } from 'framer-motion';
import { X, Download, FileText, CheckCircle2, Mail, Phone, MapPin, Globe, ExternalLink, Printer } from 'lucide-react';

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
              <h2 className="text-xl font-orbitron font-bold text-white">Prachi_Resume_2026.pdf</h2>
              <p className="text-xs font-mono text-cyan-400/80">AI Research Engineer & GenAI Systems Architect</p>
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
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert("Downloading Prachi's latest 2026 PDF Resume...");
              }}
              className="px-5 py-2 rounded-xl bg-cyan-400 text-black text-xs font-mono font-bold flex items-center gap-2 shadow-glow-cyan hover:scale-105 transition-transform"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>

        {/* Resume Content View */}
        <div className="mt-8 space-y-8 text-slate-200 text-xs sm:text-sm">
          
          {/* Header Info */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-wrap justify-between items-center gap-4">
            <div>
              <h1 className="text-2xl font-orbitron font-extrabold text-white">PRACHI</h1>
              <p className="text-xs font-mono text-cyan-400 mt-0.5">Senior AI Engineer & LLM Specialist</p>
            </div>
            <div className="flex flex-col gap-1 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-cyan-400" /> prachi.ai.engineer@gmail.com</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-cyan-400" /> Silicon Valley, CA / Remote</span>
              <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-cyan-400" /> github.com/prachi-ai</span>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h3 className="text-sm font-orbitron font-bold text-cyan-400 uppercase tracking-wider border-b border-slate-800 pb-2">
              Executive Summary
            </h3>
            <p className="mt-3 text-slate-300 leading-relaxed">
              Accomplished AI Research Engineer with 4+ years of hands-on experience designing, fine-tuning, and deploying production-scale Large Language Models (LLMs), Multi-Modal Vision Transformers, and healthcare intelligence systems. Proven track record in scaling vLLM clusters, building high-accuracy RAG systems, and writing high-throughput CUDA/C++ inference kernels.
            </p>
          </div>

          {/* Core Technical Expertise */}
          <div>
            <h3 className="text-sm font-orbitron font-bold text-cyan-400 uppercase tracking-wider border-b border-slate-800 pb-2">
              Core Technical Skills
            </h3>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                <span className="text-cyan-300 font-bold">Deep Learning & LLMs:</span> PyTorch, DeepSeek, Llama 3.3, Transformers, LoRA, QLoRA, vLLM, LangChain, Qdrant
              </div>
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                <span className="text-purple-300 font-bold">Vision & Healthcare AI:</span> SAM-2, YOLOv11, Vision Transformers, ECG Telemetry, HIPAA NLP
              </div>
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                <span className="text-emerald-300 font-bold">MLOps & Cloud:</span> TensorRT, CUDA, Triton Server, Docker, Kubernetes, Ray, AWS SageMaker
              </div>
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                <span className="text-amber-300 font-bold">Languages & Systems:</span> Python 3.12, C++17, TypeScript, FastAPI, WebSockets, PostgreSQL, Git
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h3 className="text-sm font-orbitron font-bold text-cyan-400 uppercase tracking-wider border-b border-slate-800 pb-2">
              Professional Experience
            </h3>
            <div className="mt-4 space-y-6">
              <div>
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-white text-base">Senior AI Research Engineer & LLM Architect</h4>
                  <span className="font-mono text-xs text-cyan-400">2024 - Present</span>
                </div>
                <div className="text-xs font-mono text-slate-400">Neural Systems Lab | Silicon Valley, CA</div>
                <ul className="mt-2 space-y-1.5 text-slate-300 text-xs list-disc list-inside">
                  <li>Orchestrated production vLLM cluster serving 4.8M+ monthly queries at sub-45ms latency.</li>
                  <li>Fine-tuned open-weights models (DeepSeek-V3 / Llama 3.3) for enterprise domain knowledge retrieval.</li>
                  <li>Designed hybrid vector retrieval engine in Qdrant with BM25 reranking.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-white text-base">Machine Learning Engineer</h4>
                  <span className="font-mono text-xs text-cyan-400">2023 - 2024</span>
                </div>
                <div className="text-xs font-mono text-slate-400">HealthTech AI Solutions | Boston, MA</div>
                <ul className="mt-2 space-y-1.5 text-slate-300 text-xs list-disc list-inside">
                  <li>Developed multi-modal cardiac diagnostic neural network with 99.4% arrhythmia classification accuracy.</li>
                  <li>Built real-time WebSocket telemetry pipeline compliant with HIPAA regulations.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-sm font-orbitron font-bold text-cyan-400 uppercase tracking-wider border-b border-slate-800 pb-2">
              Education
            </h3>
            <div className="mt-3 flex justify-between items-center">
              <div>
                <h4 className="font-bold text-white">M.S. in Artificial Intelligence & Machine Learning</h4>
                <p className="text-xs font-mono text-slate-400">Top Tier University | GPA: 3.95/4.0</p>
              </div>
              <span className="font-mono text-xs text-purple-400">2020 - 2022</span>
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
