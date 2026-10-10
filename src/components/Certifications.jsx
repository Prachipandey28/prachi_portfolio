import { motion } from 'framer-motion';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'SQL (Intermediate) Certificate',
      issuer: 'HackerRank',
      date: '2024',
      badge: 'Verified Skill Certificate',
      description: 'Demonstrated advanced proficiency in relational databases, complex table JOINs, aggregations, subqueries, and window functions.',
      skills: ['SQL', 'Database Queries', 'Table JOINs', 'Data Aggregations'],
      link: 'https://www.hackerrank.com/certificates/iframe/4f4e78a62f83' // or her hackerrank profile
    },
    {
      title: 'SQL (Basic) Certificate',
      issuer: 'HackerRank',
      date: '2024',
      badge: 'Verified Skill Certificate',
      description: 'Demonstrated mastery of fundamental database querying, filtering, sorting, and conditional selection in SQL.',
      skills: ['SQL', 'Relational Databases', 'Data Filtering', 'MySQL'],
      link: 'https://www.hackerrank.com/'
    },
    {
      title: 'Artificial Intelligence (AI) for Beginners',
      issuer: 'HP LIFE Foundation',
      date: '2024',
      badge: 'Professional Training',
      description: 'Comprehensive introduction to Artificial Intelligence principles, Machine Learning applications, and real-world AI deployment strategies.',
      skills: ['Artificial Intelligence', 'Machine Learning', 'AI Ethics', 'Business AI'],
      link: 'https://www.life-global.org/'
    }
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[#0a0d18] border-t border-[#1b2238]">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[300px] bg-[#6c63ff]/10 blur-[170px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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
            Verified Technical Credentials & Credentials
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-7 rounded-2xl bg-[#121627]/90 border border-[#232d4b] hover:border-[#6c63ff]/60 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-[#1a2038] text-[#6c63ff] border border-[#2d385e] group-hover:scale-110 transition-transform">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#171d33] border border-[#252f52] text-[11px] font-mono font-semibold text-[#a78bfa]">
                    {cert.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#a78bfa] transition-colors">
                  {cert.title}
                </h3>

                <div className="flex items-center gap-2 mt-1 text-xs font-mono text-[#6c63ff]">
                  <span>{cert.issuer}</span>
                  <span>•</span>
                  <span>{cert.date}</span>
                </div>

                <p className="mt-4 text-xs text-[#94a3b8] leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {cert.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="text-[10px] font-mono text-[#cbd5e1] bg-[#171d33] px-2.5 py-1 rounded-full border border-[#252f52] flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-[#6c63ff]" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#232d4b]">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-full text-xs font-semibold text-white flex items-center justify-center gap-2 transition-all shadow-md group-hover:shadow-[#6c63ff]/20"
                  style={{ background: 'linear-gradient(135deg, #6c63ff 0%, #4d44db 100%)' }}
                >
                  Verify Credential
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
