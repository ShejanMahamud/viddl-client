'use client';

import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Is VidDL completely free to use?',
    answer: 'Yes, VidDL is completely free with no hidden costs, subscription fees, or download limits.',
  },
  {
    question: 'Do I need to create an account?',
    answer: 'No registration required! Simply paste your video URL and start downloading immediately.',
  },
  {
    question: 'What video qualities are available?',
    answer: 'We support all available qualities from 480p to 4K, depending on the original video quality.',
  },
  {
    question: 'Is it safe to use VidDL?',
    answer: 'Absolutely! We don\'t store any personal data or downloaded content. All processes are secure and private.',
  },
  {
    question: 'Can I download private videos?',
    answer: 'No, we can only download publicly available videos. Private or restricted content cannot be accessed.',
  },
  {
    question: 'What formats are supported?',
    answer: 'We support MP4, MP3, GIF, and other common formats depending on the source platform.',
  },
];

export function FAQ() {
  return (
    
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 dark:from-indigo-500/10 dark:to-purple-500/10">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Questions</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about VidDL.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/60 dark:bg-gray-700/60 rounded-xl border border-gray-200/50 dark:border-gray-600/50 px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6 text-gray-900 dark:text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}