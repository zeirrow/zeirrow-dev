import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { faqs } from "../../data/data";
import { motion, AnimatePresence } from "framer-motion";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="w-full max-w-2xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center mb-8">FAQs</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="border border-zinc-200 dark:border-zinc-700 rounded-xl overflow-hidden"
            initial={false} // Disable initial animation
            whileHover={{ scale: 1.01 }} // Gentle hover effect
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
              whileTap={{ scale: 0.98 }} // Click feedback
            >
              <span>{faq.question}</span>
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {openIndex === index ? <BiChevronUp /> : <BiChevronDown />}
              </motion.span>
            </motion.button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-zinc-600 dark:text-zinc-300">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
