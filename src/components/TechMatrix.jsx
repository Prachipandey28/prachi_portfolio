import { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code2, Database, Wrench, Award, CheckCircle2 } from 'lucide-react';

export default function TechMatrix() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Languages', 'Data Science & ML', 'Web & Tools', 'Core CS', 'Certifications'];

  const skillGroups = [
    {
      category: 'Languages',
      icon: Code2,
      skills: [
        { name: 'Python', level: 95, detail: 'Data Science, ML scripts, OpenCV, YOLOv8, Automation' },
        { name: 'SQL', level: 92, detail: 'Relational DB queries, JOINs, aggregations (HackerRank Certified)' },
        { name: 'C++', level: 88, detail: 'Object-Oriented Programming, Data Structures & Logic' }
      ]
    },
    {
      category: 'Data Science & ML',
      icon: Cpu,
      skills: [
        { name: 'Machine Learning', level: 92, detail: 'Scikit-learn, Regression, Classification, Hyperparameter Tuning' },
        { name: 'Deep Learning & Vision', level: 90, detail: 'PyTorch, TensorFlow, YOLOv8 object detection, OpenCV' },
        { name: 'Data Processing & Analytics', level: 94, detail: 'Pandas, NumPy, Data Cleaning, Data Modeling, Feature Pipeline' }
      ]
    },
    {
      category: 'Web & Tools',
      icon: Wrench,
      skills: [
        { name: 'Flask & Streamlit', level: 90, detail: 'Web API deployment, AI real-time interfaces, Plotly analytics UI' },
        { name: 'Git & GitHub', level: 92, detail: 'Version control, repo management (github.com/prachipandey28)' },
        { name: 'IDE & Environments', level: 95, detail: 'VS Code, Jupyter Notebook, Google Colab' }
      ]
    },
    {
      category: 'Core CS',
      icon: Database,
      skills: [
        { name: 'Data Structures & Algorithms', level: 90, detail: 'LeetCode 100+ Solved (Rank 1470), CodeChef Bronze Badge' },
        { name: 'Object-Oriented Programming', level: 90, detail: 'Modular design, OOP principles in Python & C++' },
        { name: 'Database Management (DBMS)', level: 92, detail: 'Relational database schema modeling, MySQL queries' }
      ]
    },
    {
      category: 'Certifications',
      icon: Award,
      skills: [
        { name: 'HackerRank SQL Intermediate', level: 100, detail: 'Official HackerRank Verified Certification' },
        { name: 'HackerRank SQL Basic', level: 100, detail: 'Official HackerRank Verified Certification' },
        { name: 'HP LIFE - AI for Beginners', level: 100, detail: 'Foundational Artificial Intelligence & Business Applications' }
      ]
    }
  ];

  const filteredGroups = activeTab === 'All'
    ? skillGroups
    : skillGroups.filter(g => g.category === activeTab);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/80 border-t border-slate-900">
      
      {/* Background glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-sky-500/5 blur-[170px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-mono tracking-wider uppercase mb-4"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Skills & Proficiency</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Verified Skill <span className="gradient-text-sky">Stack</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base text-slate-400"
          >
            Core technical proficiencies in Python, SQL, C++, Machine Learning, Deep Learning (YOLOv8), Data Analytics, and Database Systems.
          </motion.p>
        </div>

        {/* Tabs Filter */}
        <div className="mt-10 flex justify-center flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeTab === cat
                  ? 'bg-sky-500 text-slate-950 font-semibold shadow-md shadow-sky-500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Groups Grid */}
        <div className="mt-12 space-y-8">
          {filteredGroups.map((group, gIdx) => {
            const GroupIcon = group.icon;
            return (
              <motion.div 
                key={gIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gIdx * 0.08 }}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90"
              >
                <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-6">
                  <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-sky-400">
                    <GroupIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    {group.category}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {group.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx}
                      className="p-4 rounded-xl bg-slate-950 border border-slate-800/90 hover:border-slate-700 transition-colors flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                            {skill.name}
                          </span>
                          <span className="text-xs font-mono text-sky-400 font-semibold">{skill.level}%</span>
                        </div>

                        {/* Progress Meter Bar */}
                        <div className="w-full h-1.5 rounded-full bg-slate-900 overflow-hidden mb-3">
                          <div 
                            className="h-full rounded-full bg-sky-500 transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="text-[11px] text-slate-400 leading-relaxed">
                        {skill.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

