import { motion } from 'framer-motion';

const programs = [
  {
    title: 'Prompt Engineering 101',
    duration: '4 Weeks',
    description: 'Master the art of crafting effective prompts across ChatGPT, Claude, and Midjourney.',
  },
  {
    title: 'AI for Writers',
    duration: '6 Weeks',
    description: 'Level up your content with AI-powered tools — blogs, brand copy, and more.',
  },
  {
    title: 'AI Tools in Practice',
    duration: '5 Weeks',
    description: 'Get hands-on with real-world AI use cases like automation, marketing & design.',
  },
  {
    title: 'No-Code AI Workflows',
    duration: '3 Weeks',
    description: 'Build full AI automation flows using tools like Zapier, Make, and Pabbly.',
  },
];

const ProgramsOverview = () => {
  return (
    <section className="bg-[#0c1025] text-white py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-4xl md:text-5xl font-bold"
        >
          Programs Offered
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
          className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto"
        >
          Learn the tools, skills, and real-world applications that matter — at your own pace, with expert guidance.
        </motion.p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {programs.map((program, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: false }}
            className="bg-[#151b3b] rounded-xl p-6 border border-white/10 hover:shadow-[0_0_20px_rgba(162,89,255,0.2)] transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-white mb-1">{program.title}</h3>
            <p className="text-sm text-purple-400 font-medium mb-2">{program.duration}</p>
            <p className="text-sm text-gray-300 leading-relaxed">{program.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProgramsOverview;
