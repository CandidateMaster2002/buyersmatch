import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../config/site';

const Awards: React.FC = () => {
    const [currentAwardIndex, setCurrentAwardIndex] = useState(0);

    const awards = [
        {
            icon: "🏆",
            title: "Rising Star 2024",
            organization: "Buyer's Agent Institute",
            badge: "#1",
            color: "from-[#29b8bd] to-[#1a8a8e]"
        },
        {
            icon: "⭐",
            title: "Top Performer",
            organization: "Property Excellence Awards",
            badge: "5★",
            color: "from-amber-500 to-orange-600"
        },
        {
            icon: "🎖️",
            title: "Client Choice Award",
            organization: "Australian Property Network",
            badge: "2024",
            color: "from-purple-500 to-indigo-600"
        },
        {
            icon: "🥇",
            title: "Best Service",
            organization: "Real Estate Excellence",
            badge: "Gold",
            color: "from-yellow-500 to-amber-600"
        }
    ];

    // Auto-rotate every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentAwardIndex((prev) => (prev + 1) % awards.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [awards.length]);

    const awardVariants = {
        enter: {
            opacity: 0,
            scale: 0.9,
            rotateY: 90,
            transition: { duration: 0.3 }
        },
        center: {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            transition: { duration: 0.4 }
        },
        exit: {
            opacity: 0,
            scale: 0.9,
            rotateY: -90,
            transition: { duration: 0.3 }
        }
    };

    return (
        <section id="awards" className="py-32 px-4 bg-white relative overflow-hidden scroll-mt-24">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#e8f7f7]/30 -z-10 skew-x-12 transform origin-top"></div>
            <div className="container mx-auto">
                <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    {/* Left: Rotating Award Cards */}
                    <div className="w-full lg:w-2/5">
                        <div className="relative h-80">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentAwardIndex}
                                    variants={awardVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    className="absolute inset-0"
                                >
                                    <div className={`bg-gradient-to-br ${awards[currentAwardIndex].color} rounded-[3rem] p-12 text-center text-white shadow-2xl h-full flex flex-col justify-center`}>
                                        <div className="text-8xl mb-8 transform -rotate-12">{awards[currentAwardIndex].icon}</div>
                                        <h3 className="text-3xl font-black mb-2 leading-tight">{awards[currentAwardIndex].title}</h3>
                                        <p className="text-white/90 font-bold uppercase tracking-widest text-sm">{awards[currentAwardIndex].organization}</p>
                                    </div>
                                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center font-black text-gray-900 text-2xl shadow-xl border-4 border-white">
                                        {awards[currentAwardIndex].badge}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Indicator Dots */}
                        <div className="flex justify-center gap-2 mt-12">
                            {awards.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentAwardIndex(index)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentAwardIndex
                                        ? 'bg-[#29b8bd] w-8'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                        }`}
                                    aria-label={`View award ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right: Story Content */}
                    <div className="w-full lg:w-3/5">
                        <h2 className="text-4xl md:text-5xl font-black mb-8 text-gray-900 leading-tight">Excellence Recognized</h2>
                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                            <p className="font-bold text-2xl text-[#29b8bd]">Puja's Journey to Success</p>
                            <p>
                                After a successful career change, Puja entered the property industry with passion
                                and determination. Starting with just 5 clients, she quickly established herself
                                as a trusted buyer's agent.
                            </p>
                            <p>
                                Her commitment to client success and innovative approach to property matching
                                led to rapid growth and recognition. Today, {siteConfig.name} is thriving, helping
                                clients across Australia find their perfect property matches.
                            </p>
                            <p className="text-gray-500 italic">
                                These awards celebrate our journey and ongoing commitment
                                to excellence in property buying services.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Awards;
