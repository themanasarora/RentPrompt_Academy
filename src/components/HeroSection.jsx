import { motion } from 'framer-motion';
import {
  Bot,
  BrainCircuit,
  GraduationCap,
  Sparkles,
} from 'lucide-react';
import SplashCursor from './SplashCursor'





const HeroSection = () => {
  return (

    <section className="bg-[#0c1025] text-white min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <SplashCursor />
      
      <div className="absolute inset-0 bg-gradient-to-br from-[#151b3b] via-[#0c1025] to-[#11142a] opacity-90 z-0" />


<header className="absolute top-0 left-0 w-full z-30 px-6 py-4">
 


  <div className="w-full flex items-center justify-between">
  
    <h1 className="text-white text-xl md:text-2xl font-bold tracking-tight">
      <span className="text-purple-400">Rent</span>Prompts
    </h1>


    <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white">
      {['Academy', 'Programs', 'Testimonials', 'FAQs'].map((item, idx) => (
        <a
          key={idx}
          href={`#${item.toLowerCase()}`}
          className="relative group py-2"
        >
          {item}
          <span className="block h-0.5 w-0 group-hover:w-full transition-all bg-purple-400 mt-1 rounded"></span>
        </a>
      ))}

      <a
        href="#join"
        className="px-4 py-2 rounded-md text-sm font-semibold bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition shadow-md flex items-center"
        style={{ height: '40px' }}
      >
        Join Now
      </a>
    </nav>
  </div>
</header>



      <div className="absolute inset-0 pointer-events-none z-10">
        <motion.div
          className="absolute top-20 left-10 opacity-30 text-purple-400"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        >
          <Bot className="w-16 h-16" />
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-12 opacity-30 text-pink-400"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        >
          <BrainCircuit className="w-14 h-14" />
        </motion.div>

        <motion.div
          className="absolute top-[30%] right-[18%] opacity-30 text-orange-400"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        >
          <GraduationCap className="w-12 h-12" />
        </motion.div>

        <motion.div
          className="absolute top-[60%] left-[20%] opacity-30 text-green-400"
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
        >
          <Sparkles className="w-12 h-12" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 text-center max-w-3xl mx-auto"
      >

        <div className="inline-block mb-6 px-4 py-1 bg-purple-600/20 border border-purple-500 text-purple-300 text-sm rounded-full font-medium backdrop-blur-sm">
          #1 AI Learning Platform in 2025
        </div>


        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Unlock the Future of <span className="text-purple-400">Work</span> with AI
        </h1>


        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-xl mx-auto">
          Learn Prompt Engineering, AI Tools, and No-Code Automation — all in one place. Become future-proof with RentPrompts Academy.
        </p>


        <div className="flex justify-center flex-wrap gap-4 mb-10">
          {['Prompt Engineering', 'No-Code Automation', 'AI Tools', 'Real Projects'].map((tag, i) => (
            <span
              key={i}
              className="px-4 py-1 text-sm bg-white/10 text-white/80 border border-white/10 rounded-full backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

       
        <div className="flex justify-center items-center gap-4 flex-wrap mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md"
          >
            🚀 Join the Academy
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-white/20 text-white px-6 py-3 rounded-lg font-medium backdrop-blur-md bg-white/5"
          >
            ▶ Watch Introduction
          </motion.button>
        </div>

        
        <div className="animate-bounce text-white/40 text-sm tracking-wide">
          ↓ Scroll to Explore
        </div>
        
      </motion.div>
      
    </section>
    
  );
};

export default HeroSection;
