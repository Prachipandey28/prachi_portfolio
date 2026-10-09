import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Sparkles, CheckCircle2, MapPin, Globe, MessageSquare, Terminal } from 'lucide-react';
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
    subject: 'AI Collaboration / Role Inquiry',
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
      
      // Trigger canvas confetti celebration
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.log("Confetti triggered");
      }
    }, 1000);
  };

  const socialLinks = [
    { label: 'GitHub', icon: GithubIcon, href: 'https://github.com', color: 'hover:text-cyan-400 hover:border-cyan-400' },
    { label: 'LinkedIn', icon: LinkedinIcon, href: 'https://linkedin.com', color: 'hover:text-blue-400 hover:border-blue-400' },
    { label: 'HuggingFace', icon: Globe, href: 'https://huggingface.co', color: 'hover:text-amber-400 hover:border-amber-400' },
    { label: 'Email Direct', icon: Mail, href: 'mailto:prachi.ai.engineer@gmail.com', color: 'hover:text-purple-400 hover:border-purple-400' }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#050811]">
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wider uppercase mb-4"
          >
            <Send className="w-3.5 h-3.5" />
            Connect & Collaborate
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-orbitron font-extrabold text-white tracking-tight"
          >
            Let's Build <span className="gradient-text-cyan">Next-Gen AI</span> Together
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-400"
          >
            Open for Senior AI Engineering roles, LLM architecture consulting, healthcare AI research, and high-impact technical collaborations.
          </motion.p>
        </div>

        {/* Contact Content Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct info & social cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Availability Banner */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-3xl bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                CURRENT STATUS: AVAILABLE
              </div>
              <h3 className="text-xl font-orbitron font-bold text-white mt-2">
                Open for Lead / Senior AI Roles
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Available for full-time executive AI engineering, LLM pipeline design, or targeted research advisory.
              </p>
            </motion.div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              <a 
                href="mailto:prachi.ai.engineer@gmail.com"
                className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800 flex items-center gap-4 hover:border-cyan-500/40 hover:bg-slate-900 transition-all group"
              >
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase">Direct Email</div>
                  <div className="text-sm font-semibold text-white group-hover:text-cyan-400">prachi.ai.engineer@gmail.com</div>
                </div>
              </a>

              <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase">Location</div>
                  <div className="text-sm font-semibold text-white">Silicon Valley, CA / Remote Worldwide</div>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div>
              <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">Neural Profiles</div>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-300 text-xs font-mono flex items-center gap-2.5 transition-all ${social.color}`}
                    >
                      <Icon className="w-4 h-4 text-cyan-400" />
                      <span>{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl glass-panel border border-cyan-500/30 shadow-2xl relative"
            >
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-400 mx-auto flex items-center justify-center shadow-glow-cyan">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-orbitron font-bold text-white">Transmission Received!</h3>
                  <p className="text-sm text-slate-400 max-w-md mx-auto">
                    Thank you for reaching out. Prachi will review your message and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: 'AI Collaboration / Role Inquiry', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-cyan-400 font-mono text-xs hover:bg-slate-800"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-orbitron font-bold text-white flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-cyan-400" />
                    Transmit Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-2">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. Alex Vance"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400 placeholder:text-slate-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-2">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@ai-innovations.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400 placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-2">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Prachi, we'd love to discuss an AI Architect opportunity at our team..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400 placeholder:text-slate-600 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 text-black font-extrabold text-sm flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-glow-cyan"
                  >
                    {isSubmitting ? (
                      <span>Sending Signal...</span>
                    ) : (
                      <>
                        <span>Submit Neural Transmission</span>
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
