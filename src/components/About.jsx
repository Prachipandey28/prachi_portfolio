import { motion } from 'framer-motion';
import { Brain, Activity, Database, CheckCircle2, User, Globe, Heart } from 'lucide-react';

export default function About() {
  const domains = [
    {
      icon: Brain,
      title: "Healthcare AI & Computer Vision",
      badge: "YOLOv8 & Flask",
      description: "Developing diagnostic deep learning models with YOLOv8 & OpenCV. Achieved >85% accuracy on bone cancer X-ray scans with patient history logging.",
      skills: ["Python", "YOLOv8", "OpenCV", "Flask", "PyTorch", "SQL"]
    },
    {
      icon: Activity,
      title: "ML Pipelines & Predictive Analytics",
      badge: "Scikit-Learn & Streamlit",
      description: "Building 10+ feature end-to-end data pipelines. Tuned models via GridSearchCV achieving ~12% F1-score lift and deployed Streamlit analytics dashboards.",
      skills: ["Scikit-learn", "Pandas", "NumPy", "GridSearchCV", "Plotly", "Streamlit"]
    },
    {
      icon: Database,
      title: "Core CS & Database Systems",
      badge: "C++ & SQL",
      description: "Solid foundation in Data Structures, Algorithms, Object-Oriented Programming, and Relational DBMS design. HackerRank SQL Intermediate certified.",
      skills: ["C++", "SQL", "MySQL", "Data Modeling", "DSA", "OOP"]
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/60 border-t border-slate-900">
      
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-500/5 blur-[160px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-mono tracking-wider uppercase mb-4"
          >
            <User className="w-3.5 h-3.5" />
            <span>About & Specializations</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Engineered For Impact in <span className="gradient-text-sky">AI & Data Science</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base text-slate-400 leading-relaxed"
          >
            B.Tech Artificial Intelligence & Data Science undergraduate at Arya College of Engineering & IT, Jaipur (CGPA 9.3/10). 
            Passionate about transforming raw data and complex computer vision algorithms into reliable, real-world software solutions.
          </motion.p>
        </div>

        {/* 3 Core Technical Domains */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {domains.map((domain, idx) => {
            const Icon = domain.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-sky-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-950 border border-slate-800 text-slate-300">
                      {domain.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    {domain.title}
                  </h3>

                  <p className="mt-3 text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {domain.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex flex-wrap gap-1.5">
                  {domain.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800/80 text-[11px] font-mono text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Info Grid: Academic Profile & Languages/Interests */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Academic Highlights */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/90"
          >
            <h3 className="text-xl font-bold text-white mb-2">Academic & Professional Strengths</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
              Consistently high performer maintaining a 9.3 / 10 CGPA across all engineering semesters at Arya College of Engineering & IT. Experienced in student leadership as Social Media Head at Arya Intelverse and Web Development Intern at InAmigos Foundation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-white font-medium block">Arya College of Engg & IT</span>
                  <span className="text-slate-400 text-[11px]">B.Tech AI & DS • 9.3 CGPA</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <div>
                  <span className="text-white font-medium block">LeetCode & CodeChef Active</span>
                  <span className="text-slate-400 text-[11px]">100+ Solved, Rank 1470</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <span className="text-white font-medium block">IEEE Project Expo Winner</span>
                  <span className="text-slate-400 text-[11px]">National Level Consolation Prize</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                <div>
                  <span className="text-white font-medium block">HackerRank Certified</span>
                  <span className="text-slate-400 text-[11px]">SQL Intermediate & SQL Basic</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Languages & Interests */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-3">
                <Globe className="w-4 h-4" />
                <span>LANGUAGES</span>
              </div>
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-medium text-slate-200">
                  English (Professional)
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-medium text-slate-200">
                  Hindi (Native)
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-rose-400 mb-3">
                <Heart className="w-4 h-4" />
                <span>PERSONAL INTERESTS</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
                  💃 Dancing
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
                  🎵 Listening to Music
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300">
                  🧠 Competitive Problem Solving
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/60 text-xs text-slate-400 text-center">
              Open for full-time internships & project collaborations
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

