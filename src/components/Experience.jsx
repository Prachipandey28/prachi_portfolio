import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Calendar, Sparkles, CheckCircle2, Code2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Social Media Head',
      company: 'Arya Intelverse (AI Club)',
      period: 'Aug 2024 - Present',
      location: 'Arya College of Engineering & IT',
      description: 'Head of social media communications and digital outreach for Arya Intelverse, the official AI & Data Science student organization at Arya College.',
      highlights: [
        'Organized digital campaigns and student participation for technical workshops, AI hackathons, and guest lectures.',
        'Managed content strategy, growing student engagement and community involvement across campus.'
      ]
    },
    {
      role: 'Web Development Intern',
      company: 'InAmigos Foundation (IAF)',
      period: 'May 2024 - July 2024',
      location: 'Remote Internship',
      description: 'Built responsive web pages and frontend components for foundation web portals.',
      highlights: [
        'Developed interactive user interfaces using modern web technologies (HTML, CSS, JavaScript).',
        'Collaborated with development teams to optimize website layouts and access design standards.'
      ]
    }
  ];

  const education = [
    {
      degree: 'B.Tech in Artificial Intelligence & Data Science',
      institution: 'Arya College of Engineering & IT, Jaipur',
      period: '2023 - Present',
      grade: 'CGPA: 9.3 / 10.0',
      details: 'Core focus on Machine Learning, Deep Learning, Computer Vision (YOLOv8), Data Analytics, Python, C++, and SQL Database Systems.'
    },
    {
      degree: 'Senior Secondary (12th Grade - CBSE)',
      institution: 'Birla Shiksha Kendra School',
      period: '2022 - 2023',
      grade: 'Percentage: 68%',
      details: 'Senior secondary coursework with concentration in Physics, Chemistry, and Mathematics (PCM).'
    },
    {
      degree: 'Secondary School (10th Grade - RBSE)',
      institution: 'Sterling Academy School',
      period: '2020 - 2021',
      grade: 'Percentage: 88%',
      details: 'Secondary board education with distinction in Science and Mathematics.'
    }
  ];

  const achievements = [
    {
      title: 'LeetCode Active Solver',
      detail: '100+ Problems Solved (Rank 1470)',
      icon: Code2,
      badge: 'Competitive Coding'
    },
    {
      title: 'CodeChef Bronze Badge',
      detail: '100+ Problems Solved on CodeChef',
      icon: Code2,
      badge: 'Bronze Streak'
    },
    {
      title: 'IEEE National Project Expo',
      detail: 'Consolation Prize for AI Project Presentation',
      icon: Award,
      badge: 'National Award'
    },
    {
      title: 'Scintillations 2024 (Elements)',
      detail: '2nd Position Winner in Technical Event',
      icon: Sparkles,
      badge: '2nd Place'
    },
    {
      title: 'Victory-24 Fest (Don-De-Mode)',
      detail: '3rd Position Winner in Fest Competition',
      icon: Sparkles,
      badge: '3rd Place'
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/90 border-t border-slate-900">
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-sky-500/5 blur-[170px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-mono tracking-wider uppercase mb-4"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Academic & Professional Experience</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Education, Roles & <span className="gradient-text-sky">Achievements</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base text-slate-400"
          >
            Verified record of academic performance (9.3 CGPA), student leadership, web development internships, and competitive honors.
          </motion.p>
        </div>

        {/* Timeline Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Education & Experience */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Education Block */}
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-6">
                <GraduationCap className="w-5 h-5 text-sky-400" />
                <span>Education Background</span>
              </h3>

              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/90"
                  >
                    <div className="flex flex-wrap justify-between items-start gap-2">
                      <div>
                        <h4 className="text-base font-bold text-white">
                          {edu.degree}
                        </h4>
                        <p className="text-xs text-sky-400 mt-0.5">{edu.institution}</p>
                      </div>
                      <div className="text-right">
                        <span className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-[11px] font-mono text-emerald-400 font-semibold">
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                      {edu.details}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Work / Leadership Block */}
            <div className="pt-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-6">
                <Briefcase className="w-5 h-5 text-sky-400" />
                <span>Experience & Leadership</span>
              </h3>

              <div className="space-y-4">
                {experiences.map((exp, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/90"
                  >
                    <div className="flex flex-wrap justify-between items-start gap-2">
                      <div>
                        <h4 className="text-base font-bold text-white">
                          {exp.role}
                        </h4>
                        <span className="text-xs text-slate-300">{exp.company}</span>
                      </div>
                      <span className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                    </div>

                    <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mt-3 space-y-1.5">
                      {exp.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Verified Achievements */}
          <div className="lg:col-span-5">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-amber-400" />
              <span>Honors & Achievements</span>
            </h3>

            <div className="space-y-3">
              {achievements.map((ach, idx) => {
                const Icon = ach.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/90 flex items-start justify-between gap-3"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-amber-400 shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">
                          {ach.title}
                        </h4>
                        <p className="text-xs text-slate-400 mt-0.5">{ach.detail}</p>
                      </div>
                    </div>

                    <span className="px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-[10px] font-mono text-amber-300 font-medium shrink-0">
                      {ach.badge}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick Resume Link Box */}
            <div className="mt-6 p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 text-center">
              <p className="text-xs text-slate-400">
                All credentials verified via official 1-page Resume PDF.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

