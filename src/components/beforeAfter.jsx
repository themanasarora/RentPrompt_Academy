import { AlertTriangle, Lightbulb } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedCard = ({ icon: Icon, title, points, glowColor }) => {
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
  const [glowX, setGlowX] = useState('50%');
  const [glowY, setGlowY] = useState('50%');
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start('visible');
    else controls.start('hidden');
  }, [inView, controls]);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const rotateY = ((x / 100) - 0.5) * 12;
    const rotateX = -((y / 100) - 0.5) * 12;

    setTransform({ rotateX, rotateY });
    setGlowX(`${x}%`);
    setGlowY(`${y}%`);
  };

  const resetTransform = () => {
    setTransform({ rotateX: 0, rotateY: 0 });
    setGlowX('50%');
    setGlowY('50%');
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      viewport={{ once: false, amount: 0.2 }}
      className="[perspective:1000px]"
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTransform}
        style={{
          transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.2s ease-out',
          willChange: 'transform',
        }}
        className="relative z-10 rounded-xl p-8 bg-[#151b3b] overflow-hidden border border-white/10"
      >

        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background: `radial-gradient(400px circle at ${glowX} ${glowY}, ${glowColor}, transparent 80%)`,
            mixBlendMode: 'screen',
            opacity: 0.6,
            transition: 'background 0.1s ease',
          }}
        />

        <div className="relative z-10 flex items-center gap-3 mb-4">
          <Icon className="w-6 h-6 text-white" />
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <ul className="relative z-10 list-disc list-inside text-gray-300 space-y-2 text-left">
          {points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const ProblemTransformation = () => {
  return (
    <section className="bg-[#0c1025] text-white py-32 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          From Struggle to <span className="text-purple-400">Skill</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Discover how RentPrompts Academy transforms your journey from AI confusion to clarity — and career growth.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <AnimatedCard
          icon={AlertTriangle}
          title="Before the Academy"
          glowColor="rgba(239,68,68,0.3)" 
          points={[
            'Endless tutorials with no roadmap',
            'Confusing AI tools with steep learning curves',
            'No practical projects to build confidence',
            'Zero clarity on monetizing your skills',
          ]}
        />
        <AnimatedCard
          icon={Lightbulb}
          title="After Joining"
          glowColor="rgba(162,89,255,0.3)" 
          points={[
            'Clear, structured learning paths',
            'AI-powered tools made beginner-friendly',
            'Real-world projects & case studies',
            'Certification, guidance & career support',
          ]}
        />
      </div>
    </section>
  );
};

export default ProblemTransformation;
