import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X, Minimize2, Maximize2, Sparkles, Send } from 'lucide-react';

export default function TerminalDrawer({ isOpen, onClose }) {
  const [logs, setLogs] = useState([
    { type: 'sys', text: '===================================================' },
    { type: 'sys', text: ' PRACHI NEURAL OS v4.8 (x86_64-cuda-linux-gnu)' },
    { type: 'sys', text: '===================================================' },
    { type: 'info', text: 'Type "help" to view all executable commands.' }
  ]);
  const [inputVal, setInputVal] = useState('');

  if (!isOpen) return null;

  const handleCommand = (cmdStr) => {
    const cmd = (cmdStr || inputVal).trim().toLowerCase();
    if (!cmd) return;

    let newLogs = [...logs, { type: 'cmd', text: `$ ${cmd}` }];

    if (cmd === 'help') {
      newLogs.push(
        { type: 'info', text: '  bio        : View executive AI profile summary' },
        { type: 'info', text: '  projects   : List top featured AI architectures' },
        { type: 'info', text: '  stack      : Display deep learning framework proficiencies' },
        { type: 'info', text: '  contact    : Display contact channels' },
        { type: 'info', text: '  clear      : Clear screen output' },
        { type: 'info', text: '  exit       : Close neural CLI drawer' }
      );
    } else if (cmd === 'bio') {
      newLogs.push({ type: 'success', text: 'PRACHI - Senior AI Engineer & GenAI Specialist with 4+ yrs scaling LLMs, RAG, PyTorch & CUDA.' });
    } else if (cmd === 'projects') {
      newLogs.push(
        { type: 'success', text: '1. NeuroPulse AI (Clinical Cardiac Predictor - 99.4% Acc)' },
        { type: 'success', text: '2. Omniscribe RAG (Enterprise Knowledge Engine - DeepSeek-V3)' },
        { type: 'success', text: '3. VisionForge Spatial AI (SAM-2 3D Vision Architecture)' }
      );
    } else if (cmd === 'stack') {
      newLogs.push({ type: 'success', text: 'PyTorch, DeepSeek, Llama 3.3, LangChain, Qdrant, vLLM, TensorRT, CUDA C++, FastAPI, Docker' });
    } else if (cmd === 'contact') {
      newLogs.push({ type: 'success', text: 'Email: prachi.ai.engineer@gmail.com | Location: Silicon Valley, CA / Remote' });
    } else if (cmd === 'clear') {
      setLogs([]);
      setInputVal('');
      return;
    } else if (cmd === 'exit') {
      onClose();
      return;
    } else {
      newLogs.push({ type: 'error', text: `Command non-executable: '${cmd}'. Type 'help' for options.` });
    }

    setLogs(newLogs);
    setInputVal('');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm">
      <motion.div 
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="w-full max-w-xl h-full bg-[#030612] border-l border-cyan-500/30 flex flex-col font-mono text-xs shadow-2xl"
      >
        {/* Header */}
        <div className="p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-cyan-400">
            <Terminal className="w-4 h-4" />
            <span className="font-orbitron font-bold text-white">NEURAL_CLI_TERMINAL</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-cyan-400"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Output */}
        <div className="flex-1 p-5 overflow-y-auto space-y-2.5 bg-[#02040b]">
          {logs.map((item, idx) => (
            <div 
              key={idx}
              className={`leading-relaxed ${
                item.type === 'cmd' ? 'text-white font-bold' :
                item.type === 'success' ? 'text-emerald-400' :
                item.type === 'error' ? 'text-rose-400' :
                item.type === 'sys' ? 'text-cyan-400' : 'text-slate-300'
              }`}
            >
              {item.text}
            </div>
          ))}
        </div>

        {/* Preset Buttons */}
        <div className="px-4 py-2 bg-slate-950 border-t border-slate-900 flex items-center gap-2 overflow-x-auto text-[10px]">
          {['help', 'bio', 'projects', 'stack', 'contact', 'clear'].map((btnCmd) => (
            <button
              key={btnCmd}
              onClick={() => handleCommand(btnCmd)}
              className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-300 hover:bg-cyan-500/20"
            >
              {btnCmd}
            </button>
          ))}
        </div>

        {/* Input */}
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            handleCommand();
          }}
          className="p-4 bg-slate-900/80 border-t border-slate-800 flex items-center gap-2"
        >
          <span className="text-cyan-400 font-bold">$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type command..."
            className="w-full bg-transparent text-white focus:outline-none placeholder:text-slate-600"
            autoFocus
          />
        </form>

      </motion.div>
    </div>
  );
}
