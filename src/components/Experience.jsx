import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Machine Learning Intern',
      company: 'SkillInfyTech IT Solutions Private Limited',
      period: 'May 2026 - July 2026',
      location: 'India',
      description: 'Worked on Machine Learning concepts, data analysis, model development, and industry-oriented projects while gaining practical experience through mentorship and hands-on training.',
      highlights: [
        'Developed predictive ML models and performed exploratory data analysis (EDA).',
        'Contributed to technical tasks and strengthened analytical problem-solving skills.',
        'Collaborated on real-world data science workflows under direct mentorship.'
      ]
    },
    {
      role: 'AI Web Development Intern',
      company: 'InAmigos Foundation (IAF)',
      period: 'May 2026 - July 2026',
      location: 'Internshala Selection',
      description: 'Selected for an AI Web Development Internship to work on AI-powered web solutions, frontend development, and website enhancement.',
      highlights: [
        'Integrated AI functionalities into responsive web interfaces and user applications.',
        'Collaborated with cross-functional teams to improve user experience and interface accessibility.',
        'Strengthened practical web architecture skills using React, JavaScript, HTML, and CSS.'
      ]
    },
    {
      role: 'Social Media Head',
      company: 'Arya Intelverse',
      period: 'August 2024 - July 2026',
      location: 'Arya College of Engineering & IT',
      description: 'Led social media activities for Arya Intelverse, managing content creation and digital outreach for events, workshops, and student initiatives.',
      highlights: [
        'Increased student engagement and strengthened the official AI club\'s online presence.',
        'Coordinated event communication and promotional campaigns across technical workshops.'
      ]
    },
    {
      role: 'Salesforce Program Architect Intern',
      company: 'TechForce Academy Australia',
      period: 'June 2025 - August 2025',
      location: 'Remote',
      description: 'Completed an internship focused on Salesforce architecture, CRM solutions, cloud technologies, and workflow automation.',
      highlights: [
        'Gained hands-on experience with Salesforce tools, CRM platform concepts, and cloud workflows.',
        'Developed problem-solving, team collaboration, and enterprise application skills.'
      ]
    },
    {
      role: 'Internshala Student Partner (ISP)',
      company: 'Internshala',
      period: 'June 2026 - July 2026',
      location: 'Remote',
      description: 'Represented Internshala on campus to promote skill development, internships, and career training initiatives among students.',
      highlights: [
        'Engaged with student communities to spread awareness about technical learning tracks.'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology (B.Tech) - Artificial Intelligence & Data Science',
      institution: 'Arya College of Engineering and IT, Jaipur',
      period: 'August 2023 - May 2027',
      details: 'Focus on Machine Learning, Data Analytics, Python, AI Algorithms, Database Systems, and Web Solutions.'
    },
    {
      degree: 'Higher Secondary School (12th Grade) - PCM',
      institution: 'Birla Shiksha Kendra School',
      period: 'March 2022 - February 2023',
      details: 'Senior Secondary Education in Physics, Chemistry, and Mathematics.'
    },
    {
      degree: 'Secondary School (10th Grade) - RBSE',
      institution: 'Sterling Academy School',
      period: 'March 2020 - May 2021',
      details: 'Secondary Board Education with strong academic foundation.'
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
            Career Journey & Academic Credentials
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-orbitron font-extrabold text-white tracking-tight"
          >
            Internship Experience & <span className="gradient-text-cyan">Education</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-400"
          >
            Hands-on machine learning internships, AI web development, Salesforce architecture, and academic excellence at Arya College of Engineering & IT.
          </motion.p>
        </div>

        {/* Timeline Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Work Experience */}
          <div className="lg:col-span-8 space-y-8">
            <h3 className="text-xl font-orbitron font-bold text-white flex items-center gap-2 mb-6">
              <Briefcase className="w-5 h-5 text-cyan-400" />
              Internship History
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
              Education & Honors
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
                  Honors & Awards
                </div>
                <ul className="mt-4 space-y-2 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Certificate of Appreciation — India Is Innovating 2K25</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>2nd Position — Scintillations 2024 (Elements Event)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>3rd Position — Victory-24 Cultural Fest (Don-De-Mode)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Consolation Prize — National Project Expo</span>
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
