import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/site';
import AnimatedText from './AnimatedText';
import VideoModal from './VideoModal';

const VideoTestimonials: React.FC = () => {
    const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [maxScroll, setMaxScroll] = useState(0);

    const testimonials = siteConfig.videoTestimonials;

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
        return () => window.removeEventListener('resize', updateMaxScroll);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (!containerRef.current) return;

        const scrollStep = 350; // Width of card + gap
        const currentScroll = containerRef.current.scrollLeft;
        const targetScroll = direction === 'left'
            ? Math.max(0, currentScroll - scrollStep)
            : Math.min(maxScroll, currentScroll + scrollStep);

        containerRef.current.scrollTo({
            left: targetScroll,
            behavior: 'smooth'
        });
    };

    return (
        <section id="testimonials" className="py-24 px-4 bg-white scroll-mt-24 overflow-hidden">
            <div className="container mx-auto px-4 relative">
                <div className="text-center mb-16">
                    <AnimatedText
                        text="Success Stories"
                        className="text-4xl md:text-6xl font-black text-gray-900"
                    />
                </div>

                {/* Slider Controls - Positioned Relative to Container */}
                <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between px-2 z-30 pointer-events-none">
                    <button
                        onClick={() => scroll('left')}
                        className="w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center text-[#29b8bd] hover:bg-[#29b8bd] hover:text-white transition-all duration-300 pointer-events-auto active:scale-90 border border-gray-100 group"
                        aria-label="Previous testimonials"
                    >
                        <svg className="w-6 h-6 transform transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center text-[#29b8bd] hover:bg-[#29b8bd] hover:text-white transition-all duration-300 pointer-events-auto active:scale-90 border border-gray-100 group"
                        aria-label="Next testimonials"
                    >
                        <svg className="w-6 h-6 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Horizontal Scroll Container */}
                <div
                    ref={containerRef}
                    className="flex gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 px-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {testimonials.map((video, index) => (
                        <motion.div
                            key={`${video.id}-${index}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="flex-shrink-0 w-[280px] md:w-80 snap-center"
                        >
                            <div className="relative aspect-[9/16] bg-gray-100 rounded-[2.5rem] overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-[#29b8bd]/20 group">
                                <img
                                    src={video.image}
                                    alt={video.name}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                                    <div
                                        className="bg-[#29b8bd] w-14 h-14 rounded-full flex items-center justify-center mb-6 cursor-pointer hover:scale-110 transition-transform shadow-lg border-4 border-white/20"
                                        onClick={() => setSelectedVideoId(video.youtubeId || null)}
                                    >
                                        <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-bold text-xl md:text-2xl mb-2 leading-tight font-sans tracking-tight">{video.name}</h4>
                                    {video.quote && (
                                        <p className="text-base text-gray-200 line-clamp-2 leading-relaxed italic opacity-90">
                                            "{video.quote}"
                                        </p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Left/Right Overlays to fade the edges */}
                <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>
            </div>

            <VideoModal
                isOpen={!!selectedVideoId}
                onClose={() => setSelectedVideoId(null)}
                videoId={selectedVideoId || ""}
            />

            {/* View All Button */}
            {/* <div className="container mx-auto px-4 mt-12 text-center">
                <button
                    onClick={() => window.open('https://www.youtube.com/@BuyersMatch/shorts', '_blank')}
                    className="inline-flex items-center px-10 py-5 bg-[#29b8bd] text-white font-black rounded-3xl shadow-xl shadow-[#29b8bd]/20 hover:bg-[#23a1a5] hover:shadow-2xl hover:shadow-[#29b8bd]/30 transition-all duration-300 group"
                >
                    Vist Our YouTube Channel
                    <div className="ml-4 w-10 h-10 bg-white/20 text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                        </svg>
                    </div>
                </button>
            </div> */}

            <style>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </section>
    );
};

export default VideoTestimonials;
