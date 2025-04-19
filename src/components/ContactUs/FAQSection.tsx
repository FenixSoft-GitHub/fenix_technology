import { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi2";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "@/data/faqsData";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-10 text-gray-900 dark:text-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8 drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]">
        Preguntas Frecuentes
      </h2>
      <div className="space-y-4">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 text-left font-medium text-gray-800 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-600 rounded-2xl transition"
                aria-expanded={isOpen}
                aria-controls={`faq-${index}`}
              >
                {item.question}
                <HiOutlineChevronDown
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden px-4 pb-4 text-gray-600 dark:text-gray-100"
                  >
                    <p className="pt-2">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;