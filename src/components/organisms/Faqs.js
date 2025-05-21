import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { dataSite } from '@/data';

const faqs = [
  {
    question: 'How do I start a video production project with you?',
    answer:
      'Simply contact us through our website or by phone to schedule an initial consultation. We’ll discuss your vision, goals, budget, and timeline before presenting a proposal.',
  },
  {
    question: 'What is your typical timeline for a commercial or music video?',
    answer:
      'Depending on the complexity of the project, timelines vary. However, most productions take between 2 to 6 weeks from pre-production to final delivery.',
  },
  {
    question: 'Can you help with concept development and scripting?',
    answer:
      'Yes! Our team offers full creative development services including brainstorming, scripting, and storyboarding to bring your vision to life.',
  },
  {
    question: 'Do you handle post-production as well?',
    answer:
      'Absolutely. We manage editing, color grading, sound design, and visual effects to ensure the final product meets professional standards.',
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className='bg-neutral-900 text-white py-16 px-6 md:px-12'>
      <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-12'>
        {/* Image */}
        <div>
          <img
            src={dataSite.image_hero}
            alt='Behind the scenes'
            className='rounded-lg shadow-lg w-full h-96 object-cover'
          />
        </div>

        {/* FAQs */}
        <div>
          <h2 className='text-4xl font-bold mb-6'>
            Questions We Get <br /> About Video Production
          </h2>
          <div className='space-y-4'>
            {faqs.map((faq, index) => (
              <div key={index} className='border-b border-white/20 pb-4'>
                <button
                  onClick={() => toggleFaq(index)}
                  className='flex items-center justify-between w-full text-left text-lg font-medium hover:text-yellow-400 transition'
                >
                  {activeIndex === index ? (
                    <span className='text-yellow-400'>{faq.question}</span>
                  ) : (
                    faq.question
                  )}
                  {activeIndex === index ? (
                    <FiChevronUp className='text-yellow-400' />
                  ) : (
                    <FiChevronDown />
                  )}
                </button>
                <AnimatePresence initial={false}>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className='mt-3 text-sm text-gray-300'>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
