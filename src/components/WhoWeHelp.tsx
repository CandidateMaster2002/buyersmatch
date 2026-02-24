import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import { siteConfig } from '../config/site';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring" as const,
            damping: 12,
            stiffness: 100
        }
    }
};

const WhoWeHelp: React.FC = () => {
    return (
        <section id="help" className="py-24 px-4 bg-white scroll-mt-24">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <AnimatedText
                        text="Who We Help"
                        className="text-4xl md:text-6xl font-black text-gray-900"
                    />
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 gap-12"
                >
                    {siteConfig.whoWeHelp.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative overflow-hidden rounded-[2.5rem] bg-gray-50 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-700 h-full"
                        >
                            <div className="flex flex-col lg:flex-row h-full">
                                {/* Image Half */}
                                <div className="lg:w-1/2 relative h-64 lg:h-auto overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-gray-50 lg:from-transparent to-transparent"></div>
                                </div>

                                {/* Content Half */}
                                <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
                                    <div className="w-12 h-12 bg-[#29b8bd]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#29b8bd] transition-colors duration-500">
                                        <svg className="w-6 h-6 text-[#29b8bd] group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-[#29b8bd] transition-colors duration-500">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed font-medium">
                                        {item.content}
                                    </p>


                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhoWeHelp;
