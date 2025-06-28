import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const faqs = [
  {
    question: "What is RentPrompts Academy?",
    answer:
      "It's a modern learning platform where you master Prompt Engineering, AI tools, no-code automation, and more — all in one guided path.",
  },
  {
    question: "Do I need to know coding?",
    answer:
      "Nope. Most of our content is built for non-coders, creatives, and beginners. Everything is explained step-by-step.",
  },
  {
    question: "Will I get a certificate?",
    answer:
      "Yes! Every program offers a certificate you can showcase on LinkedIn, resumes, or portfolio sites.",
  },
  {
    question: "Can I learn at my own pace?",
    answer:
      "Absolutely. You get lifetime access to content, so you can learn whenever it suits you.",
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <motion.div
    layout
    onClick={onClick}
    className="bg-[#151b3b] border border-white/10 rounded-xl p-5 cursor-pointer hover:border-purple-500 transition-all"
  >
    <div className="flex justify-between items-center">
      <h3 className="text-white text-base font-semibold">{question}</h3>
      <span className="text-purple-400 text-xl font-bold">{isOpen ? "−" : "+"}</span>
    </div>
    <AnimatePresence>
      {isOpen && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="text-sm text-gray-300 mt-3 leading-relaxed"
        >
          {answer}
        </motion.p>
      )}
    </AnimatePresence>
  </motion.div>
);

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#0c1025] text-white py-32 px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked <span className="text-purple-400">Questions</span></h2>
        <p className="text-gray-400 text-base max-w-xl mx-auto">
          Still curious? We’ve got answers to some of the most common things we get asked.
        </p>
      </div>

      <div className="space-y-4 max-w-3xl mx-auto">
        {faqs.map((faq, i) => (
          <FAQItem
            key={i}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === i}
            onClick={() => toggleFAQ(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQs;
