import { BrainCircuit, Wand2, Settings, BookOpen, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: BrainCircuit,
    title: "AI Fundamentals",
    description: "Understand core AI concepts & how large language models really work.",
  },
  {
    icon: Wand2,
    title: "Prompt Engineering",
    description: "Master prompt crafting to get better, faster AI responses across tools.",
  },
  {
    icon: BookOpen,
    title: "Real-World Projects",
    description: "Work on practical AI use cases in marketing, writing, coding & more.",
  },
  {
    icon: Settings,
    title: "No-Code Automation",
    description: "Build workflows using tools like Zapier, Make & Pabbly — no coding required.",
  },
  {
    icon: Users,
    title: "Mentorship & Community",
    description: "Get support and insights from experts and peers inside our member space.",
  },
  {
    icon: Zap,
    title: "Job-Focused Learning",
    description: "Build skills that align with real freelance, startup, and remote roles.",
  },
];

const FeatureGrid = () => {
  return (
    <section className="bg-[#0c1025] text-white py-32 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Everything You Need To <span className="text-purple-400">Succeed</span> with AI
        </motion.h2>
        <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
          RentPrompts Academy isn't just courses — it's a complete launchpad for your AI-powered career.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, i) => {
  const Icon = feature.icon; 

  return (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      viewport={{ once: false }}
      className="bg-[#151b3b] rounded-xl p-6 border border-white/10 hover:shadow-[0_0_20px_rgba(162,89,255,0.2)] transition-all"
    >
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-6 h-6 text-purple-400" />
        <h3 className="text-lg font-semibold">{feature.title}</h3>
      </div>
      <p className="text-sm text-gray-300">{feature.description}</p>
    </motion.div>
  );
})}

      </div>
    </section>
  );
};

export default FeatureGrid;
