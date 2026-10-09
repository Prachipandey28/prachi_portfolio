import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Cpu, Sparkles, Send, RefreshCw, Sliders, Zap, CheckCircle2, Terminal, User, MessageSquare } from 'lucide-react';

export default function AiLab() {
  const [activeTab, setActiveTab] = useState('assistant');

  // AI Chat Assistant State
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hello! I am Prachi-AI Assistant. Ask me anything about Prachi's research, engineering stack, AI projects, or availability!"
    }
  ]);
  const [inputPrompt, setInputPrompt] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const samplePrompts = [
    "Tell me about Prachi's RAG Architecture",
    "What is the accuracy of NeuroPulse AI?",
    "Which AI & ML frameworks does Prachi use?",
    "Is Prachi open for AI Lead / Senior roles?"
  ];

  // Hyperparameter Visualizer State
  const [learningRate, setLearningRate] = useState(0.0003);
  const [attentionHeads, setAttentionHeads] = useState(32);
  const [temperature, setTemperature] = useState(0.7);
  const [batchSize, setBatchSize] = useState(64);

  // Computed live visualizer stats
  const simulatedLoss = (0.045 / (learningRate * 1000 + 0.1) + 0.08).toFixed(4);
  const simulatedThroughput = Math.round(145 * (batchSize / 64) * (32 / attentionHeads));
  const simulatedVram = ((batchSize * 0.12) + (attentionHeads * 0.45)).toFixed(1);

  const handleSendMessage = (customText) => {
    const textToSend = customText || inputPrompt;
    if (!textToSend.trim()) return;

    // Add User Message
    const userMsg = { sender: 'user', text: textToSend };
    setMessages(prev => [...prev, userMsg]);
    setInputPrompt('');
    setIsTyping(true);

    // Generate intelligent response based on prompt keyword
    setTimeout(() => {
      let botResponse = "Prachi specializes in Deep Learning, Large Language Models, Multi-Modal Vision Transformers, and production MLOps.";
      const query = textToSend.toLowerCase();

      if (query.includes('rag') || query.includes('omniscribe')) {
        botResponse = "Prachi built the Omniscribe RAG Engine using DeepSeek-V3/Llama 3.3, Qdrant hybrid vector search, and vLLM. It achieves sub-45ms latency across 100k+ enterprise documents with 98.9% faithfulness.";
      } else if (query.includes('accuracy') || query.includes('neuropulse') || query.includes('health')) {
        botResponse = "NeuroPulse AI is Prachi's clinical cardiac anomaly predictor. It processes 500,000+ ECG waveforms with 99.4% diagnostic accuracy and 18ms real-time inference latency under HIPAA compliance.";
      } else if (query.includes('framework') || query.includes('stack') || query.includes('technologies')) {
        botResponse = "Prachi's neural stack includes PyTorch, TensorFlow, DeepSeek, Llama 3.3, CUDA, LangChain, Qdrant, TensorRT, FastAPI, Docker, and C++.";
      } else if (query.includes('role') || query.includes('hire') || query.includes('available')) {
        botResponse = "Yes! Prachi is actively available for Senior/Lead AI Engineer, LLM Architect, and AI Research Scientist roles (Remote or Hybrid). You can reach out directly via the Contact section!";
      } else if (query.includes('hello') || query.includes('hi')) {
        botResponse = "Greetings! Feel free to query my neural knowledge base or adjust hyper-parameters in the Neural Visualizer tab!";
      }

      setMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <section id="ai-lab" className="py-24 relative overflow-hidden bg-[#050811]/95">
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono tracking-wider uppercase mb-4"
          >
            <Bot className="w-3.5 h-3.5" />
            Interactive AI Sandbox & Neural Playground
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-orbitron font-extrabold text-white tracking-tight"
          >
            Prachi <span className="gradient-text-cyan">Neural AI Lab</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-400"
          >
            Test our real-time interactive AI chatbot assistant or simulate model hyperparameters live in the browser.
          </motion.p>
        </div>

        {/* Tab Switcher */}
        <div className="mt-10 flex justify-center">
          <div className="p-1 rounded-2xl bg-slate-900 border border-slate-800 flex gap-1">
            <button
              onClick={() => setActiveTab('assistant')}
              className={`px-6 py-2.5 rounded-xl font-mono text-xs font-semibold flex items-center gap-2 transition-all ${
                activeTab === 'assistant'
                  ? 'bg-cyan-500 text-black shadow-glow-cyan'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Bot className="w-4 h-4" />
              Prachi AI Chatbot Assistant
            </button>
            <button
              onClick={() => setActiveTab('visualizer')}
              className={`px-6 py-2.5 rounded-xl font-mono text-xs font-semibold flex items-center gap-2 transition-all ${
                activeTab === 'visualizer'
                  ? 'bg-purple-600 text-white shadow-glow-purple'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sliders className="w-4 h-4" />
              Neural Network Visualizer
            </button>
          </div>
        </div>

        {/* TAB 1: AI Chatbot Assistant */}
        {activeTab === 'assistant' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 max-w-4xl mx-auto rounded-3xl glass-panel border border-cyan-500/30 overflow-hidden shadow-2xl"
          >
            {/* Top Bar */}
            <div className="p-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping"></div>
                <span className="font-orbitron text-xs font-bold text-white tracking-wider">PRACHI-BOT // ONLINE</span>
              </div>
              <span className="text-[10px] font-mono text-slate-500">LLM Inference Engine: Active</span>
            </div>

            {/* Chat History View */}
            <div className="p-6 h-80 overflow-y-auto space-y-4 bg-[#050812]">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'bot' && (
                    <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-400 shrink-0 mt-1">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div className={`p-4 rounded-2xl max-w-lg text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user' 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-medium rounded-tr-none' 
                      : 'bg-slate-900/90 border border-slate-800 text-slate-200 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>

                  {msg.sender === 'user' && (
                    <div className="w-8 h-8 rounded-xl bg-purple-600/30 border border-purple-400 flex items-center justify-center text-purple-300 shrink-0 mt-1">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  Generating neural response...
                </div>
              )}
            </div>

            {/* Sample Prompts */}
            <div className="px-6 py-3 bg-slate-950 border-t border-slate-900 flex items-center gap-2 overflow-x-auto">
              <span className="text-[11px] font-mono text-slate-500 shrink-0">Sample prompts:</span>
              {samplePrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(prompt)}
                  className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 transition-colors whitespace-nowrap"
                >
                  "{prompt}"
                </button>
              ))}
            </div>

            {/* Input Box */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-4 bg-slate-900/80 border-t border-slate-800 flex items-center gap-3"
            >
              <input
                type="text"
                value={inputPrompt}
                onChange={(e) => setInputPrompt(e.target.value)}
                placeholder="Ask Prachi-Bot about RAG, Vision AI, ML Stack, or hiring..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 placeholder:text-slate-600"
              />
              <button
                type="submit"
                disabled={isTyping}
                className="px-6 py-3 rounded-xl bg-cyan-400 text-black font-extrabold text-xs font-mono flex items-center gap-2 hover:bg-cyan-300 shadow-glow-cyan transition-all"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 max-w-4xl mx-auto p-8 rounded-3xl glass-panel border border-purple-500/30 shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              
              {/* Controls */}
              <div className="space-y-6">
                <h3 className="text-lg font-orbitron font-bold text-white flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-purple-400" />
                  Hyperparameter Tuning
                </h3>

                {/* Learning Rate Slider */}
                <div>
                  <div className="flex justify-between text-xs font-mono text-slate-300 mb-2">
                    <span>Learning Rate (&eta;):</span>
                    <span className="text-cyan-400 font-bold">{learningRate}</span>
                  </div>
                  <input 
                    type="range" 
                    min="0.0001" 
                    max="0.01" 
                    step="0.0001"
                    value={learningRate}
                    onChange={(e) => setLearningRate(parseFloat(e.target.value))}
                    className="w-full accent-cyan-400"
                  />
                </div>

                {/* Attention Heads Slider */}
                <div>
                  <div className="flex justify-between text-xs font-mono text-slate-300 mb-2">
                    <span>Multi-Head Attention (Heads):</span>
                    <span className="text-purple-400 font-bold">{attentionHeads}</span>
                  </div>
                  <input 
                    type="range" 
                    min="8" 
                    max="64" 
                    step="8"
                    value={attentionHeads}
                    onChange={(e) => setAttentionHeads(parseInt(e.target.value))}
                    className="w-full accent-purple-500"
                  />
                </div>

                {/* Batch Size Slider */}
                <div>
                  <div className="flex justify-between text-xs font-mono text-slate-300 mb-2">
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
                  <div className="flex justify-between text-xs font-mono text-slate-300 mb-2">
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
              <div className="p-6 rounded-2xl bg-black/60 border border-slate-800 space-y-6">
                <h4 className="text-sm font-orbitron font-bold text-slate-300 uppercase tracking-wider">
                  Live Neural Benchmarks
                </h4>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-cyan-500/30 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-mono text-slate-400">Training Loss (Cross-Entropy)</div>
                      <div className="text-2xl font-orbitron font-extrabold text-cyan-400 mt-1">{simulatedLoss}</div>
                    </div>
                    <Cpu className="w-8 h-8 text-cyan-400 opacity-60" />
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/80 border border-purple-500/30 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-mono text-slate-400">Throughput (Tokens / Sec)</div>
                      <div className="text-2xl font-orbitron font-extrabold text-purple-400 mt-1">{simulatedThroughput} tok/s</div>
                    </div>
                    <Zap className="w-8 h-8 text-purple-400 opacity-60" />
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/80 border border-emerald-500/30 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-mono text-slate-400">Estimated VRAM Footprint</div>
                      <div className="text-2xl font-orbitron font-extrabold text-emerald-400 mt-1">{simulatedVram} GB</div>
                    </div>
                    <Sparkles className="w-8 h-8 text-emerald-400 opacity-60" />
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
