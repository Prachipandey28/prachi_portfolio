import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Cpu, 
  Sparkles, 
  Send, 
  RefreshCw, 
  Sliders, 
  Zap, 
  User, 
  Mic, 
  Volume2, 
  VolumeX, 
  Copy, 
  Check, 
  ArrowRight,
  Flame
} from 'lucide-react';
import { playSound } from '../utils/soundEffects';

export default function AiLab() {
  const [activeTab, setActiveTab] = useState('assistant');

  // AI Chat Assistant State
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hello! I am Prachi-AI Copilot, powered by Prachi's comprehensive AI/ML portfolio knowledge base.",
      highlight: "Ask me anything via text or voice about Prachi's B.Tech at Arya College (9.3 CGPA), YOLOv8 Bone Cancer detection, NLP resume parser, 30+ verified industry certificates, or hiring availability!",
      actionLink: '#contact',
      actionLabel: 'Contact Prachi'
    }
  ]);
  const [inputPrompt, setInputPrompt] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);

  // Voice Interaction State
  const [isListening, setIsListening] = useState(false);
  const [voiceSpeechEnabled, setVoiceSpeechEnabled] = useState(true);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const recognitionRef = useRef(null);
  const chatBottomRef = useRef(null);
  const handleSendRef = useRef(null);

  // Hyperparameter Visualizer State
  const [learningRate, setLearningRate] = useState(0.0003);
  const [attentionHeads, setAttentionHeads] = useState(32);
  const [temperature, setTemperature] = useState(0.7);
  const [batchSize, setBatchSize] = useState(64);

  // Computed live visualizer stats
  const simulatedLoss = (0.045 / (learningRate * 1000 + 0.1) + 0.08).toFixed(4);
  const simulatedThroughput = Math.round(145 * (batchSize / 64) * (32 / attentionHeads));
  const simulatedVram = ((batchSize * 0.12) + (attentionHeads * 0.45)).toFixed(1);

  // Quick Action Prompts for Recruiters and Visitors
  const quickActionPrompts = [
    { label: '⚡ 30-Sec Elevator Pitch', query: 'Give me a 30-second elevator pitch about Prachi Pandey' },
    { label: '🎯 Why Hire Prachi?', query: 'Why should a top tech company hire Prachi as an AI/ML Engineer?' },
    { label: '🎓 9.3 CGPA & Academics', query: "What are Prachi's academic qualifications and college grades?" },
    { label: '🔬 Top AI Projects', query: 'What are Prachi’s flagship AI and Computer Vision projects?' },
    { label: '📜 Verified Credentials', query: 'What certifications and hackathon awards does Prachi hold?' },
    { label: '💼 Internships', query: 'Tell me about Prachi’s ML, Salesforce, and Web internships' },
    { label: '✉️ Contact & Hiring', query: 'How do I contact Prachi or schedule an internship interview?' }
  ];

  // Auto-scroll chat to bottom
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Setup Web Speech Recognition
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          setInputPrompt(transcript);
          setIsListening(false);
          playSound('success');
          handleSendRef.current?.(transcript);
        };

        recognition.onerror = () => {
          setIsListening(false);
        };

        recognition.onend = () => {
          setIsListening(false);
        };

        recognitionRef.current = recognition;
      }
    }

    return () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Text to Speech
  const speakText = (text) => {
    if (!voiceSpeechEnabled || typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      const cleanText = text.replace(/[*_#`]/g, '');
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.rate = 1.05;
      utterance.pitch = 1.0;

      // Select female or natural voice if available
      const voices = window.speechSynthesis.getVoices();
      const naturalVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Victoria')));
      if (naturalVoice) utterance.voice = naturalVoice;

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.debug('TTS Error:', e);
    }
  };

  const toggleMicListening = () => {
    if (!recognitionRef.current) {
      alert("Voice recognition is not supported in this browser. Please use Chrome, Edge, or Safari.");
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      playSound('micOn');
      try {
        recognitionRef.current.start();
        setIsListening(true);
      } catch (err) {
        console.debug('Mic start error:', err);
      }
    }
  };

  const stopSpeaking = () => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const copyToClipboard = (text, idx) => {
    navigator.clipboard.writeText(text);
    playSound('click');
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // Generate intelligent answers based on Prachi's real background
  const generateBotResponse = (query) => {
    const q = query.toLowerCase();

    if (q.includes('pitch') || q.includes('who is') || q.includes('about prachi') || q.includes('summary')) {
      return {
        text: "Prachi Pandey is an AI Research Engineer and B.Tech student in Artificial Intelligence & Data Science at Arya College of Engineering & IT, Jaipur, maintaining an outstanding CGPA of 9.3/10.0.",
        highlight: "She specializes in Computer Vision (YOLOv8 medical diagnostic systems), Natural Language Processing, and Agentic AI workflows. With 3 internships and 30+ verified industry credentials, she builds production-ready AI solutions with real-world impact.",
        actionLink: '#about',
        actionLabel: 'Read Full Biography'
      };
    }

    if (q.includes('why hire') || q.includes('standout') || q.includes('strengths') || q.includes('candidate')) {
      return {
        text: "Why Prachi stands out among candidate pools:",
        highlight: "1. Academic Excellence: 9.3/10.0 CGPA with deep mathematical & algorithmic foundations.\n2. Proctored Coding Proof: HackerRank SQL Intermediate & Basic verified, 50-day LeetCode streak.\n3. End-to-End Delivery: Built and trained YOLOv8 models achieving >85% accuracy on medical bone cancer scans.\n4. Real Industry Tenures: Practical internships at SkillInfyTech (ML), TechForce Services Australia (Salesforce Architect), and InAmigos Foundation.",
        actionLink: '#skills',
        actionLabel: 'View Technical Matrix'
      };
    }

    if (q.includes('education') || q.includes('college') || q.includes('degree') || q.includes('cgpa') || q.includes('arya')) {
      return {
        text: "Prachi is pursuing her B.Tech in Artificial Intelligence & Data Science (2023 - 2027) at Arya College of Engineering & IT, Jaipur, holding a top-tier CGPA of 9.3 / 10.0.",
        highlight: "Prior to college, she completed Senior Secondary (CBSE PCM) at Birla Shiksha Kendra School with 68%, and Secondary School (RBSE) at Sterling Academy with 88% distinction in Science and Mathematics.",
        actionLink: '#achievements',
        actionLabel: 'View Education Details'
      };
    }

    if (q.includes('github') || q.includes('commit') || q.includes('activity') || q.includes('dashboard') || q.includes('dsa') || q.includes('leetcode') || q.includes('stats')) {
      return {
        text: "Prachi's Live Developer Dashboard tracks real-time evidence of engineering rigor:",
        highlight: "• GitHub: 25 public repositories with 500+ commits (@Prachipandey28).\n• Primary Stack: Python (48%), JavaScript (26%), SQL (16%), HTML/CSS (10%).\n• Deployed Systems: Bone Cancer Detection (Live on Vercel) & Portfolio Web Hub.\n• DSA Credentials: 50 Days LeetCode Badge 2026 (@WkFud1X6jF), 5-Star HackerRank SQL Gold Badge, and 100+ CodeChef solutions.",
        actionLink: '#dashboard',
        actionLabel: 'Open Developer Dashboard'
      };
    }

    if (q.includes('project') || q.includes('bone cancer') || q.includes('yolo') || q.includes('resume parser') || q.includes('live') || q.includes('demo')) {
      return {
        text: "Prachi has architected several flagship AI and Deep Learning systems:",
        highlight: "• Bone Cancer Detection System: YOLOv8 Computer Vision diagnostic network trained on digital X-ray scans with OpenCV preprocessing, Flask API, and SQL scan logging (>85% accuracy).\n• AI Resume Parser: Python NLP extraction engine using Spacy, NLTK, and PyPDF2 parsing candidate skills and contact metadata into structured JSON.\n• Customer Churn & Analytics: Predictive modeling using Scikit-Learn with feature importance ranking.",
        actionLink: '#projects',
        actionLabel: 'Explore All Projects'
      };
    }

    if (q.includes('certif') || q.includes('hackathon') || q.includes('award') || q.includes('honor') || q.includes('credential')) {
      return {
        text: "Prachi holds 30+ verified industry credentials, hackathon accolades, and national honors:",
        highlight: "• Government Recognition: MY Bharat Certificate of Recognition from the Ministry of Youth Affairs and Sports (Govt. of India).\n• Proctored Database: HackerRank SQL Intermediate (DF1DAAF60738) & SQL Basic.\n• GenAI & Agents: MongoDB GenAI Vector Search, Salesforce AI Builders Day, Agentforce Badge, Grras Agentic AI.\n• Hackathons: CodeForge at Microsoft Office Gurgaon, National Project Expo (IEEE JECRC Consolation Prize), QuizOff 2026 (525K+ students), Scintillations 2024 (2nd Position with Medal).",
        actionLink: '#certifications',
        actionLabel: 'Inspect Certificates'
      };
    }

    if (q.includes('intern') || q.includes('experience') || q.includes('work') || q.includes('skillinfy') || q.includes('techforce') || q.includes('inamigos')) {
      return {
        text: "Prachi's professional experience encompasses three industry roles and student leadership:",
        highlight: "1. Machine Learning Intern at SkillInfyTech: Built end-to-end predictive modeling and feature preprocessing pipelines (ID: SITS826088).\n2. Salesforce Programming Architect Trainee at TechForce Services (Australia): Developed CRM workflows, automation flows, and cloud architecture.\n3. Web Development Intern at InAmigos Foundation: Selected via Internshala, delivered responsive web modules and portals.\n4. Social Media Head at Arya Intelverse: Led digital outreach and hackathon campaigns across campus.",
        actionLink: '#achievements',
        actionLabel: 'View Experience Timeline'
      };
    }

    if (q.includes('contact') || q.includes('hire') || q.includes('interview') || q.includes('available') || q.includes('email') || q.includes('reach')) {
      return {
        text: "Prachi is actively open for AI/ML Engineering Internships, Data Science roles, and Full-Stack development positions!",
        highlight: "• Email: prachipandey1528@gmail.com\n• LinkedIn: linkedin.com/in/prachi-pandey-0042a8328\n• GitHub: github.com/Prachipandey28\n• Location: Jaipur, India (Open to Remote & Hybrid worldwide)",
        actionLink: '#contact',
        actionLabel: 'Send Direct Message'
      };
    }

    if (q.includes('tech') || q.includes('stack') || q.includes('skill') || q.includes('language') || q.includes('python')) {
      return {
        text: "Prachi's primary technology stack includes:",
        highlight: "• Languages: Python, C++, SQL (Proctored Certified), JavaScript, HTML5/CSS3\n• AI / ML: PyTorch, YOLOv8, Scikit-Learn, OpenCV, NLP (Spacy, NLTK), Agentic AI, RAG, Prompt Engineering\n• Data & Cloud: SQL Databases, MongoDB Atlas Vector Search, Salesforce CRM / Agentforce\n• Web & Frameworks: React, Flask, Node.js, Tailwind CSS",
        actionLink: '#skills',
        actionLabel: 'View Skills Matrix'
      };
    }

    // Default friendly fallback
    return {
      text: "I found multiple matching insights in Prachi's AI/Data Science portfolio for your query.",
      highlight: `Regarding "${query}": Prachi is a B.Tech AI & Data Science scholar at Arya College (9.3 CGPA) specializing in YOLOv8, Machine Learning, SQL, and Agentic AI. Feel free to ask about her specific projects, hackathons, or verified credentials!`,
      actionLink: '#about',
      actionLabel: 'Learn More'
    };
  };

  const handleSendMessage = (customText) => {
    const textToSend = customText || inputPrompt;
    if (!textToSend.trim()) return;

    playSound('click');
    const userMsg = { sender: 'user', text: textToSend };
    setMessages(prev => [...prev, userMsg]);
    setInputPrompt('');
    setIsTyping(true);

    setTimeout(() => {
      const responseData = generateBotResponse(textToSend);
      const botMsg = {
        sender: 'bot',
        text: responseData.text,
        highlight: responseData.highlight,
        actionLink: responseData.actionLink,
        actionLabel: responseData.actionLabel
      };

      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
      playSound('success');

      if (voiceSpeechEnabled) {
        speakText(`${responseData.text} ${responseData.highlight || ''}`);
      }
    }, 750);
  };

  useEffect(() => {
    handleSendRef.current = handleSendMessage;
  });

  return (
    <section id="ai-lab" className="py-24 relative overflow-hidden bg-[#070a14] border-t border-[#1b2238]">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-[#6c63ff]/10 blur-[190px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#182038] border border-[#2d3a66] text-[#a78bfa] text-xs font-mono font-medium mb-4"
          >
            <Bot className="w-3.5 h-3.5 text-[#6c63ff]" />
            Autonomous Portfolio Copilot & Neural Lab
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-white"
          >
            Prachi <span style={{ color: '#6c63ff' }}>AI Copilot & Neural Lab</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#94a3b8] text-sm sm:text-base font-medium tracking-wide uppercase mt-4"
          >
            Ask Questions via Voice or Text • Recruiter Instant Insights • Hyperparameter Visualizer
          </motion.p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="p-1 rounded-2xl bg-[#121627] border border-[#232d4b] flex gap-1 shadow-lg">
            <button
              onClick={() => {
                playSound('click');
                setActiveTab('assistant');
              }}
              className={`px-6 py-2.5 rounded-xl font-mono text-xs font-semibold flex items-center gap-2 transition-all ${
                activeTab === 'assistant'
                  ? 'bg-gradient-to-r from-[#6c63ff] to-[#4d44db] text-white shadow-md shadow-[#6c63ff]/30'
                  : 'text-[#94a3b8] hover:text-white'
              }`}
            >
              <Bot className="w-4 h-4" />
              Prachi Voice & Text Copilot
            </button>
            <button
              onClick={() => {
                playSound('click');
                setActiveTab('visualizer');
              }}
              className={`px-6 py-2.5 rounded-xl font-mono text-xs font-semibold flex items-center gap-2 transition-all ${
                activeTab === 'visualizer'
                  ? 'bg-gradient-to-r from-[#6c63ff] to-[#4d44db] text-white shadow-md shadow-[#6c63ff]/30'
                  : 'text-[#94a3b8] hover:text-white'
              }`}
            >
              <Sliders className="w-4 h-4" />
              Neural Network Visualizer
            </button>
          </div>
        </div>

        {/* TAB 1: Voice & Text AI Copilot */}
        {activeTab === 'assistant' && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto rounded-3xl bg-[#121627]/95 border border-[#232d4b] overflow-hidden shadow-2xl relative"
          >
            {/* Top Toolbar */}
            <div className="p-4 bg-[#0e1324] border-b border-[#232d4b] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                <div className="flex flex-col">
                  <span className="font-mono text-xs font-bold text-white tracking-wider flex items-center gap-1.5">
                    PRACHI-COPILOT // v2.6
                    <span className="px-2 py-0.5 rounded-full bg-[#1e2746] text-[#a78bfa] text-[9px]">ONLINE</span>
                  </span>
                  <span className="text-[10px] font-mono text-[#94a3b8]">Trained on 30+ Credentials & B.Tech 9.3 CGPA</span>
                </div>
              </div>

              {/* Voice Output Controls */}
              <div className="flex items-center gap-2">
                {isSpeaking && (
                  <button
                    onClick={stopSpeaking}
                    className="px-2.5 py-1 rounded-lg bg-red-950/60 border border-red-500/40 text-red-400 text-[10px] font-mono animate-pulse flex items-center gap-1"
                  >
                    <VolumeX className="w-3 h-3" /> Stop Speaking
                  </button>
                )}

                <button
                  onClick={() => {
                    playSound('click');
                    setVoiceSpeechEnabled(!voiceSpeechEnabled);
                  }}
                  title={voiceSpeechEnabled ? 'Voice output enabled (Click to mute speech)' : 'Voice output muted (Click to enable speech)'}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-mono flex items-center gap-1.5 transition-all ${
                    voiceSpeechEnabled
                      ? 'bg-emerald-950/50 border-emerald-500/40 text-emerald-400'
                      : 'bg-[#182038] border-[#252f52] text-[#94a3b8] hover:text-white'
                  }`}
                >
                  {voiceSpeechEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
                  <span className="text-[10px]">{voiceSpeechEnabled ? 'Voice Replies: ON' : 'Voice: OFF'}</span>
                </button>
              </div>
            </div>

            {/* Chat History View */}
            <div className="p-5 sm:p-6 h-96 overflow-y-auto space-y-4 bg-[#0a0d18]/90">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'bot' && (
                    <div className="w-8 h-8 rounded-xl bg-[#1b223d] border border-[#6c63ff]/40 flex items-center justify-center text-[#6c63ff] shrink-0 mt-1 shadow-md">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div className={`p-4 rounded-2xl max-w-xl text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user' 
                      ? 'bg-gradient-to-r from-[#6c63ff] to-[#4d44db] text-white font-medium rounded-tr-none shadow-lg' 
                      : 'bg-[#121627] border border-[#232d4b] text-[#cbd5e1] rounded-tl-none shadow-lg'
                  }`}>
                    <div>{msg.text}</div>
                    
                    {msg.highlight && (
                      <div className="mt-2.5 p-3 rounded-xl bg-[#090c17] border border-[#1f2845] font-mono text-[11px] text-[#a78bfa] whitespace-pre-line leading-relaxed">
                        {msg.highlight}
                      </div>
                    )}

                    {msg.sender === 'bot' && (
                      <div className="mt-3 pt-2 border-t border-[#1f2845] flex items-center justify-between gap-2">
                        {msg.actionLink ? (
                          <a
                            href={msg.actionLink}
                            onClick={() => playSound('click')}
                            className="text-[11px] font-semibold text-[#6c63ff] hover:text-white flex items-center gap-1 transition-colors"
                          >
                            <span>{msg.actionLabel || 'Learn More'}</span>
                            <ArrowRight className="w-3 h-3" />
                          </a>
                        ) : <span></span>}

                        <button
                          onClick={() => copyToClipboard(`${msg.text}\n${msg.highlight || ''}`, idx)}
                          className="text-[10px] font-mono text-[#94a3b8] hover:text-white flex items-center gap-1 transition-colors"
                          title="Copy message"
                        >
                          {copiedIndex === idx ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-400" />
                              <span className="text-emerald-400">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                    )}
                  </div>

                  {msg.sender === 'user' && (
                    <div className="w-8 h-8 rounded-xl bg-[#1e2746] border border-[#3b4774] flex items-center justify-center text-[#a78bfa] shrink-0 mt-1">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2.5 text-xs font-mono text-[#a78bfa] p-3 rounded-xl bg-[#121627] border border-[#232d4b] w-fit">
                  <RefreshCw className="w-3.5 h-3.5 text-[#6c63ff] animate-spin" />
                  <span>Synthesizing portfolio intelligence...</span>
                </div>
              )}

              <div ref={chatBottomRef} />
            </div>

            {/* Smart Recruiter & Visitor Quick-Action Pills */}
            <div className="p-3 bg-[#0c1020] border-t border-[#232d4b] overflow-x-auto">
              <div className="flex items-center gap-1.5 w-max">
                <span className="text-[10px] font-mono text-[#6c63ff] uppercase font-bold flex items-center gap-1 pr-1 shrink-0">
                  <Flame className="w-3 h-3" /> Quick Prompts:
                </span>
                {quickActionPrompts.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(item.query)}
                    className="px-3 py-1 rounded-lg bg-[#151a2e] hover:bg-[#1f2746] border border-[#252f52] hover:border-[#6c63ff]/60 text-[11px] font-mono text-[#cbd5e1] hover:text-white transition-all whitespace-nowrap shadow-sm"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Box with Voice Mic Button */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 sm:p-4 bg-[#0e1324] border-t border-[#232d4b] flex items-center gap-2 sm:gap-3"
            >
              {/* Mic Button */}
              <button
                type="button"
                onClick={toggleMicListening}
                title={isListening ? 'Listening... click to stop' : 'Click to speak your question'}
                className={`p-3 rounded-xl border transition-all ${
                  isListening
                    ? 'bg-red-950/80 border-red-500 text-red-400 animate-pulse ring-2 ring-red-500/30'
                    : 'bg-[#151a2e] border-[#252f52] text-[#6c63ff] hover:text-white hover:bg-[#1f2746]'
                }`}
              >
                {isListening ? <Mic className="w-4 h-4 animate-bounce" /> : <Mic className="w-4 h-4" />}
              </button>

              <input
                type="text"
                value={inputPrompt}
                onChange={(e) => setInputPrompt(e.target.value)}
                placeholder={isListening ? "Listening... speak now" : "Ask Prachi Copilot about projects, CGPA, ML stack, or hiring..."}
                className="w-full bg-[#0a0d18] border border-[#232d4b] rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-[#6c63ff] focus:ring-1 focus:ring-[#6c63ff] placeholder-[#64748b] transition-all"
              />

              <button
                type="submit"
                disabled={isTyping}
                className="px-5 sm:px-6 py-3 rounded-xl text-white font-bold text-xs font-mono flex items-center gap-2 shadow-lg transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
                style={{ background: 'linear-gradient(135deg, #6c63ff 0%, #4d44db 100%)' }}
              >
                <span>SEND</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}

        {/* TAB 2: Neural Hyperparameter Visualizer */}
        {activeTab === 'visualizer' && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#121627]/95 border border-[#232d4b] shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              
              {/* Controls */}
              <div className="space-y-6">
                <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-[#6c63ff]" />
                  Hyperparameter Tuning Simulator
                </h3>

                {/* Learning Rate Slider */}
                <div>
                  <div className="flex justify-between text-xs font-mono text-[#cbd5e1] mb-2">
                    <span>Learning Rate (&eta;):</span>
                    <span className="text-[#a78bfa] font-bold">{learningRate}</span>
                  </div>
                  <input 
                    type="range" 
                    min="0.0001" 
                    max="0.01" 
                    step="0.0001"
                    value={learningRate}
                    onChange={(e) => setLearningRate(parseFloat(e.target.value))}
                    className="w-full accent-[#6c63ff]"
                  />
                </div>

                {/* Attention Heads Slider */}
                <div>
                  <div className="flex justify-between text-xs font-mono text-[#cbd5e1] mb-2">
                    <span>Multi-Head Attention (Heads):</span>
                    <span className="text-[#a78bfa] font-bold">{attentionHeads}</span>
                  </div>
                  <input 
                    type="range" 
                    min="8" 
                    max="64" 
                    step="8"
                    value={attentionHeads}
                    onChange={(e) => setAttentionHeads(parseInt(e.target.value))}
                    className="w-full accent-[#6c63ff]"
                  />
                </div>

                {/* Batch Size Slider */}
                <div>
                  <div className="flex justify-between text-xs font-mono text-[#cbd5e1] mb-2">
                    <span>Batch Size (B):</span>
                    <span className="text-emerald-400 font-bold">{batchSize}</span>
                  </div>
                  <input 
                    type="range" 
                    min="16" 
                    max="256" 
                    step="16"
                    value={batchSize}
                    onChange={(e) => setBatchSize(parseInt(e.target.value))}
                    className="w-full accent-emerald-400"
                  />
                </div>

                {/* Temperature Slider */}
                <div>
                  <div className="flex justify-between text-xs font-mono text-[#cbd5e1] mb-2">
                    <span>Sampling Temperature (T):</span>
                    <span className="text-amber-400 font-bold">{temperature}</span>
                  </div>
                  <input 
                    type="range" 
                    min="0.1" 
                    max="1.5" 
                    step="0.1"
                    value={temperature}
                    onChange={(e) => setTemperature(parseFloat(e.target.value))}
                    className="w-full accent-amber-400"
                  />
                </div>
              </div>

              {/* Computed Benchmark Results */}
              <div className="p-6 rounded-2xl bg-[#0a0d18] border border-[#232d4b] space-y-4">
                <h4 className="text-xs font-mono text-[#a78bfa] uppercase tracking-wider font-bold">
                  Simulated Neural Telemetry
                </h4>

                <div className="space-y-3.5">
                  <div className="p-4 rounded-xl bg-[#121627] border border-[#232d4b] flex items-center justify-between">
                    <div>
                      <div className="text-xs font-mono text-[#94a3b8]">Training Loss (Cross-Entropy)</div>
                      <div className="text-2xl font-mono font-extrabold text-[#6c63ff] mt-1">{simulatedLoss}</div>
                    </div>
                    <Cpu className="w-7 h-7 text-[#6c63ff] opacity-60" />
                  </div>

                  <div className="p-4 rounded-xl bg-[#121627] border border-[#232d4b] flex items-center justify-between">
                    <div>
                      <div className="text-xs font-mono text-[#94a3b8]">Throughput (Tokens / Sec)</div>
                      <div className="text-2xl font-mono font-extrabold text-[#a78bfa] mt-1">{simulatedThroughput} tok/s</div>
                    </div>
                    <Zap className="w-7 h-7 text-[#a78bfa] opacity-60" />
                  </div>

                  <div className="p-4 rounded-xl bg-[#121627] border border-[#232d4b] flex items-center justify-between">
                    <div>
                      <div className="text-xs font-mono text-[#94a3b8]">Estimated VRAM Footprint</div>
                      <div className="text-2xl font-mono font-extrabold text-emerald-400 mt-1">{simulatedVram} GB</div>
                    </div>
                    <Sparkles className="w-7 h-7 text-emerald-400 opacity-60" />
                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
