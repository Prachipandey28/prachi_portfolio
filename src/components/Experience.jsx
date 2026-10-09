import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, BookOpen, Calendar, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Senior AI Research Engineer & LLM Architect',
      company: 'Neural Systems Lab',
      period: '2024 - Present',
      location: 'Silicon Valley, CA (Hybrid)',
      description: 'Leading frontier Generative AI engineering, fine-tuning open-weights LLMs (Llama 3.3, DeepSeek-V3), and building enterprise-grade agentic microservices.',
      highlights: [
        'Architected vLLM inference cluster handling 4.8M+ monthly API calls with sub-45ms latency.',
        'Pioneered hybrid vector search indexing in Qdrant, boosting RAG retrieval accuracy by 34%.',
        'Managed a team of 6 AI engineers & MLOps specialists.'
      ]
    },
    {
      role: 'Machine Learning Engineer',
      company: 'HealthTech AI Solutions',
      period: '2023 - 2024',
      location: 'Boston, MA (Remote)',
      description: 'Specialized in biomedical signal processing, multi-modal cardiac telemetry analysis, and HIPAA-compliant model deployments.',
      highlights: [
        'Trained 1D-CNN Transformer model on 500,000+ ECG waveforms achieving 99.4% diagnostic sensitivity.',
        'Engineered real-time WebSocket alert stream for intensive care telemetry units.',
        'Optimized PyTorch inference speed via C++ CUDA extensions.'
      ]
    },
    {
      role: 'AI & Data Science Researcher',
      company: 'Frontier Intelligence Lab',
      period: '2022 - 2023',
      location: 'San Francisco, CA',
      description: 'Researched parameter-efficient fine-tuning (PEFT), model quantization (INT8/FP16), and vision transformer architectures.',
      highlights: [
        'Co-authored 2 research papers on multi-modal vision-language compression.',
        'Built automated benchmarking harness for LLM hallucination scoring.'
      ]
    }
  ];

  const education = [
    {
      degree: 'Master of Science (M.S.) in Artificial Intelligence & Machine Learning',
      institution: 'Top Tier University',
      period: '2020 - 2022',
      details: 'Specialization in Deep Neural Networks, Multi-Modal Systems, and Computer Vision. GPA: 3.95 / 4.0'
    },
    {
      degree: 'Bachelor of Technology (B.Tech) in Computer Science & Engineering',
      institution: 'Institute of Technology',
      period: '2016 - 2020',
      details: 'First Class Honors. Focus on Algorithms, Operating Systems, Linear Algebra, and Signal Processing.'
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#050811]/90">
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-600/10 blur-[170px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono tracking-wider uppercase mb-4"
          >
            <Briefcase className="w-3.5 h-3.5" />
            Career History & Qualifications
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-orbitron font-extrabold text-white tracking-tight"
          >
            Experience & <span className="gradient-text-cyan">Research Track</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-400"
          >
            A consistent track record of pushing the boundaries of AI research and engineering in high-impact industries.
          </motion.p>
        </div>

        {/* Timeline Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Work Experience */}
          <div className="lg:col-span-8 space-y-8">
            <h3 className="text-xl font-orbitron font-bold text-white flex items-center gap-2 mb-6">
              <Briefcase className="w-5 h-5 text-cyan-400" />
              Professional Roles
            </h3>

            <div className="relative border-l-2 border-cyan-500/30 ml-4 pl-6 space-y-10">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[33px] top-1.5 w-4 h-4 rounded-full bg-cyan-400 border-4 border-[#050811] shadow-glow-cyan"></div>

                  <div className="p-6 rounded-3xl glass-panel glass-panel-hover border border-slate-800">
                    <div className="flex flex-wrap justify-between items-start gap-2">
                      <div>
                        <h4 className="text-lg font-orbitron font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {exp.role}
                        </h4>
                        <span className="text-sm font-mono text-cyan-400/90 font-medium">{exp.company}</span>
                      </div>
                      <div className="text-right">
                        <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300 flex items-center gap-1.5">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <p className="mt-3 text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mt-4 space-y-2">
                      {exp.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Achievements */}
          <div className="lg:col-span-4 space-y-8">
            <h3 className="text-xl font-orbitron font-bold text-white flex items-center gap-2 mb-6">
              <GraduationCap className="w-5 h-5 text-purple-400" />
              Education & Credentials
            </h3>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-3xl glass-panel border border-slate-800"
                >
                  <span className="text-xs font-mono text-purple-400 font-bold">{edu.period}</span>
                  <h4 className="text-base font-orbitron font-bold text-white mt-1">
                    {edu.degree}
                  </h4>
                  <p className="text-xs font-mono text-slate-400 mt-1">{edu.institution}</p>
                  <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                    {edu.details}
                  </p>
                </motion.div>
              ))}

              {/* Research Honors Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-3xl bg-gradient-to-br from-purple-900/30 to-cyan-900/20 border border-purple-500/30"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-purple-300 uppercase tracking-widest">
                  <Award className="w-4 h-4 text-purple-400" />
                  Recognitions & Awards
                </div>
                <ul className="mt-4 space-y-2 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Best Healthcare AI Solution Award (2024)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Global GenAI Hackathon 1st Place Winner</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Hugging Face Top Open-Source Contributor</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
