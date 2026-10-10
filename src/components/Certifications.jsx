import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, CheckCircle, X, ShieldCheck } from 'lucide-react';

export default function Certifications() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedCert, setSelectedCert] = useState(null);

  const categories = ['All', 'GenAI & Machine Learning', 'Data Science & SQL', 'Web & Full-Stack', 'Hackathons & Quizzes'];

  const certifications = [
    {
      title: 'Building GenAI Applications with MongoDB',
      issuer: 'MongoDB',
      date: 'Aug 2025',
      credentialId: 'credly.com/go/8K8Xzhil',
      category: 'GenAI & Machine Learning',
      badge: 'Verified Credential',
      description: 'Earned this credential from MongoDB by learning how to design and build Generative AI applications using MongoDB Atlas Vector Search and RAG.',
      skills: ['Artificial Intelligence', 'RAG Pipelines', 'Atlas Vector Search'],
      link: 'https://www.credly.com/go/8K8Xzhil'
    },
    {
      title: 'SQL (Intermediate)',
      issuer: 'HackerRank',
      date: 'Mar 2026',
      credentialId: 'DF1DAAF60738',
      category: 'Data Science & SQL',
      badge: 'Proctored Skill Certificate',
      description: "Passed HackerRank's proctored SQL Intermediate skill certification, demonstrating proficiency in complex SQL queries, joins, aggregations, and subqueries.",
      skills: ['SQL', 'Complex Queries', 'Joins & Aggregations'],
      link: 'https://www.linkedin.com/in/prachi-pandey-0042a8328/details/certifications/'
    },
    {
      title: 'SQL (Basic)',
      issuer: 'HackerRank',
      date: 'Aug 2026',
      credentialId: '0B09A81116B3',
      category: 'Data Science & SQL',
      badge: 'Proctored Skill Certificate',
      description: "Passed HackerRank's proctored SQL Basic skill certification covering relational queries, filtering, and database management fundamentals.",
      skills: ['SQL', 'Relational Databases', 'Data Filtering'],
      link: 'https://www.linkedin.com/in/prachi-pandey-0042a8328/details/certifications/'
    },
    {
      title: 'Deloitte Data Analytics Job Simulation',
      issuer: 'Deloitte (Forage)',
      date: 'Jun 2026',
      credentialId: '6a2ef014c6c61a7ecac69e4f',
      category: 'Data Science & SQL',
      badge: 'Job Simulation',
      description: "Successfully completed Deloitte's Data Analytics Job Simulation on Forage, gaining practical experience in data analysis and forensic technology.",
      skills: ['Data Analysis', 'Data Analytics', 'Forensic Technology'],
      link: 'https://www.linkedin.com/in/prachi-pandey-0042a8328/details/certifications/'
    },
    {
      title: 'Agentic AI Workshop',
      issuer: 'Grras Solutions (P) Ltd',
      date: 'Jun 2026',
      credentialId: '3c510ba827704',
      category: 'GenAI & Machine Learning',
      badge: 'Practical Workshop',
      description: 'Successfully completed the Agentic AI Workshop conducted by GRRAS Solutions. Gained practical knowledge of Agentic AI concepts and agentic development.',
      skills: ['Agentic AI Development', 'Artificial Intelligence', 'Autonomous Agents'],
      link: 'https://www.linkedin.com/in/prachi-pandey-0042a8328/details/certifications/'
    },
    {
      title: 'Salesforce AI Builders Day',
      issuer: 'Salesforce',
      date: '2026',
      credentialId: 'Salesforce Agentforce',
      category: 'GenAI & Machine Learning',
      badge: 'AI Builder Program',
      description: 'Built an AI-powered Agentforce agent using Salesforce technologies, gaining practical experience in AI-driven automation, cloud solutions, and enterprise AI.',
      skills: ['AgentForce', 'AI Automation', 'Salesforce AI'],
      link: 'https://www.linkedin.com/in/prachi-pandey-0042a8328/details/certifications/'
    },
    {
      title: 'Generative AI & ML Workshop',
      issuer: 'Arya Cipher Coding Club',
      date: 'Oct 2025',
      credentialId: 'Arya Cipher Club',
      category: 'GenAI & Machine Learning',
      badge: 'Technical Workshop',
      description: 'Participated in a workshop focused on Generative AI and Machine Learning, exploring AI models, prompt engineering, and real-world applications.',
      skills: ['Artificial Intelligence', 'Machine Learning', 'Prompt Engineering'],
      link: 'https://www.linkedin.com/in/prachi-pandey-0042a8328/details/certifications/'
    },
    {
      title: 'AI for Beginners',
      issuer: 'HP LIFE Foundation',
      date: 'May 2025',
      credentialId: 'HP LIFE Certificate',
      category: 'GenAI & Machine Learning',
      badge: 'Official Training',
      description: 'Completed the HP LIFE online course on Artificial Intelligence, gaining foundational knowledge of AI concepts and real-world business applications.',
      skills: ['Artificial Intelligence', 'Business AI', 'Machine Learning'],
      link: 'https://www.life-global.org/'
    },
    {
      title: 'Stacks Fullstack Bootcamp Graduate',
      issuer: 'Rise in x Stacks (Arya College)',
      date: 'Sep 2025',
      credentialId: 'Stacks Bootcamp',
      category: 'Web & Full-Stack',
      badge: 'Bootcamp Graduate',
      description: 'Successfully graduated from the Stacks Fullstack Bootcamp conducted in association with Arya College of Engineering & IT, Jaipur.',
      skills: ['Full-Stack Development', 'Front-End Development', 'Web Engineering'],
      link: 'https://www.linkedin.com/in/prachi-pandey-0042a8328/details/certifications/'
    },
    {
      title: 'UI/UX with Graphic Design',
      issuer: 'Grras Solutions (P) Ltd',
      date: 'Jun 2026',
      credentialId: '2026GRRAS12049',
      category: 'Web & Full-Stack',
      badge: 'Design Certification',
      description: 'Hands-on design training covering User Interface Design, UX wireframing, and modern visual graphic design aesthetics.',
      skills: ['User Interface Design', 'UX Design', 'Visual Graphics'],
      link: 'https://www.linkedin.com/in/prachi-pandey-0042a8328/details/certifications/'
    },
    {
      title: 'How to Create Presentations using Canva',
      issuer: 'Coursera',
      date: 'Dec 2025',
      credentialId: 'Coursera Project',
      category: 'Web & Full-Stack',
      badge: 'Coursera Project',
      description: 'Learned presentation design, Canva tools, visual communication, and design structure for technical presentations.',
      skills: ['Canva', 'Presentation Design', 'Visual Communication'],
      link: 'https://www.coursera.org/'
    },
    {
      title: 'QuizOff 2026 – India’s Biggest AI Quiz',
      issuer: 'CampusCrew',
      date: 'Jul 2026',
      credentialId: 'CampusCrew QuizOff',
      category: 'Hackathons & Quizzes',
      badge: 'National AI Competition',
      description: "Participated and qualified in QuizOff 2026 — India's Biggest AI Quiz competition testing deep AI & ML domain knowledge.",
      skills: ['Artificial Intelligence', 'AI Quiz', 'Domain Expertise'],
      link: 'https://www.linkedin.com/in/prachi-pandey-0042a8328/details/certifications/'
    },
    {
      title: 'CodeForge’25 – Certificate of Participation',
      issuer: 'WebForge',
      date: 'May 2025',
      credentialId: 'WebForge CodeForge',
      category: 'Hackathons & Quizzes',
      badge: 'Hackathon Participation',
      description: "Certificate of participation in CodeForge'25 coding hackathon event showcasing web software development skills.",
      skills: ['CodeForge', 'Hackathon', 'Web Development'],
      link: 'https://www.linkedin.com/in/prachi-pandey-0042a8328/details/certifications/'
    },
    {
      title: 'Unstop Quizverse 2026 – Participation',
      issuer: 'Unstop',
      date: 'Jul 2026',
      credentialId: 'Unstop Quizverse',
      category: 'Hackathons & Quizzes',
      badge: 'National Challenge',
      description: 'Certificate of participation in Unstop Quizverse 2026 national technical competition.',
      skills: ['Unstop Challenge', 'Technical Quiz', 'Problem Solving'],
      link: 'https://www.linkedin.com/in/prachi-pandey-0042a8328/details/certifications/'
    }
  ];

  const filteredCertifications = activeTab === 'All'
    ? certifications
    : certifications.filter(c => c.category === activeTab);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[#0a0d18] border-t border-[#1b2238]">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[300px] bg-[#6c63ff]/10 blur-[170px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-white"
          >
            My <span style={{ color: '#6c63ff' }}>Certifications</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#94a3b8] text-sm sm:text-base font-medium tracking-wide uppercase mt-4"
          >
            14 Verified Industry Certifications, Workshops & Credentials
          </motion.p>
        </div>

        {/* Filter Bar */}
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

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCertifications.map((cert, idx) => (
              <motion.div
                key={cert.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                onClick={() => setSelectedCert(cert)}
                className="p-6 sm:p-7 rounded-2xl bg-[#121627]/90 border border-[#232d4b] hover:border-[#6c63ff]/60 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1 cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-[#1a2038] text-[#6c63ff] border border-[#2d385e] group-hover:scale-110 transition-transform">
                      <Award className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#171d33] border border-[#252f52] text-[10px] font-mono font-bold text-[#a78bfa]">
                      {cert.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-[#a78bfa] transition-colors leading-snug">
                    {cert.title}
                  </h3>

                  <div className="flex items-center gap-2 mt-1.5 text-xs font-mono text-[#6c63ff] font-semibold">
                    <span>{cert.issuer}</span>
                    <span>•</span>
                    <span>{cert.date}</span>
                  </div>

                  {cert.credentialId && (
                    <div className="mt-1 text-[10px] font-mono text-[#94a3b8] truncate">
                      ID: {cert.credentialId}
                    </div>
                  )}

                  <p className="mt-3 text-xs text-[#94a3b8] leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {cert.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="text-[10px] font-mono text-[#cbd5e1] bg-[#171d33] px-2.5 py-1 rounded-full border border-[#252f52] flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-[#6c63ff]" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#232d4b] flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#a78bfa] flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#6c63ff]" />
                    View Certificate Photo
                  </span>
                  <div
                    className="px-3 py-1.5 rounded-full text-xs font-semibold text-white flex items-center gap-1 transition-all shadow-md"
                    style={{ background: 'linear-gradient(135deg, #6c63ff 0%, #4d44db 100%)' }}
                  >
                    Inspect
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Certificate Lightbox Photo Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-[#121627] border border-[#232d4b] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative text-white"
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#1a2038] border border-[#2d385e] text-[#94a3b8] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-3 py-1 rounded-full bg-[#1a2038] border border-[#2d385e] text-[#a78bfa] font-mono text-xs font-semibold uppercase">
              {selectedCert.category}
            </span>

            <h3 className="text-2xl font-bold text-white mt-3 leading-snug">
              {selectedCert.title}
            </h3>

            <div className="flex items-center gap-2 text-xs font-mono text-[#6c63ff] font-bold mt-1">
              <span>Issued by {selectedCert.issuer}</span>
              <span>•</span>
              <span>{selectedCert.date}</span>
            </div>

            {/* Simulated Official Certificate Card Document Image Preview */}
            <div className="mt-5 p-6 rounded-2xl bg-gradient-to-br from-[#1a2038] to-[#0d101e] border-2 border-[#6c63ff]/40 relative overflow-hidden shadow-2xl text-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#6c63ff]/10 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6c63ff]/20 border border-[#6c63ff]/50 text-[#a78bfa] text-xs font-mono font-bold uppercase mb-3">
                <ShieldCheck className="w-4 h-4 text-[#6c63ff]" />
                Official Verified Credential Document
              </div>

              <h4 className="text-xl font-extrabold text-white tracking-wide">
                CERTIFICATE OF COMPLETION & PARTICIPATION
              </h4>
              <p className="text-xs text-[#94a3b8] font-mono mt-1">This is proudly presented to</p>
              
              <div className="text-2xl font-bold text-[#a78bfa] my-2 font-serif tracking-wider">
                PRACHI PANDEY
              </div>

              <p className="text-xs text-[#cbd5e1] max-w-lg mx-auto leading-relaxed mt-2">
                For successfully demonstrating verified competency and completing <span className="text-white font-semibold">&quot;{selectedCert.title}&quot;</span> issued by <span className="text-white font-semibold">{selectedCert.issuer}</span>.
              </p>

              <div className="mt-6 pt-4 border-t border-[#2d385e] flex flex-wrap items-center justify-between gap-2 text-left">
                <div>
                  <div className="text-[10px] font-mono text-[#94a3b8] uppercase">Verification Credential ID:</div>
                  <div className="text-xs font-mono text-[#a78bfa] font-bold">{selectedCert.credentialId || 'ACEIT-VERIFIED-2026'}</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#94a3b8] uppercase">Issue Status:</div>
                  <div className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                    Verified & Active
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-5 text-[#cbd5e1] text-xs leading-relaxed">
              {selectedCert.description}
            </p>

            {/* Skills */}
            <div className="mt-4">
              <span className="text-xs font-mono text-[#94a3b8]">Verified Competencies:</span>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {selectedCert.skills.map((s, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-[#171d33] border border-[#252f52] text-xs font-mono text-[#cbd5e1]">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex items-center justify-end gap-3 pt-4 border-t border-[#232d4b]">
              <a
                href={selectedCert.link}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 rounded-full text-white text-xs font-semibold flex items-center gap-2 transition-all shadow-lg"
                style={{ background: 'linear-gradient(135deg, #6c63ff 0%, #4d44db 100%)' }}
              >
                Verify on LinkedIn / Credly
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      )}

    </section>
  );
}


