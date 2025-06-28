import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'DIPTI PAWAR',
    quote:
      'RentPrompts gave me real AI project experience — especially in prompt engineering and content building. It was smooth, guided, and incredibly empowering.',
  },
  {
    name: 'KRATIKA YADAV',
    quote:
      'The perfect environment to learn, create, and explore AI tools. I was able to apply everything practically, not just in theory.',
  },
  {
    name: 'AYUSHI GURJAR',
    quote:
      'Working in teams and solving real-world problems made me confident about my future in AI. Loved the support and structure!',
  },
  {
    name: 'SHRAJIK PATIL',
    quote:
      'This internship gave me more than skills — it gave me clarity. From LangChain to automation, I grew rapidly with guidance.',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#0c1025] text-white py-32 px-6">
      <div className="max-w-6xl mx-auto text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-4xl md:text-5xl font-bold"
        >
          What Our Students Say
        </motion.h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Hear directly from those who transformed their AI journey through RentPrompts Academy.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.02 }}
            className="relative bg-[#151b3b] rounded-xl p-6 border border-white/10 shadow-sm transition-transform duration-300"
          >

            <div className="absolute top-4 left-0 h-10 w-1 bg-purple-500 rounded-r-sm"></div>

            <div className="text-purple-400 text-5xl mb-2 font-serif">“</div>
            <p className="text-sm text-gray-200 mb-6 leading-relaxed">{t.quote}</p>

            <p className="uppercase text-white font-semibold text-sm border-t border-white/10 pt-3">
              {t.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
