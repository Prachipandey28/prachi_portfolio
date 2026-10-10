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
    <section id="skills" className="py-24 relative overflow-hidden bg-[#0a0d18] border-t border-[#1b2238]">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#6c63ff]/10 blur-[160px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-white"
          >
            My <span style={{ color: '#6c63ff' }}>Skills</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#94a3b8] text-sm sm:text-base font-medium tracking-wide uppercase mt-4"
          >
            Technical Expertise & Proficiency
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center flex-wrap gap-2.5 mb-12">
          {categories.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
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

        {/* Skill Cards Grid */}
        <div className="space-y-8">
          {filteredGroups.map((group, gIdx) => {
            const GroupIcon = group.icon;
            return (
              <motion.div 
                key={gIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gIdx * 0.08 }}
                className="p-6 sm:p-8 rounded-2xl bg-[#121627]/90 border border-[#232d4b] hover:border-[#6c63ff]/40 transition-all duration-300 shadow-xl"
              >
                <div className="flex items-center gap-3 border-b border-[#232d4b] pb-4 mb-6">
                  <div className="p-2.5 rounded-xl bg-[#1a2038] text-[#6c63ff] border border-[#2d385e]">
                    <GroupIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                    {group.category}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {group.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx}
                      className="p-5 rounded-xl bg-[#171d33] border border-[#252f52] hover:border-[#6c63ff]/50 transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex justify-between items-center mb-2.5">
                          <span className="text-sm font-semibold text-white flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#6c63ff]" />
                            {skill.name}
                          </span>
                          <span className="text-xs font-mono font-bold text-[#a78bfa]">{skill.level}%</span>
                        </div>

                        {/* Progress Meter Bar */}
                        <div className="w-full h-2 rounded-full bg-[#0d1120] overflow-hidden mb-3.5 p-[1px]">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            className="h-full rounded-full"
                            style={{ background: 'linear-gradient(90deg, #6c63ff 0%, #9b51e0 100%)' }}
                          ></motion.div>
                        </div>
                      </div>

                      <div className="text-xs text-[#94a3b8] leading-relaxed group-hover:text-[#cbd5e1] transition-colors">
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


