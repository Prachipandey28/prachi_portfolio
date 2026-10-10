import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, GraduationCap } from 'lucide-react';
import prachiPhoto from '../assets/prachi.jpeg';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0c0f1d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          About <span>Me</span>
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Photo with dots background */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border-2 border-[#6c63ff]/40 shadow-2xl p-2 bg-[#151a2e]">
                <img 
                  src={prachiPhoto} 
                  alt="Prachi Pandey" 
                  className="w-full h-full object-cover rounded-xl"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400";
                  }}
                />
              </div>

              {/* Decorative accent dots grid */}
              <div className="absolute -bottom-4 -right-4 w-28 h-28 opacity-20 -z-10 bg-[radial-gradient(#6c63ff_2px,transparent_2px)] [background-size:12px_12px]"></div>
            </motion.div>
          </div>

          {/* Right Side: Text, Info Grid & Education Card */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                AI Enthusiast & Problem Solver
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                I am a B.Tech student specializing in Artificial Intelligence and Data Science at Arya College of Engineering & IT (9.3 CGPA) with a passion for building diagnostic systems, computer vision algorithms (YOLOv8), and intelligent software applications. My expertise lies in developing AI solutions that address real-world challenges in healthcare and data analytics.
              </p>

              {/* Info Grid (4 Items) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-[#151a2e] border border-slate-800 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#6c63ff]/20 border border-[#6c63ff]/40 flex items-center justify-center text-[#38bdf8] shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Name:</span>
                    <span className="text-sm font-semibold text-white">Prachi Pandey</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#151a2e] border border-slate-800 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#6c63ff]/20 border border-[#6c63ff]/40 flex items-center justify-center text-[#38bdf8] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Email:</span>
                    <a href="mailto:prachipandey1528@gmail.com" className="text-xs font-semibold text-white hover:text-[#38bdf8] transition-colors truncate block max-w-[170px]">
                      prachipandey1528@gmail.com
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#151a2e] border border-slate-800 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#6c63ff]/20 border border-[#6c63ff]/40 flex items-center justify-center text-[#38bdf8] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Phone:</span>
                    <a href="tel:+919352103753" className="text-sm font-semibold text-white hover:text-[#38bdf8] transition-colors">
                      +91 93521 03753
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#151a2e] border border-slate-800 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#6c63ff]/20 border border-[#6c63ff]/40 flex items-center justify-center text-[#38bdf8] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">From:</span>
                    <span className="text-sm font-semibold text-white">Jaipur, Rajasthan</span>
                  </div>
                </div>
              </div>

              {/* Education Card with Progress Fill */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#151a2e] to-[#1e2642] border border-[#6c63ff]/30 shadow-xl">
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap className="w-6 h-6 text-[#6c63ff]" />
                  <h4 className="text-lg font-bold text-white">B.Tech in AI & Data Science</h4>
                </div>
                <p className="text-xs text-slate-300 font-medium">Arya College of Engineering & IT | <span className="text-emerald-400 font-bold">CGPA: 9.3 / 10</span></p>

                {/* Progress Bar Container */}
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex-1 h-3 rounded-full bg-slate-900 overflow-hidden p-0.5 border border-slate-800">
                    <div className="h-full rounded-full bg-gradient-to-r from-[#6c63ff] to-[#38bdf8] w-[93%] transition-all duration-1000 shadow-lg shadow-indigo-500/50"></div>
                  </div>
                  <span className="text-xs font-bold font-mono text-[#38bdf8]">93%</span>
                </div>

                <p className="text-[11px] text-slate-400 font-mono mt-3">Expected Graduation: May 2027</p>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}


