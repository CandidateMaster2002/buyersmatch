import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import awardImg from '../assets/award_jpg.jpg';

const Awards: React.FC = () => {
    return (
        <section id="awards" className="py-24 md:py-32 px-4 bg-white relative overflow-hidden scroll-mt-24">
            {/* Elegant Background Element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#e8f7f7]/30 -z-10 skew-x-12 transform origin-top"></div>

            <div className="container mx-auto">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16 md:mb-20">
                        <AnimatedText
                            text="Excellence Recognized"
                            className="text-4xl md:text-6xl font-black text-gray-900 leading-tight"
                        />
                        <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            whileInView={{ opacity: 1, scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="h-1.5 w-24 bg-gradient-to-r from-[#29b8bd] to-[#1a8a8e] mx-auto mt-6 rounded-full"
                        ></motion.div>
                    </div>

                    <div className="flex flex-col items-center gap-12">
                        {/* Award Image with Premium Styling */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="w-full max-w-2xl"
                        >
                            <div className="relative group">
                                {/* Soft glow effect behind the image */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-[#29b8bd] to-[#1a8a8e] rounded-[2.5rem] blur-2xl opacity-10 group-hover:opacity-20 transition duration-1000"></div>

                                <div className="relative bg-white p-3 md:p-6 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden">
                                    <img
                                        src={awardImg}
                                        alt="Rising Star 2024 Award"
                                        className="w-full h-auto rounded-3xl transform transition duration-700 group-hover:scale-[1.02]"
                                    />
                                </div>

                                {/* Floating Badge Ornament */}
                                <motion.div
                                    initial={{ scale: 0, rotate: -20 }}
                                    whileInView={{ scale: 1, rotate: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.8 }}
                                    className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-24 h-24 md:w-32 md:h-32 bg-yellow-400 rounded-full flex flex-col items-center justify-center font-black text-gray-900 shadow-2xl border-4 border-white z-10"
                                >
                                    <span className="text-xs md:text-sm uppercase tracking-tighter">Winner</span>
                                    <span className="text-2xl md:text-4xl">#1</span>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Award Details */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="text-center"
                        >
                            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                                Rising Star 2024
                            </h3>
                            <p className="text-xl md:text-2xl text-[#29b8bd] font-bold uppercase tracking-widest">
                                Buyer's Agent Institute
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Awards;
