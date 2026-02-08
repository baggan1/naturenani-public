import React, { useState } from 'react';
import { Leaf, Send, ShieldCheck, Sparkles } from 'lucide-react';

/**
 * NaniChatLite - A sanitized showcase of the NatureNani UI.
 * Demonstrates: Tailwind layout, state management, and brand identity.
 * Note: Proprietary RAG logic and API keys are excluded for security.
 */
const NaniChatLite = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'nani', content: 'Namaste. I am Nani. How can I help you balance your vitality today?' }
  ]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    setMessages([...messages, { role: 'user', content: input }]);
    setInput('');

    // Simulate AI response for the showcase
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'nani', 
        content: 'I am analyzing our ancient texts for a customized protocol. (This is a showcase version)' 
      }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen bg-stone-50 text-stone-900 font-sans">
      {/* Branding Header */}
      <header className="p-4 bg-white border-b flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2">
          <Leaf className="text-emerald-600" size={28} />
          <h1 className="text-xl font-bold tracking-tight">NatureNani</h1>
        </div>
        <div className="flex items-center gap-2 text-stone-500 text-sm">
          <ShieldCheck size={16} />
          <span>Gourmet Canopy LLC Secure</span>
        </div>
      </header>

      {/* Chat Area */}
      <main className="flex-1 overflow-y-auto p-6 space-y-4 max-w-3xl mx-auto w-full">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-4 rounded-2xl shadow-sm ${
              msg.role === 'user' ? 'bg-emerald-600 text-white' : 'bg-white border border-stone-200'
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
      </main>

      {/* Input Footer */}
      <footer className="p-4 bg-white border-t">
        <div className="max-w-3xl mx-auto flex gap-2">
          <input 
            className="flex-1 p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="Ask Nani about Ayurvedic balance..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button 
            onClick={handleSend}
            className="p-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
        <p className="text-center text-[10px] text-stone-400 mt-2 uppercase tracking-widest">
          Powered by Natural Intelligence (NQ)
        </p>
      </footer>
    </div>
  );
};

export default NaniChatLite;
