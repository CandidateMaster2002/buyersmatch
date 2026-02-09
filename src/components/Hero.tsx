import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { openCalendlyPopup } from '../utils/calendly';
import MagneticButton from './MagneticButton';
import AnimatedText from './AnimatedText';
import SquiggleArrow from './SquiggleArrow';
import HandDrawnCircle from './HandDrawnCircle';
import tabletMapImg from '../assets/tablet_map.png';
import laptopAnalyticsImg from '../assets/laptop_analytics.png';
import homeImg from '../assets/home.png';

interface HeroProps {
    scrollToSection: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const rotatingContent = [
        {
            phrase: "Clarity at every step",
            imagePlaceholder: "📋",
            title: "Strategic Planning",
            bgGradient: "from-blue-50 to-blue-100",
            image: tabletMapImg
        },
        {
            phrase: "Confidence in every decision",
            imagePlaceholder: "💼",
            title: "Data-Driven Insights",
            bgGradient: "from-emerald-50 to-emerald-100",
            image: laptopAnalyticsImg
        },
        {
            phrase: "Results you can trust",
            imagePlaceholder: "🏡",
            title: "Your Dream Home",
            bgGradient: "from-amber-50 to-amber-100",
            image: homeImg
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % rotatingContent.length);
        }, 4500);

        return () => clearInterval(interval);
    }, []);

    const subheadlineVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.15 }
        }
    };

    const ctaVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.3 }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.8, delay: 0.2 }
        }
    };

    const phraseVariants = {
        enter: {
            opacity: 0,
            transition: { duration: 0.4 }
        },
        center: {
            opacity: 1,
            transition: { duration: 0.5 }
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.4 }
        }
    };

    const rotatingImageVariants = {
        enter: {
            opacity: 0,
            scale: 1.02,
            transition: { duration: 0.5 }
        },
        center: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6 }
        },
        exit: {
            opacity: 0,
            scale: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section className="relative py-16 md:py-24 px-4 sm:px-6 overflow-hidden bg-white">
            {/* Subtle background elements */}
            <div className="absolute top-[10%] right-[-5%] w-64 h-64 md:w-96 md:h-96 bg-[#29b8bd]/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-[10%] left-[-5%] w-48 h-48 md:w-72 md:h-72 bg-[#29b8bd]/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Left: Content */}
                    <div className="text-center lg:text-left space-y-8">
                        <div className="space-y-4">
                            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-gray-900">
                                <AnimatedText
                                    as="span"
                                    text="Buy like a "
                                />
                                <HandDrawnCircle delay={1.2}>
                                    <AnimatedText
                                        as="span"
                                        text="Pro."
                                        delay={0.3}
                                    />
                                </HandDrawnCircle>
                            </div>
                            <AnimatedText
                                as="h1"
                                text="Your Perfect Property Match."
                                delay={0.5}
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#29b8bd] to-[#1a8a8e]"
                            />
                        </div>

                        {/* Subheadline */}
                        <motion.div
                            variants={subheadlineVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                Stress-free property buying guided by experts who represent only you — from search to settlement.
                            </p>
                        </motion.div>

                        {/* Rotating Value Phrase */}
                        <div className="h-8 flex items-center justify-center lg:justify-start">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    variants={phraseVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    className="text-[#29b8bd] font-semibold text-lg lg:text-xl tracking-wide"
                                >
                                    {rotatingContent[currentIndex].phrase}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* CTAs */}
                        <div className="relative">
                            <motion.div
                                variants={ctaVariants}
                                initial="hidden"
                                animate="visible"
                                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-2"
                            >
                                <MagneticButton>
                                    <button
                                        onClick={openCalendlyPopup}
                                        className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 text-white font-bold md:font-black rounded-xl text-base md:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#29b8bd]/30 active:scale-[0.98] shadow-xl shadow-[#29b8bd]/20 bg-[#29b8bd] text-center"
                                    >
                                        Book Free Consultation
                                    </button>
                                </MagneticButton>

                                <MagneticButton distance={0.2}>
                                    <button
                                        onClick={() => scrollToSection('process')}
                                        className="text-gray-700 font-semibold md:font-bold text-base md:text-lg hover:text-[#29b8bd] transition-colors duration-200 flex items-center group px-4 py-2"
                                    >
                                        See how it works
                                        <svg className="w-4 h-4 md:w-5 md:h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                </MagneticButton>
                            </motion.div>

                            {/* Visual Guide Squiggle */}
                            <div className="hidden lg:block absolute -right-4 -top-16 w-32 h-32 transform -rotate-12 pointer-events-none opacity-60">
                                <SquiggleArrow delay={1.2} />
                            </div>
                        </div>
                    </div>

                    {/* Right: Rotating Images */}
                    <motion.div
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                        className="relative lg:pl-8 xl:pl-16"
                    >
                        <div className="relative max-w-md mx-auto lg:mx-0 lg:max-w-lg xl:max-w-xl">
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentIndex}
                                        variants={rotatingImageVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        className="aspect-[4/5]"
                                    >
                                        <img
                                            src={rotatingContent[currentIndex].image}
                                            alt={rotatingContent[currentIndex].phrase}
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-24 h-24 md:w-32 md:h-32 bg-[#29b8bd] rounded-2xl -z-10 opacity-20"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;