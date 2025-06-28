import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

const reasons = [
  {
    title: "AI feels overwhelming",
    desc: "Most tutorials assume too much. We break things down without the buzzwords so you never feel lost.",
  },
  {
    title: "You need hands-on practice",
    desc: "Watching isn’t learning. From Day 1, you'll be working with real AI tools through guided challenges.",
  },
  {
    title: "You’re not sure how to apply it",
    desc: "We help you turn knowledge into action — for freelance work, job roles, or even launching your own ideas.",
  },
];

const SolutionStatement = () => {
  return (
    <section className="bg-[#0c1025] text-white py-40 px-6 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.15 }}
        viewport={{ once: false }}
        className="max-w-6xl mx-auto text-center"
      >

        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-10 inline-flex items-center justify-center rounded-full bg-[#1a1f3c] w-24 h-24 mx-auto shadow-[0_0_40px_rgba(162,89,255,0.4)]"
        >
          <Lightbulb className="w-12 h-12 text-purple-400" />
        </motion.div>


        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
        >
          A Complete <span className="text-purple-400">AI Learning Ecosystem</span>
        </motion.h2>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto"
        >
          AI is changing everything — fast. But learning it shouldn't feel overwhelming. That’s why we built RentPrompts Academy: a platform where you can grow from zero to confident, with real tools, real projects, and human guidance.
        </motion.p>

        <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false }}
              className="bg-[#1a1f3c] p-8 rounded-xl border border-white/10 hover:shadow-[0_0_25px_rgba(162,89,255,0.25)] transition-all duration-300 ease-out"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SolutionStatement;
