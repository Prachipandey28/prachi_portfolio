import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Calendar, Sparkles, CheckCircle2, Code2, Trophy } from 'lucide-react';

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
      badge: 'Rank 1470'
    },
    {
      title: 'CodeChef Bronze Badge',
      detail: '100+ Problems Solved on CodeChef Platform',
      icon: Trophy,
      badge: 'Bronze Badge'
    },
    {
      title: 'IEEE National Project Expo',
      detail: 'Consolation Prize Winner for AI Healthcare Project',
      icon: Award,
      badge: 'National Award'
    },
    {
      title: 'Scintillations 2024 (Elements)',
      detail: '2nd Position Winner in Technical Event',
      icon: Sparkles,
      badge: '2nd Rank'
    },
    {
      title: 'Victory-24 Fest (Don-De-Mode)',
      detail: '3rd Position Winner in Fest Competition',
      icon: Sparkles,
      badge: '3rd Rank'
    }
  ];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-[#0c0f1d] border-t border-[#1b2238]">
      
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-[#6c63ff]/10 blur-[170px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-white"
          >
            My <span style={{ color: '#6c63ff' }}>Achievements</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#94a3b8] text-sm sm:text-base font-medium tracking-wide uppercase mt-4"
          >
            Honors, Education & Competitive Milestones
          </motion.p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Education & Experience */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Education Block */}
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-3 mb-6 border-b border-[#232d4b] pb-3">
                <GraduationCap className="w-6 h-6 text-[#6c63ff]" />
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
                    className="p-6 rounded-2xl bg-[#121627]/90 border border-[#232d4b] hover:border-[#6c63ff]/50 transition-all duration-300 shadow-xl"
                  >
                    <div className="flex flex-wrap justify-between items-start gap-2">
                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-white">
                          {edu.degree}
                        </h4>
                        <p className="text-xs text-[#a78bfa] font-mono mt-0.5">{edu.institution}</p>
                      </div>
                      <div>
                        <span className="px-3 py-1 rounded-full bg-[#171d33] border border-[#252f52] text-xs font-mono text-[#6c63ff] font-bold">
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-[#94a3b8] mt-3 leading-relaxed">
                      {edu.details}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Work / Leadership Block */}
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-3 mb-6 border-b border-[#232d4b] pb-3">
                <Briefcase className="w-6 h-6 text-[#6c63ff]" />
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
                    className="p-6 rounded-2xl bg-[#121627]/90 border border-[#232d4b] hover:border-[#6c63ff]/50 transition-all duration-300 shadow-xl"
                  >
                    <div className="flex flex-wrap justify-between items-start gap-2">
                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-white">
                          {exp.role}
                        </h4>
                        <span className="text-xs text-[#a78bfa] font-mono">{exp.company}</span>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-[#171d33] border border-[#252f52] text-[11px] font-mono text-[#94a3b8] flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#6c63ff]" />
                        {exp.period}
                      </span>
                    </div>

                    <p className="mt-3 text-xs text-[#94a3b8] leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mt-4 space-y-2">
                      {exp.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-[#cbd5e1]">
                          <CheckCircle2 className="w-4 h-4 text-[#6c63ff] shrink-0 mt-0.5" />
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
            <h3 className="text-xl font-bold text-white flex items-center gap-3 mb-6 border-b border-[#232d4b] pb-3">
              <Trophy className="w-6 h-6 text-[#a78bfa]" />
              <span>Honors & Coding Streaks</span>
            </h3>

            <div className="space-y-4">
              {achievements.map((ach, idx) => {
                const Icon = ach.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="p-5 rounded-2xl bg-[#121627]/90 border border-[#232d4b] hover:border-[#6c63ff]/60 flex items-start justify-between gap-3 transition-all duration-300 shadow-xl group"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="p-3 rounded-xl bg-[#1a2038] text-[#6c63ff] border border-[#2d385e] group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white group-hover:text-[#a78bfa] transition-colors">
                          {ach.title}
                        </h4>
                        <p className="text-xs text-[#94a3b8] mt-1">{ach.detail}</p>
                      </div>
                    </div>

                    <span className="px-3 py-1 rounded-full bg-[#171d33] border border-[#252f52] text-[11px] font-mono text-[#a78bfa] font-bold shrink-0">
                      {ach.badge}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Resume Callout Card */}
            <div className="mt-8 p-6 rounded-2xl bg-[#121627]/90 border border-[#232d4b] text-center">
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                All awards, college grades (9.3 CGPA), and certifications are 100% verified against Prachi Pandey&apos;s official resume.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}


