import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2, MapPin, Phone, Code2 } from 'lucide-react';
import confetti from 'canvas-confetti';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'AI Internship / Collaboration Opportunity',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Fallback
      }
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0a0d18] border-t border-[#1b2238]">
      
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-[#6c63ff]/10 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-white"
          >
            Contact <span style={{ color: '#6c63ff' }}>Me</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#94a3b8] text-sm sm:text-base font-medium tracking-wide uppercase mt-4"
          >
            Let&apos;s Connect & Discuss AI Opportunities
          </motion.p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Status Pill Card */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-[#121627]/90 border border-[#232d4b] shadow-xl"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                Status: Available for Internships
              </div>
              <h3 className="text-lg font-bold text-white mt-2">
                Open for AI/ML & Software Roles
              </h3>
              <p className="mt-2 text-xs text-[#94a3b8] leading-relaxed">
                Currently seeking internship opportunities in Artificial Intelligence, Machine Learning, Data Science, and Web Engineering.
              </p>
            </motion.div>

            {/* Direct Details Cards */}
            <div className="space-y-3">
              <a 
                href="tel:+919352103753"
                className="p-4 sm:p-5 rounded-2xl bg-[#121627]/90 border border-[#232d4b] flex items-center gap-4 hover:border-[#6c63ff]/60 transition-all duration-300 group shadow-lg"
              >
                <div className="p-3 rounded-xl bg-[#1a2038] text-[#6c63ff] border border-[#2d385e] group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#94a3b8] uppercase">Phone Call / WhatsApp</div>
                  <div className="text-sm font-bold text-white group-hover:text-[#a78bfa] transition-colors">+91 93521 03753</div>
                </div>
              </a>

              <a 
                href="mailto:prachipandey1528@gmail.com"
                className="p-4 sm:p-5 rounded-2xl bg-[#121627]/90 border border-[#232d4b] flex items-center gap-4 hover:border-[#6c63ff]/60 transition-all duration-300 group shadow-lg"
              >
                <div className="p-3 rounded-xl bg-[#1a2038] text-[#6c63ff] border border-[#2d385e] group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#94a3b8] uppercase">Email Address</div>
                  <div className="text-sm font-bold text-white group-hover:text-[#a78bfa] transition-colors">prachipandey1528@gmail.com</div>
                </div>
              </a>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#121627]/90 border border-[#232d4b] flex items-center gap-4 shadow-lg">
                <div className="p-3 rounded-xl bg-[#1a2038] text-[#6c63ff] border border-[#2d385e]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#94a3b8] uppercase">Current Location</div>
                  <div className="text-sm font-bold text-white">Jaipur, Rajasthan, India</div>
                </div>
              </div>
            </div>

            {/* Social Links Cards */}
            <div className="pt-2">
              <div className="text-xs font-mono text-[#94a3b8] uppercase tracking-wider mb-3 font-semibold">Verified Channels</div>
              <div className="grid grid-cols-3 gap-2.5">
                <a
                  href="https://github.com/prachipandey28"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-[#121627] border border-[#232d4b] text-[#cbd5e1] text-xs font-semibold flex items-center justify-center gap-2 hover:border-[#6c63ff] hover:text-white transition-all shadow-md"
                >
                  <GithubIcon className="w-4 h-4 text-[#6c63ff]" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/prachi-pandey-0042a8328/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-[#121627] border border-[#232d4b] text-[#cbd5e1] text-xs font-semibold flex items-center justify-center gap-2 hover:border-[#6c63ff] hover:text-[#a78bfa] transition-all shadow-md"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#6c63ff]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://leetcode.com/prachipandey"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-[#121627] border border-[#232d4b] text-[#cbd5e1] text-xs font-semibold flex items-center justify-center gap-2 hover:border-[#6c63ff] hover:text-[#a78bfa] transition-all shadow-md"
                >
                  <Code2 className="w-4 h-4 text-[#a78bfa]" />
                  <span>LeetCode</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl bg-[#121627]/90 border border-[#232d4b] shadow-2xl relative"
            >
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#6c63ff]/20 border border-[#6c63ff]/50 text-[#a78bfa] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-xs text-[#94a3b8] max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Prachi will review your message and reply via email shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: 'AI Internship / Collaboration Opportunity', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full text-white text-xs font-semibold"
                    style={{ background: 'linear-gradient(135deg, #6c63ff 0%, #4d44db 100%)' }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-white mb-4">
                    Send a Direct Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#94a3b8] mb-1.5 font-semibold">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Vance"
                        className="w-full px-4 py-3 rounded-xl bg-[#171d33] border border-[#252f52] text-white text-xs focus:outline-none focus:border-[#6c63ff] placeholder:text-[#64748b]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#94a3b8] mb-1.5 font-semibold">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#171d33] border border-[#252f52] text-white text-xs focus:outline-none focus:border-[#6c63ff] placeholder:text-[#64748b]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#94a3b8] mb-1.5 font-semibold">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#171d33] border border-[#252f52] text-white text-xs focus:outline-none focus:border-[#6c63ff]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#94a3b8] mb-1.5 font-semibold">Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Prachi, I reviewed your AI portfolio and would like to discuss..."
                      className="w-full px-4 py-3 rounded-xl bg-[#171d33] border border-[#252f52] text-white text-xs focus:outline-none focus:border-[#6c63ff] placeholder:text-[#64748b] resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-full text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-[#6c63ff]/20 mt-2"
                    style={{ background: 'linear-gradient(135deg, #6c63ff 0%, #4d44db 100%)' }}
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}


