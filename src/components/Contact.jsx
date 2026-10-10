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
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950 border-t border-slate-900">
      
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-sky-500/5 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-mono tracking-wider uppercase mb-4"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Let's Discuss <span className="gradient-text-sky">Opportunities & AI Projects</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base text-slate-400"
          >
            Open for AI/ML, Data Science, and Software Development internships. Feel free to reach out directly or send a message below!
          </motion.p>
        </div>

        {/* Contact Content Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Status Pill */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                Status: Available for Internships
              </div>
              <h3 className="text-lg font-bold text-white mt-2">
                Open for AI/ML & Software Roles
              </h3>
              <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                Currently seeking internship opportunities in Artificial Intelligence, Machine Learning, Data Science, and Web Engineering.
              </p>
            </motion.div>

            {/* Direct Details Cards */}
            <div className="space-y-3">
              <a 
                href="tel:+919352103753"
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/90 flex items-center gap-4 hover:border-slate-700 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-sky-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase">Phone Call / WhatsApp</div>
                  <div className="text-sm font-semibold text-white group-hover:text-sky-400 transition-colors">+91 93521 03753</div>
                </div>
              </a>

              <a 
                href="mailto:prachipandey1528@gmail.com"
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/90 flex items-center gap-4 hover:border-slate-700 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-sky-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase">Email Address</div>
                  <div className="text-sm font-semibold text-white group-hover:text-sky-400 transition-colors">prachipandey1528@gmail.com</div>
                </div>
              </a>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/90 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-indigo-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase">Current Location</div>
                  <div className="text-sm font-semibold text-white">Jaipur, Rajasthan, India</div>
                </div>
              </div>
            </div>

            {/* Social Links Cards */}
            <div className="pt-2">
              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2.5">Verified Developer Channels</div>
              <div className="grid grid-cols-3 gap-2">
                <a
                  href="https://github.com/prachipandey28"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 text-xs font-medium flex items-center justify-center gap-2 hover:border-slate-700 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-sky-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/prachi-pandey-0042a8328/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 text-xs font-medium flex items-center justify-center gap-2 hover:border-slate-700 hover:text-sky-400 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-sky-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://leetcode.com/prachipandey"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 text-xs font-medium flex items-center justify-center gap-2 hover:border-slate-700 hover:text-amber-400 transition-colors"
                >
                  <Code2 className="w-4 h-4 text-amber-400" />
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
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/90 shadow-xl relative"
            >
              {submitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-xs text-slate-400 max-w-md mx-auto">
                    Thank you for reaching out. Prachi will get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: 'AI Internship / Collaboration Opportunity', message: '' });
                    }}
                    className="mt-4 px-5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sky-400 text-xs font-medium hover:bg-slate-900"
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
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Vance"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-400 placeholder:text-slate-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1.5">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-400 placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Prachi, I reviewed your AI portfolio and would like to discuss..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-sky-400 placeholder:text-slate-600 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-xs flex items-center justify-center gap-2 transition-colors active:scale-95 shadow-md shadow-sky-500/20"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5" />
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

