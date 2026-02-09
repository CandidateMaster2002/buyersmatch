import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

const WhyChoose: React.FC = () => {
    const reasons = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Off-Market Access",
            desc: "Get exclusive access to properties before they even hit the open market.",
            color: 'bg-blue-50',
            iconColor: 'text-blue-600'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: "Unbiased Advice",
            desc: "We work solely for the buyer, ensuring your interests always come first.",
            color: 'bg-rose-50',
            iconColor: 'text-rose-600'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Save Time & Stress",
            desc: "Focus on your life while we take care of the entire property buying process.",
            color: 'bg-cyan-50',
            iconColor: 'text-cyan-600'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
            ),
            title: "Expert Portfolio Builder",
            desc: "Strategic guidance for first-time buyers and seasoned investors alike.",
            color: 'bg-indigo-50',
            iconColor: 'text-indigo-600'
        }
    ];

    return (
        <section id="why-choose" className="py-20 px-4 bg-[#e8f7f7] overflow-hidden scroll-mt-24">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <AnimatedText
                        text="Why BuyersMatch"
                        className="text-4xl md:text-6xl font-black text-gray-900"
                    />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-100"
                        >
                            <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                <div className={item.iconColor}>
                                    {item.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-black text-gray-900 mb-4">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed font-medium">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
