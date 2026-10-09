import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Activity, Stethoscope, Layers, ShieldCheck, Zap, Sparkles, Code, CheckCircle, Terminal } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: Brain,
      title: "GenAI & LLM Architecture",
      color: "from-cyan-500 to-blue-600",
      textColor: "text-cyan-400",
      description: "Building production RAG pipelines, agentic workflows, function calling, parameter-efficient fine-tuning (LoRA/QLoRA), and vector database optimizations.",
      tags: ["DeepSeek", "Llama 3.3", "LangChain", "Qdrant", "vLLM", "RAG"]
    },
    {
      icon: Activity,
      title: "Healthcare AI & Diagnostics",
      color: "from-purple-500 to-pink-600",
      textColor: "text-purple-400",
      description: "Architecting clinical diagnostic models, real-time ECG/EEG signal telemetry analysis, and HIPAA-compliant privacy-preserving federated AI systems.",
      tags: ["Clinical NLP", "ECG AI", "HIPAA", "PyTorch", "Biomedical Vision"]
    },
    {
      icon: Cpu,
      title: "Computer Vision & Spatial AI",
      color: "from-emerald-500 to-teal-600",
      textColor: "text-emerald-400",
      description: "Developing multi-modal vision transformers, Segment Anything (SAM-2), real-time video object tracking, and 3D scene understanding.",
      tags: ["YOLOv11", "SAM-2", "OpenCV", "Vision Transformers", "3D Clouds"]
    },
    {
      icon: Layers,
      title: "MLOps & CUDA Acceleration",
      color: "from-amber-500 to-orange-600",
      textColor: "text-amber-400",
      description: "Scaling high-performance inference servers with TensorRT, Triton Server, Ray Distributed, Docker, Kubernetes, and C++ CUDA kernel optimization.",
      tags: ["TensorRT", "CUDA", "Triton", "Ray", "MLflow", "Docker"]
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#050811]/90">
      
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 blur-[160px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider uppercase mb-4"
          >
            <Brain className="w-3.5 h-3.5" />
            Neural System Architecture
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-orbitron font-extrabold text-white tracking-tight"
          >
            Engineering <span className="gradient-text-cyan">Intelligent Systems</span> For Tomorrow
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed"
          >
            Driven by a commitment to push the boundary between theoretical machine learning research and high-scale production systems.
          </motion.p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-3xl glass-panel glass-panel-hover relative overflow-hidden"
              >
                <div className="flex items-start justify-between">
                  <div className={`p-4 rounded-2xl bg-slate-900 border border-slate-800 ${pillar.textColor} shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-mono text-slate-500">PILLAR // 0{idx + 1}</span>
                </div>

                <h3 className="text-xl font-orbitron font-bold text-white mt-6 group-hover:text-cyan-400 transition-colors">
                  {pillar.title}
                </h3>

                <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                  {pillar.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {pillar.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-slate-300 group-hover:border-cyan-500/30 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bio & Philosophy Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-[#0c1527] border border-cyan-500/25 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
                <Sparkles className="w-4 h-4" />
                Engineering Philosophy
              </div>
              <h3 className="text-2xl sm:text-3xl font-orbitron font-bold text-white mt-2">
                Accuracy, Scalability & Safety At Every Layer
              </h3>
              <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether deploying zero-latency LLM microservices or developing deep vision models for healthcare, my focus is on robustness, measurable benchmark superiority, and seamless human-AI alignment.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <div className="p-4 rounded-2xl bg-black/50 border border-cyan-500/20 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="text-xs font-mono text-slate-200">Sub-50ms Global Query Latency</span>
              </div>
              <div className="p-4 rounded-2xl bg-black/50 border border-purple-500/20 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-purple-400 shrink-0" />
                <span className="text-xs font-mono text-slate-200">Production vLLM Cluster Orchestration</span>
              </div>
              <div className="p-4 rounded-2xl bg-black/50 border border-emerald-500/20 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs font-mono text-slate-200">Peer-Reviewed AI Benchmarks</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
