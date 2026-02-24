import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/site';
import AnimatedText from './AnimatedText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath, faCar } from '@fortawesome/free-solid-svg-icons';

const CaseStudies: React.FC = () => {
    const navigate = useNavigate();
    const containerRef = useRef<HTMLDivElement>(null);
    const [maxScroll, setMaxScroll] = useState(0);

    // Update max scroll when content loads or window resizes
    useEffect(() => {
        const updateMaxScroll = () => {
            if (containerRef.current) {
                const { scrollWidth, clientWidth } = containerRef.current;
                setMaxScroll(scrollWidth - clientWidth);
            }
        };

        updateMaxScroll();
        window.addEventListener('resize', updateMaxScroll);
        // Also update after a small delay to catch images loading
        const timer = setTimeout(updateMaxScroll, 500);
        return () => {
            window.removeEventListener('resize', updateMaxScroll);
            clearTimeout(timer);
        };
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (!containerRef.current) return;

        const scrollStep = 532; // Width of card (500) + gap (32)
        const currentScroll = containerRef.current.scrollLeft;
        const targetScroll = direction === 'left'
            ? Math.max(0, currentScroll - scrollStep)
            : Math.min(maxScroll, currentScroll + scrollStep);

        containerRef.current.scrollTo({
            left: targetScroll,
            behavior: 'smooth'
        });
    };

    // Use regular stories for the slider with arrows
    const stories = siteConfig.successStories;

    return (
        <section id="case-studies" className="py-24 bg-[#e8f7f7] scroll-mt-24 overflow-hidden relative">
            <div className="container mx-auto px-4 mb-16">
                <div className="text-center">
                    <AnimatedText
                        text="Results Speak Louder"
                        className="text-4xl md:text-6xl font-black text-gray-900"
                    />
                </div>
            </div>

            {/* Scrolling Container */}
            <div className="relative group px-4 md:px-0">
                {/* Slider Controls - Positioned on the sides */}
                <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between px-4 md:px-12 z-30 pointer-events-none">
                    <button
                        onClick={() => scroll('left')}
                        className="w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center text-[#29b8bd] hover:bg-[#29b8bd] hover:text-white transition-all duration-300 pointer-events-auto active:scale-90 border border-gray-100 group"
                        aria-label="Previous case studies"
                    >
                        <svg className="w-6 h-6 transform transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center text-[#29b8bd] hover:bg-[#29b8bd] hover:text-white transition-all duration-300 pointer-events-auto active:scale-90 border border-gray-100 group"
                        aria-label="Next case studies"
                    >
                        <svg className="w-6 h-6 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                <div
                    ref={containerRef}
                    className="flex gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-12 px-4 md:px-[max(1rem,calc((100vw-1280px)/2))]"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {stories.map((story: any, index: number) => {
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="flex-shrink-0 w-[300px] md:w-[500px] bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl snap-center"
                            >
                                <div className="h-48 md:h-72 bg-gray-200 relative overflow-hidden">
                                    <img
                                        src={story.image}
                                        alt={`${story.state} Property`}
                                        className="w-full h-full object-cover transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-6 left-8">
                                        <p className="font-black text-xl md:text-2xl uppercase tracking-widest text-white drop-shadow-md">{story.state}</p>
                                    </div>
                                </div>
                                <div className="p-6 md:p-10">
                                    <div className="flex flex-wrap items-center gap-x-4 md:gap-x-6 gap-y-2 md:gap-y-3 mb-6 md:mb-8 pb-4 md:pb-6 border-b border-gray-100">
                                        <div className="flex items-center gap-2">
                                            <FontAwesomeIcon icon={faBed} className="text-[#29b8bd] w-3 h-3 md:w-4 md:h-4" />
                                            <span className="text-gray-900 font-bold text-xs md:text-sm tracking-tight">{story.beds} Beds</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FontAwesomeIcon icon={faBath} className="text-[#29b8bd] w-3 h-3 md:w-4 md:h-4" />
                                            <span className="text-gray-900 font-bold text-xs md:text-sm tracking-tight">{story.baths} Baths</span>
                                        </div>
                                        {story.cars > 0 && (
                                            <div className="flex items-center gap-2">
                                                <FontAwesomeIcon icon={faCar} className="text-[#29b8bd] w-3 h-3 md:w-4 md:h-4" />
                                                <span className="text-gray-900 font-bold text-xs md:text-sm tracking-tight">{story.cars} Park</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="grid grid-cols-2 gap-y-6 md:gap-y-8 gap-x-3 md:gap-x-4 text-left">
                                        <div className="flex flex-col">
                                            <span className="text-[8px] md:text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1 md:mb-2">Price</span>
                                            <span className="text-lg md:text-2xl font-black text-gray-900 leading-none">{story.price}</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[8px] md:text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1 md:mb-2">Rent</span>
                                            <span className="text-lg md:text-2xl font-black text-gray-900 leading-none">{story.rent}</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[8px] md:text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1 md:mb-2">Yield</span>
                                            <span className="text-lg md:text-2xl font-black text-[#29b8bd] leading-none">{story.yield}</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[8px] md:text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1 md:mb-2">Status</span>
                                            <span className="text-base md:text-xl font-black text-gray-900 leading-none">{story.status}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Gradient Fades */}
                <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#e8f7f7] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#e8f7f7] to-transparent z-10 pointer-events-none"></div>
            </div>

            {/* View All Button */}
            <div className="container mx-auto px-4 mt-20 md:mt-32 text-center">
                <button
                    onClick={() => navigate('/case-studies')}
                    className="inline-flex items-center px-10 py-5 bg-white text-[#29b8bd] font-black rounded-3xl border-2 border-[#29b8bd]/10 hover:border-[#29b8bd] hover:shadow-2xl hover:shadow-[#29b8bd]/20 transition-all duration-300 group"
                >
                    View All Case Studies
                    <div className="ml-4 w-10 h-10 bg-[#29b8bd] text-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                </button>
            </div>

            <style>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </section>
    );
};

export default CaseStudies;
