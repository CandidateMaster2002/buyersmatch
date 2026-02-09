import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedText from './AnimatedText';

const faqs = [
    {
        question: "What is a Buyer's Agent and why do I need one?",
        answer: "A Buyer's Agent is a licensed professional who represents the property buyer's interests. Unlike real estate agents who work for the seller, we work exclusively for you. We help you find the right property, perform due diligence, and negotiate the best possible price, saving you time, stress, and potentially thousands of dollars."
    },
    {
        question: "How do you source off-market properties?",
        answer: "We have an extensive network of real estate agents, developers, and private contacts. Because we are active in the market daily, agents often call us with 'silent listings' before they hit the major portals. This gives our clients a significant competitive advantage."
    },
    {
        question: "Do you only work with investors?",
        answer: "Not at all! We help both home buyers (owner-occupiers) looking for their dream home and investors looking to build a high-performing property portfolio. Our strategies are tailored to your specific goals, whether it's lifestyle or financial growth."
    },
    {
        question: "What areas do you cover?",
        answer: "While we have deep expertise in major metropolitan areas, our research-driven approach allows us to help clients secure properties across Australia. We focus on areas with strong growth fundamentals and high demand."
    },
    {
        question: "How do your fees work?",
        answer: "We offer a transparent fee structure tailored to the level of service you require. Generally, we charge a small engagement fee to start the search, followed by a final success fee only when we successfully secure your property. Contact us for a detailed breakdown based on your budget."
    },
    {
        question: "How long does the process typically take?",
        answer: "Most of our clients secure a property within 4 to 8 weeks. However, we work at your pace. We are committed to finding the right match, not just a fast one."
    }
];

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [showAll, setShowAll] = useState(false);

    const displayedFaqs = showAll ? faqs : faqs.slice(0, 5);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 px-4 bg-white scroll-mt-24">
            <div className="container mx-auto max-w-4xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <AnimatedText
                        text="Frequently Asked Questions"
                        className="text-4xl md:text-6xl font-black text-gray-900"
                    />
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {displayedFaqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-gray-100 rounded-[2rem] overflow-hidden bg-gray-50/50 hover:bg-white hover:shadow-xl transition-all duration-500"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-8 py-6 text-left flex items-center justify-between group"
                            >
                                <span className="text-xl font-black text-gray-900 group-hover:text-[#29b8bd] transition-colors line-clamp-2 md:line-clamp-none">
                                    {faq.question}
                                </span>
                                <span className={`flex-shrink-0 ml-4 p-2 rounded-full transition-all duration-500 ${openIndex === index ? 'bg-[#29b8bd] text-white rotate-180' : 'bg-white text-gray-400'}`}>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "circOut" }}
                                    >
                                        <div className="px-8 pb-8 text-gray-600 text-lg leading-relaxed font-medium">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Show All Toggle */}
                {!showAll && faqs.length > 5 && (
                    <div className="mt-12 text-center">
                        <button
                            onClick={() => setShowAll(true)}
                            className="px-12 py-5 bg-white border-2 border-gray-100 text-gray-900 font-black rounded-2xl hover:bg-gray-50 hover:border-[#29b8bd] transition-all duration-300 shadow-xl shadow-gray-200/50"
                        >
                            View All Questions
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default FAQ;
