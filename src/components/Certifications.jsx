import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  ExternalLink, 
  CheckCircle, 
  X, 
  ShieldCheck, 
  Maximize2, 
  ZoomIn, 
  Download, 
  Eye, 
  Sparkles, 
  FileCheck
} from 'lucide-react';

export default function Certifications() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedCert, setSelectedCert] = useState(null);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  // Prevent background scrolling when modal or fullscreen lightbox is open
  useEffect(() => {
    if (selectedCert || fullscreenImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCert, fullscreenImage]);

  // Handle ESC key to close modal/lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (fullscreenImage) {
          setFullscreenImage(null);
        } else if (selectedCert) {
          setSelectedCert(null);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCert, fullscreenImage]);

  const categories = ['All', 'GenAI & Machine Learning', 'Data Science & SQL', 'Web & Full-Stack', 'Hackathons & Quizzes'];

  const certifications = [
    {
      title: 'Building GenAI Applications with MongoDB',
      issuer: 'MongoDB',
      date: 'Aug 2025',
      credentialId: 'credly.com/go/8K8Xzhil',
      category: 'GenAI & Machine Learning',
      badge: 'Verified Credential',
      image: '/certificates/mongodb-genai.png',
      description: 'Earned this credential from MongoDB by learning how to design and build Generative AI applications using MongoDB Atlas Vector Search and RAG pipelines.',
      skills: ['Artificial Intelligence', 'RAG Pipelines', 'Atlas Vector Search', 'MongoDB'],
      link: 'https://www.credly.com/go/8K8Xzhil'
    },
    {
      title: 'Agentic AI Workshop',
      issuer: 'Grras Solutions (P) Ltd',
      date: 'Jun 2026',
      credentialId: '3c510ba827704',
      category: 'GenAI & Machine Learning',
      badge: 'Practical Workshop',
      image: '/certificates/agentic-ai-grras.png',
      description: 'Successfully completed the Agentic AI Workshop conducted by GRRAS Solutions. Gained hands-on practical knowledge of autonomous agents and Agentic AI workflows.',
      skills: ['Agentic AI Development', 'Artificial Intelligence', 'Autonomous Agents', 'Agentic Workflows'],
      link: 'https://www.linkedin.com/in/prachi-pandey-0042a8328/details/certifications/'
    },
    {
      title: 'Deloitte Data Analytics Job Simulation',
      issuer: 'Deloitte (Forage)',
      date: 'Jun 2026',
      credentialId: '6a2ef014c6c61a7ecac69e4f',
      category: 'Data Science & SQL',
      badge: 'Job Simulation',
      image: '/certificates/deloitte-data-analytics.png',
      description: "Successfully completed Deloitte's practical Data Analytics Job Simulation on Forage, solving enterprise cases in forensic data analysis and investigative analytics.",
      skills: ['Data Analysis', 'Data Analytics', 'Forensic Technology', 'Deloitte Simulation'],
      link: 'https://www.linkedin.com/in/prachi-pandey-0042a8328/details/certifications/'
    },
    {
      title: 'National Project Expo – Consolation Position',
      issuer: 'IEEE JECRC Student Branch',
      date: 'Feb 2025',
      credentialId: 'IEEE JECRC • JECRC Foundation',
      category: 'Hackathons & Quizzes',
      badge: 'National Award',
      image: '/certificates/ieee-national-project-expo.png',
      description: 'Secured Consolation position at the National Project Expo held at Jaipur Engineering College and Research Centre (JECRC), Jaipur under the IEEE JECRC Student Branch.',
      skills: ['Project Presentation', 'Engineering Innovation', 'AI Systems', 'National Expo'],
      link: 'https://www.linkedin.com/in/prachi-pandey-0042a8328/details/honors/'
    },
    {
      title: 'Generative AI & ML Workshop',
      issuer: 'Arya College & Cipher Coding Club',
      date: 'Oct 2024',
      credentialId: 'Cipher Coding Club • Arya College',
      category: 'GenAI & Machine Learning',
      badge: 'Technical Workshop',
      image: '/certificates/arya-genai-workshop.png',
      description: 'Participated in a specialized hands-on workshop on Generative AI and Machine Learning organized by Arya College of Engineering & I.T. and Cipher Coding Club.',
      skills: ['Generative AI', 'Machine Learning', 'Prompt Engineering', 'Deep Learning'],
      link: 'https://www.linkedin.com/in/prachi-pandey-0042a8328/details/certifications/'
    },
    {
      title: 'Web Development Internship Completion',
      issuer: 'InAmigos Foundation (IAF)',
      date: 'Jun 2026',
      credentialId: 'CSR00083159 • ISO 9001:2015',
      category: 'Web & Full-Stack',
      badge: 'Internship Certificate',
      image: '/certificates/inamigos-web-development-internship.png',
      description: 'Successfully completed the Web Development Internship at InAmigos Foundation from 25th May 2026 to 07th June 2026, building responsive UI components and foundational portals.',
      skills: ['Web Development', 'Frontend Engineering', 'HTML5', 'CSS3', 'JavaScript'],
      link: 'https://www.linkedin.com/in/prachi-pandey-0042a8328/details/experience/'
    },
    {
      title: 'AI Web Development Internship Selection',
      issuer: 'Internshala',
      date: 'May 2026',
      credentialId: 'idvgo3z81pf',
      category: 'Web & Full-Stack',
      badge: 'Internshala Selection',
      image: '/certificates/internshala-inamigos-selection.png',
      description: 'Official Certificate of Selection from Internshala for successfully securing the AI Web Development internship at InAmigos Foundation.',
      skills: ['AI Web Development', 'Internshala Verified', 'Full-Stack Development'],
      link: 'https://internshala.com/verify_certificate'
    },
    {
      title: 'Code-ए-Manipal Hackathon',
      issuer: 'Manipal University Jaipur & Geekroom',
      date: 'Mar 2025',
      credentialId: 'LearnIT • Manipal University',
      category: 'Hackathons & Quizzes',
      badge: 'Hackathon Participation',
      image: '/certificates/code-e-manipal-hackathon.png',
      description: 'Participated in the Code-ए-Manipal hackathon organized by LearnIT and IT Department in collaboration with Geekroom at Manipal University Jaipur.',
      skills: ['Hackathon', 'Competitive Programming', 'Software Engineering', 'Problem Solving'],
      link: 'https://www.linkedin.com/in/prachi-pandey-0042a8328/details/certifications/'
    },
    {
      title: 'Eureka Pitching Competition – Believe in Your Idea',
      issuer: 'Arya College & E-CELL ACEIT',
      date: 'Oct 2024',
      credentialId: 'E-CELL ACEIT • National Entrepreneurship Challenge',
      category: 'Hackathons & Quizzes',
      badge: 'Pitching Competition',
      image: '/certificates/eureka-pitching.png',
      description: 'Participated in the Eureka Pitching Competition (Believe in Your Idea: Discover, Pitch, Thrive) organized by E-Cell ACEIT and Arya College of Engineering & IT in association with National Entrepreneurship Challenge.',
      skills: ['Startup Pitching', 'Entrepreneurship', 'Idea Discovery', 'Presentation Skills'],
      link: 'https://www.linkedin.com/in/prachi-pandey-0042a8328/details/certifications/'
    },
    {
      title: 'AI for Beginners',
      issuer: 'HP LIFE Foundation',
      date: 'May 2025',
      credentialId: 'ed6c6b52b-25b4-4e9b-9c1b-91b5b8f4b01acdc',
      category: 'GenAI & Machine Learning',
      badge: 'Official Training',
      image: '/certificates/hp-ai-for-beginners.png',
      description: 'Completed the HP LIFE online course on Artificial Intelligence, gaining foundational knowledge of AI concepts, business applications, and ethical machine learning.',
      skills: ['Artificial Intelligence', 'Business AI', 'Machine Learning', 'Data Ethics'],
      link: 'https://www.life-global.org/'
    },
    {
      title: 'UI/UX with Graphic Design',
      issuer: 'Grras Solutions (P) Ltd',
      date: 'Jun 2026',
      credentialId: '2026GRRAS12049',
      category: 'Web & Full-Stack',
      badge: 'Design Certification',
      image: '/certificates/uiux-graphic-design.png',
      description: 'Hands-on design training covering User Interface Design, UX wireframing, digital user experiences, and modern visual graphic design aesthetics.',
      skills: ['User Interface Design', 'UX Design', 'Visual Graphics', 'Digital Experiences'],
      link: 'https://www.linkedin.com/in/prachi-pandey-0042a8328/details/certifications/'
    },
    {
      title: 'How to Create Presentations using Canva',
      issuer: 'Coursera',
      date: 'Dec 2025',
      credentialId: 'IM0EQ9Y0Q74B',
      category: 'Web & Full-Stack',
      badge: 'Coursera Project',
      image: '/certificates/coursera-canva.png',
      description: 'Completed authorized Coursera project training in presentation architecture, visual storytelling, brand typography, and interactive technical deck design.',
      skills: ['Canva', 'Presentation Design', 'Visual Communication', 'UI Aesthetics'],
      link: 'https://coursera.org/verify/IM0EQ9Y0Q74B'
    },
    {
      title: 'QuizOff 2026 – India’s Biggest AI Quiz',
      issuer: 'CampusCrew (Unstop)',
      date: 'Jul 2026',
      credentialId: 'CampusCrew • 525,000+ Students',
      category: 'Hackathons & Quizzes',
      badge: 'National AI Competition',
      image: '/certificates/quizoff-2026-ai-quiz.png',
      description: "Competed in QuizOff 2026: India's Biggest AI Quiz organized by CampusCrew and hosted on Unstop alongside 5,25,000+ students across 48,500+ institutions worldwide.",
      skills: ['Artificial Intelligence', 'AI Quiz', 'Machine Learning', 'National Level'],
      link: 'https://www.linkedin.com/in/prachi-pandey-0042a8328/details/certifications/'
    },
    {
      title: 'Internship Common Aptitude Test (1CAT)',
      issuer: '1CAT (CIT)',
      date: 'Apr 2026',
      credentialId: 'CIT-P-3164539',
      category: 'Hackathons & Quizzes',
      badge: 'Aptitude Certification',
      image: '/certificates/1cat-aptitude-test.png',
      description: 'Earned Certificate of Participation in the nationwide Internship Common Aptitude Test (1CAT), demonstrating competitive analytical capability, problem solving, and aptitude skills.',
      skills: ['Analytical Aptitude', 'Logical Reasoning', 'Problem Solving', 'Quantitative Analysis'],
      link: 'https://www.linkedin.com/in/prachi-pandey-0042a8328/details/certifications/'
    },
    {
      title: 'LeetCode 50 Days Streak Badge 2026',
      issuer: 'LeetCode',
      date: '2026',
      credentialId: 'LeetCode @prachi1528',
      category: 'Data Science & SQL',
      badge: '50 Days Badge',
      image: '/certificates/leetcode-50-days-badge-2026.png',
      description: 'Achieved the LeetCode 50 Days Badge 2026 for consistent problem-solving streak across 50+ days solving Data Structures & Algorithms challenges.',
      skills: ['Data Structures', 'Algorithms', 'LeetCode Streak', 'Problem Solving'],
      link: 'https://leetcode.com/u/prachi1528/'
    },
    {
      title: 'ISP 58 Trainings Contest',
      issuer: 'Internshala Student Partner',
      date: 'Jun 2026',
      credentialId: 'ISP 58 • Internshala',
      category: 'Web & Full-Stack',
      badge: 'Webinar Certificate',
      image: '/certificates/internshala-isp58-webinar.png',
      description: 'Participated in the ISP 58 First Trainings Contest Webinar organized by the Internshala Student Partner Team.',
      skills: ['Internshala Student Partner', 'Technical Webinar', 'Student Leadership'],
      link: 'https://www.linkedin.com/in/prachi-pandey-0042a8328/details/certifications/'
    },
    {
      title: 'SQL (Intermediate)',
      issuer: 'HackerRank',
      date: 'Mar 2026',
      credentialId: 'DF1DAAF60738',
      category: 'Data Science & SQL',
      badge: 'Proctored Skill Certificate',
      image: '/certificates/hackerrank-sql-intermediate.png',
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
      image: '/certificates/hackerrank-sql-basic.png',
      description: "Passed HackerRank's proctored SQL Basic skill certification covering relational queries, filtering, and database management fundamentals.",
      skills: ['SQL', 'Relational Databases', 'Data Filtering'],
      link: 'https://www.linkedin.com/in/prachi-pandey-0042a8328/details/certifications/'
    },
    {
      title: 'Salesforce AI Builders Day',
      issuer: 'Salesforce',
      date: '2026',
      credentialId: 'Salesforce Agentforce',
      category: 'GenAI & Machine Learning',
      badge: 'AI Builder Program',
      image: '/certificates/salesforce-ai-builders-day.png',
      description: 'Built an AI-powered Agentforce agent using Salesforce technologies, gaining practical experience in AI-driven automation, cloud solutions, and enterprise AI.',
      skills: ['AgentForce', 'AI Automation', 'Salesforce AI'],
      link: 'https://www.linkedin.com/in/prachi-pandey-0042a8328/details/certifications/'
    },
    {
      title: 'I Built My First Agent with Agentforce',
      issuer: 'Salesforce & Agentforce',
      date: '2026',
      credentialId: 'Agentforce AI Agent Builder',
      category: 'GenAI & Machine Learning',
      badge: 'Agentforce Badge',
      image: '/certificates/salesforce-agentforce-badge.png',
      description: 'Official credential badge earned from Salesforce for building and deploying autonomous enterprise AI agents using Agentforce platform capabilities.',
      skills: ['Agentforce', 'Autonomous Agents', 'Salesforce AI', 'Enterprise Automation'],
      link: 'https://www.linkedin.com/in/prachi-pandey-0042a8328/details/certifications/'
    },
    {
      title: 'Stacks Fullstack Bootcamp Graduate',
      issuer: 'Rise in x Stacks (Arya College)',
      date: 'Sep 2025',
      credentialId: 'Stacks Bootcamp',
      category: 'Web & Full-Stack',
      badge: 'Bootcamp Graduate',
      image: '/certificates/stacks-fullstack-bootcamp.png',
      description: 'Successfully graduated from the Stacks Fullstack Bootcamp conducted in association with Arya College of Engineering & IT, Jaipur.',
      skills: ['Full-Stack Development', 'Front-End Development', 'Web Engineering'],
      link: 'https://www.linkedin.com/in/prachi-pandey-0042a8328/details/certifications/'
    },
    {
      title: 'CodeForge’25 – Certificate of Participation',
      issuer: 'WebForge',
      date: 'May 2025',
      credentialId: 'WebForge CodeForge',
      category: 'Hackathons & Quizzes',
      badge: 'Hackathon Participation',
      image: '/certificates/codeforge-webforge-unstop.png',
      description: "Certificate of participation in CodeForge'25 coding hackathon event showcasing web software development skills.",
      skills: ['CodeForge', 'Hackathon', 'Web Development'],
      link: 'https://www.linkedin.com/in/prachi-pandey-0042a8328/details/certifications/'
    },
    {
      title: 'CodeForge Hackathon 2025 (Microsoft Office Gurgaon)',
      issuer: 'Microsoft & CodeForge',
      date: 'Feb 2025',
      credentialId: 'Microsoft DLF Cyber City',
      category: 'Hackathons & Quizzes',
      badge: 'In-Person Hackathon',
      image: '/certificates/codeforge-hackathon-microsoft.png',
      description: 'Attended and participated in CodeForge Hackathon hosted offline at Microsoft Office, DLF Cyber City, Gurgaon, engaging in high-velocity software engineering challenges.',
      skills: ['Hackathon', 'Microsoft DLF Cyber City', 'Collaborative Coding', 'System Design'],
      link: 'https://www.linkedin.com/in/prachi-pandey-0042a8328/details/honors/'
    },
    {
      title: 'Machine Learning Internship',
      issuer: 'SkillInfyTech',
      date: '2025',
      credentialId: 'SITS826088',
      category: 'GenAI & Machine Learning',
      badge: 'ML Internship',
      image: '/certificates/skillinfytech-ml-internship.png',
      description: 'Successfully completed the Machine Learning Internship at SkillInfyTech, working with supervised & unsupervised algorithms, feature engineering, and model evaluation metrics.',
      skills: ['Machine Learning', 'Python', 'Feature Engineering', 'Model Evaluation'],
      link: 'https://www.linkedin.com/in/prachi-pandey-0042a8328/details/experience/'
    },
    {
      title: 'Salesforce Programming Architect Internship',
      issuer: 'TechForce Services (Australia)',
      date: '2025',
      credentialId: 'TechForce Services Australia',
      category: 'Web & Full-Stack',
      badge: 'Enterprise Internship',
      image: '/certificates/techforce-salesforce-internship.png',
      description: 'Completed Salesforce Programming Architect virtual experience and internship with TechForce Services, Australia, focusing on enterprise architecture, CRM workflows, and apex design.',
      skills: ['Salesforce Architecture', 'Enterprise CRM', 'Cloud Systems', 'Apex Solutions'],
      link: 'https://www.linkedin.com/in/prachi-pandey-0042a8328/details/experience/'
    },
    {
      title: 'Unstop Quizverse 2026 – Participation',
      issuer: 'Unstop',
      date: 'Jul 2026',
      credentialId: 'Unstop Quizverse',
      category: 'Hackathons & Quizzes',
      badge: 'National Challenge',
      image: '/certificates/unstop-quizverse-2026.png',
      description: 'Certificate of participation in Unstop Quizverse 2026 national technical competition.',
      skills: ['Unstop Challenge', 'Technical Quiz', 'Problem Solving'],
      link: 'https://www.linkedin.com/in/prachi-pandey-0042a8328/details/certifications/'
    },
    {
      title: 'Certificate of Recognition — MY Bharat',
      issuer: 'Ministry of Youth Affairs and Sports (Govt. of India)',
      date: '2025 - 2026',
      credentialId: 'MERA YUVA BHARAT • VIKSIT BHARAT',
      category: 'Hackathons & Quizzes',
      badge: 'National Recognition',
      image: '/certificates/my-bharat-recognition.png',
      description: 'Official Certificate of Recognition awarded by the Ministry of Youth Affairs and Sports, Government of India, for successfully registering on MY Bharat and taking a stride towards Viksit Bharat.',
      skills: ['National Initiative', 'Mera Yuva Bharat', 'Youth Leadership', 'Viksit Bharat'],
      link: 'https://mybharat.gov.in/'
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
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#182038] border border-[#2d3a66] text-[#a78bfa] text-xs font-mono font-medium mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#6c63ff]" />
            Official Credentials & Document Verification
          </motion.div>

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
            {certifications.length} Verified Industry Certifications, Internships & Competitions
          </motion.p>
          <p className="text-xs text-[#6c63ff] font-mono mt-2">
            Click on any certificate to inspect official document photos, credential IDs & verification links
          </p>
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
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                onClick={() => setSelectedCert(cert)}
                className="p-5 sm:p-6 rounded-2xl bg-[#121627]/90 border border-[#232d4b] hover:border-[#6c63ff]/60 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1 cursor-pointer relative overflow-hidden"
              >
                {/* Visual Certificate Photo Banner if available */}
                {cert.image && (
                  <div className="relative mb-4 rounded-xl overflow-hidden border border-[#232d4b] group-hover:border-[#6c63ff]/50 transition-colors bg-[#080b14] aspect-[16/10]">
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121627] via-transparent to-black/30"></div>
                    <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-[#0a0d18]/90 backdrop-blur-md border border-[#6c63ff]/50 text-[10px] font-mono font-semibold text-[#a78bfa] flex items-center gap-1.5 shadow-md">
                      <Eye className="w-3 h-3 text-[#6c63ff]" />
                      Certificate Photo
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
                      <span className="px-3.5 py-1.5 rounded-full bg-[#6c63ff] text-white text-xs font-semibold flex items-center gap-1.5 shadow-xl transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                        <ZoomIn className="w-3.5 h-3.5" />
                        Click to Open Photo
                      </span>
                    </div>
                  </div>
                )}

                <div>
                  {/* Card Header when no photo banner */}
                  {!cert.image && (
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-[#1a2038] text-[#6c63ff] border border-[#2d385e] group-hover:scale-110 transition-transform">
                        <Award className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-[#171d33] border border-[#252f52] text-[10px] font-mono font-bold text-[#a78bfa]">
                        {cert.badge}
                      </span>
                    </div>
                  )}

                  {cert.image && (
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#171d33] border border-[#252f52] text-[10px] font-mono font-bold text-[#a78bfa]">
                        {cert.badge}
                      </span>
                      <span className="text-[10px] font-mono text-[#94a3b8]">
                        {cert.date}
                      </span>
                    </div>
                  )}

                  <h3 className="text-base font-bold text-white group-hover:text-[#a78bfa] transition-colors leading-snug">
                    {cert.title}
                  </h3>

                  <div className="flex items-center gap-2 mt-1.5 text-xs font-mono text-[#6c63ff] font-semibold">
                    <span>{cert.issuer}</span>
                    <span>•</span>
                    <span>{cert.date}</span>
                  </div>

                  {cert.credentialId && (
                    <div className="mt-1 text-[10px] font-mono text-[#94a3b8] truncate flex items-center gap-1">
                      <FileCheck className="w-3 h-3 text-[#6c63ff] shrink-0" />
                      <span className="truncate">ID: {cert.credentialId}</span>
                    </div>
                  )}

                  <p className="mt-3 text-xs text-[#94a3b8] leading-relaxed line-clamp-3">
                    {cert.description}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {cert.skills.slice(0, 3).map((skill, sIdx) => (
                      <span key={sIdx} className="text-[10px] font-mono text-[#cbd5e1] bg-[#171d33] px-2.5 py-1 rounded-full border border-[#252f52] flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-[#6c63ff]" />
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="text-[10px] font-mono text-[#a78bfa] bg-[#171d33] px-2 py-1 rounded-full border border-[#252f52]">
                        +{cert.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-[#232d4b] flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#a78bfa] flex items-center gap-1.5">
                    {cert.image ? (
                      <>
                        <Eye className="w-3.5 h-3.5 text-[#6c63ff]" />
                        View Certificate Photo
                      </>
                    ) : (
                      <>
                        <ShieldCheck className="w-3.5 h-3.5 text-[#6c63ff]" />
                        Inspect Credential
                      </>
                    )}
                  </span>
                  <div
                    className="px-3 py-1.5 rounded-full text-xs font-semibold text-white flex items-center gap-1 transition-all shadow-md group-hover:shadow-[#6c63ff]/25"
                    style={{ background: 'linear-gradient(135deg, #6c63ff 0%, #4d44db 100%)' }}
                  >
                    {cert.image ? 'Open Photo' : 'Inspect'}
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedCert(null);
            }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-[#121627] border border-[#232d4b] rounded-2xl max-w-3xl w-full my-auto max-h-[92vh] overflow-y-auto p-5 sm:p-7 shadow-2xl relative text-white"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#1a2038] border border-[#2d385e] text-[#94a3b8] hover:text-white hover:bg-[#232d4b] transition-all z-10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Category Badge & Status */}
              <div className="flex flex-wrap items-center gap-2 pr-12">
                <span className="px-3 py-1 rounded-full bg-[#1a2038] border border-[#2d385e] text-[#a78bfa] font-mono text-xs font-semibold uppercase">
                  {selectedCert.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 font-mono text-xs font-semibold flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  Verified Credential
                </span>
              </div>

              {/* Title & Metadata */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-3 leading-snug">
                {selectedCert.title}
              </h3>

              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-[#6c63ff] font-bold mt-1.5">
                <span>Issued by {selectedCert.issuer}</span>
                <span>•</span>
                <span>{selectedCert.date}</span>
                {selectedCert.credentialId && (
                  <>
                    <span>•</span>
                    <span className="text-[#cbd5e1] font-mono">ID: {selectedCert.credentialId}</span>
                  </>
                )}
              </div>

              {/* Certificate Image or Official Card */}
              {selectedCert.image ? (
                <div className="mt-5 space-y-3">
                  <div className="relative group rounded-xl overflow-hidden border-2 border-[#6c63ff]/40 bg-[#070a13] shadow-2xl">
                    {/* Actual certificate photo */}
                    <img 
                      src={selectedCert.image} 
                      alt={selectedCert.title} 
                      className="w-full max-h-[460px] object-contain bg-[#070a13] mx-auto cursor-pointer transition-transform duration-300 group-hover:scale-[1.01]"
                      onClick={() => setFullscreenImage(selectedCert.image)}
                    />
                    
                    {/* Overlay Action Bar */}
                    <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono text-[#cbd5e1] flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-[#6c63ff]" />
                        Official Certificate Document Photo
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setFullscreenImage(selectedCert.image)}
                          className="px-3 py-1.5 rounded-lg bg-[#1a2038]/90 hover:bg-[#252f52] border border-[#2d385e] text-xs font-semibold text-white flex items-center gap-1.5 transition-all shadow-md"
                          title="View Fullscreen"
                        >
                          <Maximize2 className="w-3.5 h-3.5 text-[#6c63ff]" />
                          Fullscreen
                        </button>
                        <a
                          href={selectedCert.image}
                          target="_blank"
                          rel="noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-[#1a2038]/90 hover:bg-[#252f52] border border-[#2d385e] text-xs font-semibold text-white flex items-center gap-1.5 transition-all shadow-md"
                          title="Open original file in new tab"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-[#6c63ff]" />
                          Open File
                        </a>
                        <a
                          href={selectedCert.image}
                          download={`${selectedCert.title.replace(/[^a-zA-Z0-9]/g, '_')}.png`}
                          className="px-3 py-1.5 rounded-lg bg-[#1a2038]/90 hover:bg-[#252f52] border border-[#2d385e] text-xs font-semibold text-white flex items-center gap-1.5 transition-all shadow-md"
                          title="Download Image"
                        >
                          <Download className="w-3.5 h-3.5 text-[#6c63ff]" />
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                  <p className="text-[11px] font-mono text-center text-[#94a3b8]">
                    Click on the image above to open high-resolution fullscreen inspection
                  </p>
                </div>
              ) : (
                /* Fallback Official Digital Card when image is not yet uploaded */
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
              )}

              {/* Description */}
              <p className="mt-5 text-[#cbd5e1] text-xs sm:text-sm leading-relaxed">
                {selectedCert.description}
              </p>

              {/* Skills */}
              <div className="mt-4">
                <span className="text-xs font-mono text-[#94a3b8] uppercase tracking-wider font-semibold">
                  Verified Competencies & Skills:
                </span>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {selectedCert.skills.map((s, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-[#171d33] border border-[#252f52] text-xs font-mono text-[#cbd5e1] flex items-center gap-1.5">
                      <CheckCircle className="w-3 h-3 text-[#6c63ff]" />
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="mt-7 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#232d4b]">
                <div className="text-xs font-mono text-[#94a3b8]">
                  {selectedCert.image ? '📸 Photo Attached & Verified' : '🛡️ Official Digital Credential'}
                </div>

                <div className="flex items-center gap-3">
                  {selectedCert.image && (
                    <button
                      onClick={() => setFullscreenImage(selectedCert.image)}
                      className="px-4 py-2.5 rounded-full bg-[#171d33] hover:bg-[#232d4b] border border-[#252f52] text-white text-xs font-semibold flex items-center gap-2 transition-all"
                    >
                      <ZoomIn className="w-4 h-4 text-[#6c63ff]" />
                      Zoom Photo
                    </button>
                  )}
                  <a
                    href={selectedCert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-full text-white text-xs font-semibold flex items-center gap-2 transition-all shadow-lg hover:shadow-[#6c63ff]/30 hover:scale-[1.02]"
                    style={{ background: 'linear-gradient(135deg, #6c63ff 0%, #4d44db 100%)' }}
                  >
                    Verify on Platform
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Dedicated High-Resolution Fullscreen Lightbox */}
      <AnimatePresence>
        {fullscreenImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-3 sm:p-6"
            onClick={(e) => {
              if (e.target === e.currentTarget) setFullscreenImage(null);
            }}
          >
            {/* Top Toolbar */}
            <div className="w-full max-w-6xl flex items-center justify-between mb-3 px-2 text-white">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#6c63ff]" />
                <span className="text-xs sm:text-sm font-mono font-bold text-[#a78bfa]">
                  Official Certificate Document Viewer
                </span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={fullscreenImage}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#1a2038] hover:bg-[#252f52] border border-[#2d385e] text-xs font-semibold text-white flex items-center gap-1.5 transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#6c63ff]" />
                  Open Raw
                </a>
                <a
                  href={fullscreenImage}
                  download="certificate.png"
                  className="px-3 py-1.5 rounded-lg bg-[#1a2038] hover:bg-[#252f52] border border-[#2d385e] text-xs font-semibold text-white flex items-center gap-1.5 transition-all"
                >
                  <Download className="w-3.5 h-3.5 text-[#6c63ff]" />
                  Save
                </a>
                <button
                  onClick={() => setFullscreenImage(null)}
                  className="p-2 rounded-full bg-[#1a2038] hover:bg-[#252f52] border border-[#2d385e] text-[#94a3b8] hover:text-white transition-all ml-2"
                  aria-label="Close fullscreen view"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* High Res Image Display */}
            <div 
              className="relative max-w-6xl max-h-[85vh] flex items-center justify-center overflow-auto p-2"
              onClick={(e) => {
                if (e.target === e.currentTarget) setFullscreenImage(null);
              }}
            >
              <motion.img 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={fullscreenImage} 
                alt="Certificate full view" 
                className="max-w-full max-h-[82vh] object-contain rounded-xl shadow-2xl border border-[#232d4b] bg-[#0c0f1c]"
              />
            </div>

            <div className="mt-3 text-xs font-mono text-[#94a3b8] flex items-center gap-2">
              <span>Press <kbd className="px-2 py-0.5 rounded bg-[#1a2038] border border-[#2d385e] text-[#a78bfa]">Esc</kbd> or click background to exit</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
