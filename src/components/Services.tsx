import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import TiltCard from './TiltCard';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12 // 120ms delay between elements
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4
        }
    }
};

const Services: React.FC = () => {
    // ... services definition ...
    const services = [
        {
            title: "Find the Right Property",
            description: "Expert search and inspection to identify properties that match your goals and budget.",
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            ),
            color: "from-blue-500 to-blue-600"
        },
        {
            title: "Protect You from Mistakes",
            description: "Comprehensive due diligence to uncover issues before you commit.",
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            color: "from-emerald-500 to-emerald-600"
        },
        {
            title: "Get You the Best Deal",
            description: "Strategic negotiation to secure the property at the right price.",
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            color: "from-amber-500 to-amber-600"
        },
        {
            title: "Handle Everything End-to-End",
            description: "Complete transaction management and ongoing advice from search to settlement.",
            icon: (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            color: "from-purple-500 to-purple-600"
        }
    ];

    return (
        <section id="approach" className="py-24 px-4 bg-[#e8f7f7] scroll-mt-24">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <AnimatedText
                        text="How We Help"
                        className="text-4xl md:text-6xl font-black text-gray-900"
                    />
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px", amount: 0.2 }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 [perspective:1000px]"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="h-full"
                        >
                            <TiltCard className="h-full">
                                <div className="group bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-[#29b8bd]/30 transition-all duration-300 flex flex-col h-full hover:shadow-xl">
                                    {/* Icon with gradient background - subtle hover lift */}
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 transition-all duration-300 group-hover:shadow-md`}>
                                        {service.icon}
                                    </div>

                                    <h3 className="text-xl font-black mb-3 text-gray-900 group-hover:text-[#29b8bd] transition-colors duration-200">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed font-medium">
                                        {service.description}
                                    </p>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
