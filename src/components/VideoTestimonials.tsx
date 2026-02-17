import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/site';
import AnimatedText from './AnimatedText';
import VideoModal from './VideoModal';

const VideoTestimonials: React.FC = () => {
    const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

    // Duplicate the array to create a seamless infinite loop
    const doubledTestimonials = [...siteConfig.videoTestimonials, ...siteConfig.videoTestimonials];

    return (
        <section id="video-testimonials" className="py-24 px-4 bg-[#e8f7f7] scroll-mt-24 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <AnimatedText
                        text="Success Stories"
                        className="text-4xl md:text-6xl font-black text-gray-900"
                    />
                </div>
            </div>

            {/* Infinite Horizontal Animation Container */}
            <div className="relative flex overflow-hidden group cursor-grab active:cursor-grabbing px-4">
                <motion.div
                    className="flex gap-8"
                    drag="x"
                    dragConstraints={{ right: 0, left: -5000 }}
                    animate={{
                        x: [0, -3200],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 100,
                            ease: "linear",
                        },
                    }}
                    whileHover={{ transition: { duration: 0 } }}
                    whileDrag={{ transition: { duration: 0 } }}
                >
                    {doubledTestimonials.map((video, index) => (
                        <div key={`${video.id}-${index}`} className="flex-shrink-0 w-80 pointer-events-none group-active:pointer-events-none">
                            <div className="relative aspect-[9/16] bg-gray-100 rounded-[2.5rem] overflow-hidden shadow-xl transition-all duration-500 hover:scale-[1.05] hover:shadow-[#29b8bd]/20">
                                <img
                                    src={video.image}
                                    alt={video.name}
                                    className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                                    onDragStart={(e) => e.preventDefault()}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white pointer-events-auto">
                                    <div
                                        className="bg-[#29b8bd] w-14 h-14 rounded-full flex items-center justify-center mb-6 cursor-pointer hover:scale-110 transition-transform shadow-lg border-4 border-white/20"
                                        onClick={() => setSelectedVideoId(video.youtubeId || null)}
                                    >
                                        <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-bold text-xl md:text-2xl mb-2 whitespace-normal line-clamp-3 leading-tight font-sans tracking-tight">{video.name}</h4>
                                    {video.quote && (
                                        <p className="text-base text-gray-200 whitespace-normal line-clamp-2 leading-relaxed">
                                            "{video.quote}"
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Left/Right Overlays to fade the edges */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#e8f7f7] to-transparent z-20 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#e8f7f7] to-transparent z-20 pointer-events-none"></div>
            </div>

            <VideoModal
                isOpen={!!selectedVideoId}
                onClose={() => setSelectedVideoId(null)}
                videoId={selectedVideoId || ""}
            />

            {/* View All Button */}
            <div className="container mx-auto px-4 mt-20 text-center">
                <button
                    onClick={() => window.open('https://www.youtube.com/@BuyersMatch/shorts', '_blank')}
                    className="inline-flex items-center px-10 py-5 bg-[#29b8bd] text-white font-black rounded-3xl shadow-xl shadow-[#29b8bd]/20 hover:bg-[#23a1a5] hover:shadow-2xl hover:shadow-[#29b8bd]/30 transition-all duration-300 group"
                >
                    View All Testimonials
                    <div className="ml-4 w-10 h-10 bg-white/20 text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                        </svg>
                    </div>
                </button>
            </div>
        </section>
    );
};

export default VideoTestimonials;
