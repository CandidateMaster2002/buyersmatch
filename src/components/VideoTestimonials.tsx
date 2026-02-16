import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/site';
import AnimatedText from './AnimatedText';

const VideoModal: React.FC<{ isOpen: boolean; onClose: () => void; videoId: string }> = ({ isOpen, onClose, videoId }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm" onClick={onClose}>
            <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    className="absolute -top-12 right-0 text-white hover:text-[#29b8bd] transition-colors p-2"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

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
            <div className="relative flex overflow-hidden group">
                <motion.div
                    className="flex space-x-8 whitespace-nowrap"
                    animate={{
                        x: [0, -1600], // Adjust based on total width of one set
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30, // Adjust speed (higher = slower)
                            ease: "linear",
                        },
                    }}
                >
                    {doubledTestimonials.map((video, index) => (
                        <div key={`${video.id}-${index}`} className="flex-shrink-0 w-80">
                            <div className="relative aspect-[9/16] bg-gray-100 rounded-[2.5rem] overflow-hidden shadow-xl transition-all duration-500 hover:scale-[1.05] hover:shadow-[#29b8bd]/20">
                                <img
                                    src={video.image}
                                    alt={video.name}
                                    className="absolute inset-0 w-full h-full object-cover"
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
                                    <h4 className="font-bold text-2xl mb-2">{video.name}</h4>
                                    <p className="text-base text-gray-200 whitespace-normal line-clamp-2 leading-relaxed">
                                        "{video.quote}"
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Left/Right Overlays to fade the edges */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#e8f7f7] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#e8f7f7] to-transparent z-10 pointer-events-none"></div>
            </div>

            <VideoModal
                isOpen={!!selectedVideoId}
                onClose={() => setSelectedVideoId(null)}
                videoId={selectedVideoId || ""}
            />
        </section>
    );
};

export default VideoTestimonials;
