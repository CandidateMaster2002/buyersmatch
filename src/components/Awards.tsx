import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedText from './AnimatedText';
import awardImg from '../assets/award_jpg.jpg';
import award2Img from '../assets/award2.jpeg';

const Awards: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const awards = [
        {
            image: awardImg,
            title: "Rising Star 2024",
            subtitle: "Buyer's Agent Institute",
            badgeLabel: "Winner",
            badgeValue: "#1"
        },
        {
            image: award2Img,
            title: "Nominee (Professional Services)",
            subtitle: "Monash Business Awards",
            badgeLabel: "Featured",
            badgeValue: "🏆"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % awards.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

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

                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="flex flex-col items-center gap-12"
                            >
                                {/* Award Image with Premium Styling */}
                                <div className="w-full max-w-2xl">
                                    <div className="relative group overflow-visible">
                                        {/* Soft glow effect behind the image */}
                                        <div className="absolute -inset-6 bg-gradient-to-r from-[#29b8bd] to-[#1a8a8e] rounded-[2.5rem] blur-3xl opacity-10 group-hover:opacity-20 transition duration-1000"></div>

                                        <img
                                            src={awards[currentIndex].image}
                                            alt={awards[currentIndex].title}
                                            className="relative z-10 w-full h-auto max-h-[600px] object-contain rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] transform transition duration-700 group-hover:scale-[1.02]"
                                        />

                                        {/* Floating Badge Ornament */}
                                        <motion.div
                                            initial={{ scale: 0, rotate: -20 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 }}
                                            className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-24 h-24 md:w-32 md:h-32 bg-yellow-400 rounded-full flex flex-col items-center justify-center font-black text-gray-900 shadow-2xl border-4 border-white z-20"
                                        >
                                            <span className="text-xs md:text-sm uppercase tracking-tighter">{awards[currentIndex].badgeLabel}</span>
                                            <span className="text-2xl md:text-4xl">{awards[currentIndex].badgeValue}</span>
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Award Details */}
                                <div className="text-center">
                                    <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                                        {awards[currentIndex].title}
                                    </h3>
                                    <p className="text-xl md:text-2xl text-[#29b8bd] font-bold uppercase tracking-widest">
                                        {awards[currentIndex].subtitle}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Pagination Dots */}
                        <div className="flex justify-center gap-3 mt-12">
                            {awards.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'w-10 bg-[#29b8bd]' : 'w-3 bg-gray-200'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Awards;
