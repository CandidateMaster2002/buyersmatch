import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1 // 100ms delay between cards
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};

const WhyChoose: React.FC = () => {
    const benefits = [
        {
            title: "Buyers-Only Focus",
            outcome: "No conflicts of interest",
            icon: (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            color: 'bg-emerald-50',
            iconColor: 'text-emerald-600'
        },
        {
            title: "Off-Market Access",
            outcome: "Properties others never see",
            icon: (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
            ),
            color: 'bg-purple-50',
            iconColor: 'text-purple-600'
        },
        {
            title: "Avoid Costly Mistakes",
            outcome: "Thorough due diligence",
            icon: (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            ),
            color: 'bg-amber-50',
            iconColor: 'text-amber-600'
        },
        {
            title: "Save Money",
            outcome: "Expert negotiation power",
            icon: (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            color: 'bg-blue-50',
            iconColor: 'text-blue-600'
        },
        {
            title: "We Work Only for You",
            outcome: "Your interests, always first",
            icon: (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            color: 'bg-rose-50',
            iconColor: 'text-rose-600'
        },
        {
            title: "Proven Track Record",
            outcome: "500+ successful purchases",
            icon: (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            ),
            color: 'bg-cyan-50',
            iconColor: 'text-cyan-600'
        },
        {
            title: "Time-Saving Expertise",
            outcome: "We do the heavy lifting",
            icon: (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            color: 'bg-indigo-50',
            iconColor: 'text-indigo-600'
        },
        {
            title: "Local Market Knowledge",
            outcome: "Insights you can't Google",
            icon: (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            color: 'bg-orange-50',
            iconColor: 'text-orange-600'
        }
    ];

    return (
        <section id="why-choose" className="py-20 px-4 bg-gray-50 overflow-hidden scroll-mt-24">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-black mb-4 text-gray-900 leading-tight">Why BuyersMatch</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We're not just another buyer's agent. Here's what makes us different.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px", amount: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
                >
                    {benefits.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative flex items-start p-6 bg-white rounded-2xl border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-[#29b8bd]/30 overflow-hidden"
                        >
                            {/* Subtle left accent on hover */}
                            <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 opacity-0 group-hover:opacity-100 ${item.iconColor.replace('text', 'bg')}`}></div>

                            <div className={`flex-shrink-0 w-14 h-14 rounded-xl ${item.color} ${item.iconColor} flex items-center justify-center mr-4 transition-all duration-300 group-hover:shadow-sm`}>
                                {item.icon}
                            </div>

                            <div className="flex flex-col">
                                <h3 className="font-black text-gray-900 leading-tight mb-1 group-hover:text-[#29b8bd] transition-colors duration-200">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm font-medium">
                                    {item.outcome}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChoose;
