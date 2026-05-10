import { useState, useRef, useEffect } from "react";
import { sendAiChat } from "../services/api";

function AIChat() {
  const [messages, setMessages] = useState([{ sender: 'ai', text: 'Hello! I am Readvanta AI. Ask me anything about books or authors!' }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatRef = useRef(null);

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setInput("");
    setLoading(true);

    try {
      const res = await sendAiChat(userMsg);
      setMessages(prev => [...prev, { sender: 'ai', text: res.reply }]);
    } catch (err) {
      setMessages(prev => [...prev, { sender: 'ai', text: "Sorry, I'm having trouble connecting right now." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen pt-24 px-6 md:px-10 flex flex-col items-center">
      <div className="w-full max-w-3xl bg-gray-900 rounded-2xl shadow-2xl border border-white/10 overflow-hidden flex flex-col h-[70vh]">
        
        {/* Header */}
        <div className="bg-white/5 p-4 border-b border-white/10 flex items-center justify-between">
          <h2 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">Ask AI</h2>
          <span className="text-xs bg-orange-400/20 text-orange-400 px-2 py-1 rounded">Beta</span>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-xl p-3 ${msg.sender === 'user' ? 'bg-gradient-to-r from-orange-400 to-blue-400 text-black' : 'bg-white/10 text-gray-200'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {loading && (
             <div className="flex justify-start">
               <div className="max-w-[80%] rounded-xl p-3 bg-white/10 text-gray-400 animate-pulse">
                 Thinking...
               </div>
             </div>
          )}
          <div ref={chatRef}></div>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-white/10 flex gap-3">
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about a book..." 
            className="flex-1 p-3 rounded-xl bg-black border border-white/10 focus:outline-none focus:border-orange-400"
          />
          <button 
            onClick={handleSend}
            disabled={loading}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-400 to-blue-400 text-black font-bold hover:scale-105 transition disabled:opacity-50 disabled:scale-100"
          >
            Ask
          </button>
        </div>
      </div>
    </div>
  );
}
export default AIChat;