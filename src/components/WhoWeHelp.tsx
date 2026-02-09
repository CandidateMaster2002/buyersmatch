import React from 'react';
import { motion } from 'framer-motion';
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
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6
        }
    }
};

const WhoWeHelp: React.FC = () => {
    return (
        <section id="help" className="py-24 px-4 bg-gradient-to-b from-white to-gray-50 scroll-mt-24">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">Who We Help</h2>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
                        Tailored property buying solutions for investors building wealth through real estate.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px", amount: 0.2 }}
                    className="space-y-16 md:space-y-24"
                >
                    {siteConfig.whoWeHelp.map((item: any, index: number) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`group flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                } gap-8 md:gap-12 items-center`}
                        >
                            {/* Image Section */}
                            <div className="w-full md:w-1/2">
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                    <div className="aspect-[4/3] overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#29b8bd]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full md:w-1/2 space-y-6">
                                <div className="inline-block px-4 py-2 bg-[#29b8bd]/10 rounded-full">
                                    <span className="text-[#29b8bd] text-sm font-black uppercase tracking-widest">
                                        {index === 0 ? 'Portfolio Growth' : 'Retirement Planning'}
                                    </span>
                                </div>

                                <h3 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
                                    {item.title}
                                </h3>

                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
                                    {item.content}
                                </p>

                                <div className="pt-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-1 bg-[#29b8bd] rounded-full"></div>
                                        <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">
                                            Expert Guidance
                                        </span>
                                    </div>
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
