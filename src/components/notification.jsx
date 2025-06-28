import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot } from 'lucide-react';

const chatbotMessages = [
  "🚀 New course is live! Tap me to learn how to access it.",
  "🎯 Want help choosing the right AI path? Just click me.",
  "📚 Learn how to get certified in AI — I’ll guide you.",
  "🤖 Curious about prompt engineering? Ask me anything.",
  "🧠 Not sure where to begin? Let me help you get started.",
];

const ChatbotWithNotification = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % chatbotMessages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="bg-[#1a1f3c] border border-white/10 text-white text-sm px-4 py-3 rounded-xl max-w-xs shadow-lg relative"
        >
          <span className="block text-gray-300">{chatbotMessages[index]}</span>


          <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-[#1a1f3c] rotate-45 border-r border-b border-white/10" />
        </motion.div>
      </AnimatePresence>


      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#1a1f3c] text-purple-400 p-4 rounded-full border border-white/10 shadow-lg hover:border-purple-500 transition"
        onClick={() => alert('Chatbot coming soon 🤖')}
      >
        <Bot className="w-6 h-6" />
      </motion.button>
    </div>
  );
};

export default ChatbotWithNotification;
