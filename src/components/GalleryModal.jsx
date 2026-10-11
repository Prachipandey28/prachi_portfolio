import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Camera, 
  MapPin, 
  Calendar, 
  Maximize2, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Download,
  Tag
} from 'lucide-react';
import { playSound } from '../utils/soundEffects';

export default function GalleryModal({ isOpen, onClose }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: 'CodeForge Hackathon at Microsoft Office',
      location: 'Microsoft Office, DLF Cyber City, Gurgaon',
      date: 'Feb 2025',
      category: 'Hackathons & Coding Sprints',
      tag: 'Microsoft DLF Cyber City',
      image: '/gallery/microsoft-office-gurgaon-prachi.jpg',
      aspect: 'portrait',
      description: 'Prachi smiling proudly at the Microsoft Office Gurgaon entrance during the in-person CodeForge Hackathon, participating in high-intensity software engineering and collaborative architecture challenges.'
    },
    {
      id: 2,
      title: 'CodeForge Hackathon Team at Microsoft',
      location: 'Microsoft Office, DLF Cyber City, Gurgaon',
      date: 'Feb 2025',
      category: 'Hackathons & Coding Sprints',
      tag: 'Microsoft Hackathon Team',
      image: '/gallery/microsoft-hackathon-team-selfie-prachi.jpg',
      aspect: 'landscape',
      description: 'Team thumbs-up inside Microsoft DLF Cyber City during the CodeForge Hackathon with official delegate wristbands and software engineering peers.'
    },
    {
      id: 3,
      title: 'Intense Hackathon Team Coding Sprint',
      location: 'Hackathon Innovation Arena',
      date: 'Feb 2025',
      category: 'Hackathons & Coding Sprints',
      tag: '24h Coding Sprint',
      image: '/gallery/hackathon-team-sprint-coding-prachi.jpg',
      aspect: 'landscape',
      description: 'Prachi and her development squad deep in collaborative code sprint and debugging sessions, building software prototypes under tight deadlines.'
    },
    {
      id: 4,
      title: 'Live Testnet Deployment & Bootcamp Coding',
      location: 'Auditorium, Arya College of Engg. & IT',
      date: 'Sep 2025',
      category: 'Hackathons & Coding Sprints',
      tag: 'Stacks Testnet Deployment',
      image: '/gallery/stacks-live-coding-testnet-prachi.jpg',
      aspect: 'landscape',
      description: 'Hands-on live coding during the Stacks Fullstack Bootcamp, deploying smart contract interactions and full-stack interfaces on the Stacks Testnet Faucet.'
    },
    {
      id: 5,
      title: 'Stacks Fullstack Bootcamp Stage Ceremony',
      location: 'Auditorium, Arya College of Engg. & IT',
      date: 'Sep 2025',
      category: 'Hackathons & Coding Sprints',
      tag: 'Bootcamp Stage Honors',
      image: '/gallery/stacks-bootcamp-stage-prachi.jpg',
      aspect: 'portrait',
      description: 'Receiving the official "Build on Stacks" award merchandise and graduation honors on stage at the Rise in x Stacks Fullstack Bootcamp held at ACEIT.'
    },
    {
      id: 6,
      title: 'Hack 4 Health Hackathon Cash Prize Winner',
      location: 'Academic Block, Arya College of Engg. & IT',
      date: '2024',
      category: 'Hackathons & Coding Sprints',
      tag: 'Winner ₹5,000 Prize',
      image: '/gallery/hack-4-health-award-ceremony-prachi.jpg',
      aspect: 'landscape',
      description: 'Prachi and her project team receiving the official ₹5,000 Hackathon Gift Prize for their flagship Healthcare AI presentation ("Bone Cancer Detection System") evaluated by senior engineering jury members.'
    },
    {
      id: 7,
      title: 'Databricks User Group Jaipur Launch',
      location: 'Origin, Arya College of Engg. & IT',
      date: 'Apr 2025',
      category: 'AI Events & Community',
      tag: 'Databricks Community',
      image: '/gallery/databricks-user-group-jaipur-prachi.jpg',
      aspect: 'portrait',
      description: 'Participating in the Databricks User Group Jaipur launch supported by Databricks, building community around big data pipelines, Lakehouse architecture, and enterprise AI.'
    },
    {
      id: 8,
      title: 'IEEE National Project Expo Delegation',
      location: 'Block A, JECRC Foundation, Jaipur',
      date: 'Feb 2025',
      category: 'AI Events & Community',
      tag: 'National Award Rank',
      image: '/gallery/national-project-expo-jecrc-prachi.jpg',
      aspect: 'landscape',
      description: 'Prachi with the Arya College delegation presenting innovative engineering and AI projects at the National Project Expo organized by the IEEE JECRC Student Branch.'
    },
    {
      id: 9,
      title: 'SCINTILLATIONS 2024 - AI & Hardware Project Expo',
      location: 'Exhibition Hall, ACEIT Jaipur',
      date: '2024',
      category: 'AI Events & Community',
      tag: 'Hardware & IoT Demo',
      image: '/gallery/scintillations-2024-project-expo-prachi.jpg',
      aspect: 'landscape',
      description: 'Presenting "Radaruino" and "Yestosign" smart embedded systems with Team Elementa 16, integrating Arduino microcontrollers, Moon Rover robotics, and gesture recognition interfaces.'
    },
    {
      id: 10,
      title: 'Tech Summit Keynote with Engineering Cohort',
      location: 'Convention Auditorium',
      date: '2024 - 2025',
      category: 'AI Events & Community',
      tag: 'Tech Summit Keynote',
      image: '/gallery/tech-summit-auditorium-cohort-prachi.jpg',
      aspect: 'landscape',
      description: 'Attending deep-tech keynotes and industry presentations alongside engineering cohort peers at national tech summits and conferences.'
    },
    {
      id: 11,
      title: 'VICTORY 2024 Annual Fest - Eco-Couture Runway',
      location: 'Main Stage, Arya College of Engg. & IT',
      date: 'Mar 2024',
      category: 'Campus & Leadership',
      tag: 'Victory-24 Runway 3rd Place',
      image: '/gallery/victory-24-annual-fest-runway-prachi.jpg',
      aspect: 'landscape',
      description: 'Walking the grand stage at the VICTORY 2024 Annual College Festival in a custom newspaper eco-couture gown, celebrating sustainable creativity, team spirit, and winning 3rd position in Don-De-Mode.'
    },
    {
      id: 12,
      title: 'Professional Executive Portrait',
      location: 'Tech Campus, Jaipur',
      date: '2025',
      category: 'Campus & Leadership',
      tag: 'Executive Profile',
      image: '/gallery/prachi-executive-portrait-blazer.jpg',
      aspect: 'portrait',
      description: 'High-definition executive portrait of Prachi Pandey in formal blazer attire, reflecting leadership, technical drive, and dedication to next-generation AI engineering.'
    },
    {
      id: 13,
      title: 'Corporate Placement & Department Delegation',
      location: 'Campus Courtyard, Arya College of Engg. & IT',
      date: '2024 - 2025',
      category: 'Campus & Leadership',
      tag: 'Professional Delegation',
      image: '/gallery/formal-placement-delegation-prachi.jpg',
      aspect: 'portrait',
      description: 'Prachi with fellow women-in-tech student engineers dressed in formal business attire for executive campus placement briefings and engineering presentations.'
    },
    {
      id: 14,
      title: 'NSS Campus Student Leadership Delegation',
      location: 'Campus Gardens, Arya College of Engg. & IT',
      date: '2024 - 2025',
      category: 'Campus & Leadership',
      tag: 'NSS 25 Years Leader',
      image: '/gallery/nss-leadership-arya-college-prachi.jpg',
      aspect: 'portrait',
      description: 'Prachi with peer student leaders wearing official NSS 25 Years Arya College uniform, organizing campus community outreach, social drives, and student initiatives.'
    },
    {
      id: 15,
      title: 'Campus Amphitheater Moments & Camaraderie',
      location: 'Central Amphitheater, Arya College',
      date: '2024 - 2025',
      category: 'Campus & Leadership',
      tag: 'Campus Life',
      image: '/gallery/campus-amphitheater-peers-prachi.jpg',
      aspect: 'landscape',
      description: 'Sunny campus afternoon at the college amphitheater steps with close engineering peers, sharing laughs, brainstorming ideas, and college memories.'
    },
    {
      id: 16,
      title: 'Engineering Cohort Campus Green Gathering',
      location: 'Campus Lawn, Arya College',
      date: '2024 - 2025',
      category: 'Campus & Leadership',
      tag: 'Engineering Cohort',
      image: '/gallery/campus-cohort-lawn-gathering-prachi.jpg',
      aspect: 'landscape',
      description: 'Group photo of the computer science & AI engineering cohort gathered on the lush campus grounds outside the campus temple.'
    },
    {
      id: 17,
      title: 'Classroom Innovation & Architecture Discussion',
      location: 'Department of CSE, Arya College of Engg. & IT',
      date: '2024 - 2025',
      category: 'Campus & Leadership',
      tag: 'Peer Innovation',
      image: '/gallery/classroom-collaboration-arya-college-prachi.jpg',
      aspect: 'landscape',
      description: 'Collaborative technical presentation and whiteboard systems architecture discussion with computer science peers at Arya College.'
    }
  ];

  const categories = ['All', 'Hackathons & Coding Sprints', 'AI Events & Community', 'Campus & Leadership'];

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      playSound('modalOpen');
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        if (activePhotoIndex !== null) {
          setActivePhotoIndex(null);
          playSound('modalClose');
        } else {
          onClose();
          playSound('modalClose');
        }
      } else if (e.key === 'ArrowRight' && activePhotoIndex !== null) {
        playSound('click');
        setActivePhotoIndex((prev) => (prev + 1) % filteredItems.length);
      } else if (e.key === 'ArrowLeft' && activePhotoIndex !== null) {
        playSound('click');
        setActivePhotoIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activePhotoIndex, filteredItems.length, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          playSound('modalClose');
          onClose();
        }
      }}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25 }}
        className="bg-[#101426] border border-[#232d4b] rounded-3xl max-w-5xl w-full my-auto max-h-[92vh] overflow-y-auto p-5 sm:p-8 shadow-2xl relative text-white"
      >
        {/* Close Button */}
        <button
          onClick={() => {
            playSound('modalClose');
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#182038] border border-[#2d385e] text-[#94a3b8] hover:text-white hover:bg-[#232d4b] transition-all z-20"
          aria-label="Close gallery"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-wrap items-center gap-2 mb-2 pr-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#182038] border border-[#2d3a66] text-[#a78bfa] text-xs font-mono font-semibold">
            <Camera className="w-3.5 h-3.5 text-[#6c63ff]" />
            Official Event & Campus Highlights
          </span>
          <span className="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 font-mono text-xs font-semibold">
            Verified In-Person Moments
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 leading-snug">
          Life, Hackathons & <span style={{ color: '#6c63ff' }}>Campus Gallery</span>
        </h3>
        
        <p className="text-xs sm:text-sm text-[#94a3b8] mt-1 max-w-2xl leading-relaxed">
          Real moments behind the code: representing Arya College at Microsoft Gurgaon, JECRC IEEE National Expo, Rise in Stacks bootcamp stage, and NSS leadership.
        </p>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 my-6 pt-2 border-t border-[#1e2746]">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  playSound('filter');
                  setActiveFilter(cat);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? 'text-white shadow-md shadow-[#6c63ff]/30 scale-105'
                    : 'bg-[#151a2e] text-[#94a3b8] hover:text-white hover:bg-[#1f2642] border border-[#232d4b]'
                }`}
                style={isActive ? { background: 'linear-gradient(135deg, #6c63ff 0%, #4d44db 100%)' } : {}}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => {
                playSound('click');
                setActivePhotoIndex(idx);
              }}
              className="group rounded-2xl bg-[#14192d] border border-[#232d4b] hover:border-[#6c63ff]/60 overflow-hidden shadow-xl cursor-pointer flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
            >
              {/* Photo Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#0a0d18]">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14192d] via-transparent to-black/30"></div>
                
                {/* Event Tag */}
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-[#0a0d18]/90 backdrop-blur-md border border-[#6c63ff]/40 text-[10px] font-mono font-semibold text-[#a78bfa] flex items-center gap-1 shadow-md">
                  <Tag className="w-2.5 h-2.5 text-[#6c63ff]" />
                  {item.tag}
                </div>

                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-3 py-1.5 rounded-full bg-[#6c63ff] text-white text-xs font-semibold flex items-center gap-1.5 shadow-xl transform translate-y-1 group-hover:translate-y-0 transition-transform">
                    <Maximize2 className="w-3.5 h-3.5" />
                    Expand Photo
                  </span>
                </div>
              </div>

              {/* Photo Meta */}
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-[#a78bfa] transition-colors leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#94a3b8] mt-1.5 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#1e2746] flex flex-wrap items-center justify-between text-[11px] font-mono text-[#6c63ff]">
                  <span className="flex items-center gap-1 truncate max-w-[180px]" title={item.location}>
                    <MapPin className="w-3 h-3 shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </span>
                  <span className="flex items-center gap-1 text-[#94a3b8]">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Footer Note */}
        <div className="mt-8 pt-4 border-t border-[#1e2746] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#94a3b8]">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#6c63ff]" />
            {galleryItems.length} Real Campus & Hackathon Moments Attached
          </span>
          <span>Click any picture to open high-resolution fullscreen inspection</span>
        </div>
      </motion.div>

      {/* Fullscreen Lightbox for the Active Photo */}
      <AnimatePresence>
        {activePhotoIndex !== null && filteredItems[activePhotoIndex] && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-between p-3 sm:p-6"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                playSound('modalClose');
                setActivePhotoIndex(null);
              }
            }}
          >
            {/* Top Toolbar */}
            <div className="w-full max-w-5xl flex items-center justify-between px-2 text-white">
              <div className="flex items-center gap-2">
                <Camera className="w-5 h-5 text-[#6c63ff]" />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white leading-tight">
                    {filteredItems[activePhotoIndex].title}
                  </span>
                  <span className="text-[11px] font-mono text-[#a78bfa]">
                    {filteredItems[activePhotoIndex].location} • {filteredItems[activePhotoIndex].date}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={filteredItems[activePhotoIndex].image}
                  download={`${filteredItems[activePhotoIndex].title.replace(/[^a-zA-Z0-9]/g, '_')}.jpg`}
                  className="px-3 py-1.5 rounded-lg bg-[#182038] hover:bg-[#252f52] border border-[#2d385e] text-xs font-semibold text-white flex items-center gap-1.5 transition-all"
                  title="Download photo"
                >
                  <Download className="w-3.5 h-3.5 text-[#6c63ff]" />
                  Save
                </a>
                <button
                  onClick={() => {
                    playSound('modalClose');
                    setActivePhotoIndex(null);
                  }}
                  className="p-2 rounded-full bg-[#182038] hover:bg-[#252f52] border border-[#2d385e] text-[#94a3b8] hover:text-white transition-all ml-1"
                  aria-label="Close fullscreen view"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Photo with Navigation Arrows */}
            <div className="relative w-full max-w-5xl flex items-center justify-center my-auto p-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  playSound('click');
                  setActivePhotoIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
                }}
                className="absolute left-2 sm:left-4 z-10 p-2.5 sm:p-3 rounded-full bg-black/70 hover:bg-[#6c63ff] border border-white/20 text-white transition-all shadow-xl"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <motion.img 
                key={filteredItems[activePhotoIndex].image}
                initial={{ scale: 0.94, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.94, opacity: 0 }}
                transition={{ duration: 0.2 }}
                src={filteredItems[activePhotoIndex].image} 
                alt={filteredItems[activePhotoIndex].title} 
                className="max-h-[72vh] max-w-full object-contain rounded-2xl shadow-2xl border border-[#232d4b] bg-[#0c0f1d]"
              />

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  playSound('click');
                  setActivePhotoIndex((prev) => (prev + 1) % filteredItems.length);
                }}
                className="absolute right-2 sm:right-4 z-10 p-2.5 sm:p-3 rounded-full bg-black/70 hover:bg-[#6c63ff] border border-white/20 text-white transition-all shadow-xl"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="w-full max-w-2xl text-center px-4 py-2 bg-[#121627]/80 rounded-2xl border border-[#232d4b] backdrop-blur-md">
              <p className="text-xs text-[#cbd5e1] leading-relaxed">
                {filteredItems[activePhotoIndex].description}
              </p>
              <div className="mt-1 text-[10px] font-mono text-[#94a3b8]">
                Photo {activePhotoIndex + 1} of {filteredItems.length} • Use Arrow Keys or Swipe to navigate • Press Esc to close
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
