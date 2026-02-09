import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/site';
import AnimatedText from './AnimatedText';

const VideoTestimonials: React.FC = () => {
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
                                    <div className="bg-[#29b8bd] w-14 h-14 rounded-full flex items-center justify-center mb-6 cursor-pointer hover:scale-110 transition-transform shadow-lg border-4 border-white/20">
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
        </section>
    );
};

export default VideoTestimonials;
