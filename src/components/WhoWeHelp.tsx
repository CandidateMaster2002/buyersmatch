import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/site';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15 // 150ms delay between cards
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

const WhoWeHelp: React.FC = () => {
    return (
        <section id="help" className="py-24 px-4 bg-gray-50 scroll-mt-24">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-4">Who We Help</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Tailored property buying solutions for every stage of your journey.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px", amount: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {siteConfig.whoWeHelp.map((item: any, index: number) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:border-[#29b8bd]/30 transition-all duration-300 flex flex-col h-full hover:shadow-lg"
                        >
                            {/* Image Section */}
                            <div className="aspect-[4/5] overflow-hidden relative">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <h3 className="text-2xl font-black text-white leading-tight">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8 flex-grow">
                                <p className="text-gray-600 leading-relaxed font-medium">
                                    {item.content}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhoWeHelp;
