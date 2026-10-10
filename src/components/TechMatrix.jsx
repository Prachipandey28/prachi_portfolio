import { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Brain, CheckCircle2 } from 'lucide-react';

export default function TechMatrix() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'AI & Machine Learning', 'Languages & Databases', 'Frontend Development', 'Certifications & Tools'];

  const skillGroups = [
    {
      category: 'AI & Machine Learning',
      skills: [
        { name: 'Python & ML Fundamentals', level: 95, experience: 'Core Skill', highlight: 'Data Analysis, Scikit-Learn & Modeling' },
        { name: 'Data Analytics & Data Modeling', level: 92, experience: 'Core Skill', highlight: 'Insight extraction & data structuring' },
        { name: 'AI Web Integration', level: 90, experience: 'Internship', highlight: 'AI-powered web solutions & logic' },
        { name: 'Recommendation Systems', level: 88, experience: 'Projects', highlight: 'ML recommendation & predictions' }
      ]
    },
    {
      category: 'Languages & Databases',
      skills: [
        { name: 'Python', level: 96, experience: 'Core Skill', highlight: 'Data Science, ML scripts & automation' },
        { name: 'C++', level: 88, experience: 'Academic', highlight: 'Object-Oriented Programming & Logic' },
        { name: 'SQL', level: 90, experience: 'Certified', highlight: 'Relational query design & schema modeling' },
        { name: 'JavaScript (ES6+)', level: 85, experience: 'Web Dev', highlight: 'Dynamic frontend interactivity' }
      ]
    },
    {
      category: 'Frontend Development',
      skills: [
        { name: 'React', level: 88, experience: 'Web Dev', highlight: 'Component architectures & state hooks' },
        { name: 'HTML5 & CSS3', level: 95, experience: 'Core Skill', highlight: 'Responsive styling, Flexbox & Grid' },
        { name: 'Web Application Design', level: 90, experience: 'Internship', highlight: 'User experience & web enhancement' }
      ]
    },
    {
      category: 'Certifications & Tools',
      skills: [
        { name: 'SQL (Basic) Certification', level: 100, experience: 'Certified', highlight: 'Official Skill Verification' },
        { name: 'CodeForge\'25', level: 100, experience: 'Certificate', highlight: 'Participation & Hackathon Coding' },
        { name: 'Salesforce AI Builders Day', level: 100, experience: 'Certificate', highlight: 'Salesforce & Cloud AI Concepts' },
        { name: 'AI for Beginners', level: 100, experience: 'Certificate', highlight: 'Foundational Artificial Intelligence' },
        { name: 'Microsoft VS Code & Git', level: 92, experience: 'Daily Tool', highlight: 'Version control & IDE workflow' }
      ]
    }
  ];

  const filteredGroups = activeTab === 'All'
    ? skillGroups
    : skillGroups.filter(g => g.category === activeTab);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#050811]">
      
      {/* Background glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/10 blur-[170px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider uppercase mb-4"
          >
            <Cpu className="w-3.5 h-3.5" />
            Skills & Certifications Matrix
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-orbitron font-extrabold text-white tracking-tight"
          >
            Technical <span className="gradient-text-cyan">Proficiency Matrix</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-400"
          >
            Core skills across Artificial Intelligence, Data Science, Machine Learning, C++, SQL, React, and verified certifications.
          </motion.p>
        </div>

        {/* Tabs Filter */}
        <div className="mt-12 flex justify-center flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono transition-all ${
                activeTab === cat
                  ? 'bg-cyan-500 text-black font-bold shadow-glow-cyan scale-105'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Groups Grid */}
        <div className="mt-14 space-y-12">
          {filteredGroups.map((group, gIdx) => (
            <motion.div 
              key={gIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gIdx * 0.1 }}
              className="p-8 rounded-3xl glass-panel border border-cyan-500/20"
            >
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-6">
                <Brain className="w-5 h-5 text-cyan-400" />
                <h3 className="text-xl font-orbitron font-bold text-white tracking-wide">
                  {group.category}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {group.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx}
                    className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-colors"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono text-cyan-400 font-bold">{skill.level}%</span>
                    </div>

                    {/* Progress Meter Bar */}
                    <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden p-0.5 border border-slate-800">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 shadow-glow-cyan transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>

                    <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>{skill.highlight}</span>
                      <span className="text-slate-500">{skill.experience}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
