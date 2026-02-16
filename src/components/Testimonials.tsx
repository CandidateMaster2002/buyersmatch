import React, { useState } from 'react';
import { siteConfig } from '../config/site';
import VideoModal from './VideoModal';

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? siteConfig.reviews.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === siteConfig.reviews.length - 1 ? 0 : prev + 1));
    };

    return (
        <section id="testimonials" className="py-24 px-4 bg-white overflow-hidden scroll-mt-24">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 items-start">

                    {/* Left Summary Section */}
                    <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-start text-center lg:text-left pt-4">
                        <div className="grid grid-cols-2 gap-1 w-24 h-24 mb-6 rounded-lg overflow-hidden bg-gray-100 shadow-sm">
                            <div className="bg-[#29b8bd]/20 flex items-center justify-center text-xs">🏠</div>
                            <div className="bg-[#29b8bd]/10 flex items-center justify-center text-xs">🤝</div>
                            <div className="bg-[#29b8bd]/5 flex items-center justify-center text-xs">🔍</div>
                            <div className="bg-[#29b8bd]/30 flex items-center justify-center text-xs font-bold text-[#29b8bd]">BM</div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{siteConfig.name}</h3>
                        <div className="flex items-center justify-center lg:justify-start mb-2">
                            <div className="flex text-yellow-400 mr-2">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                        <p className="text-gray-600 font-medium mb-6">79 Google reviews</p>
                        <button className="px-8 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-800 font-bold hover:bg-gray-50 transition-colors shadow-sm">
                            Write a review
                        </button>
                    </div>

                    {/* Right Review Cards Section */}
                    <div className="w-full lg:w-3/4 relative">
                        <div className="relative overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
                            >
                                {siteConfig.reviews.map((review, index) => (
                                    <div key={index} className="w-full min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-3">
                                        <div className="bg-[#f4f4f4] rounded-2xl p-6 h-full flex flex-col items-start relative border border-white/50">

                                            {/* Card Header */}
                                            <div className="flex items-center w-full mb-4">
                                                <div className="w-12 h-12 rounded-full overflow-hidden bg-[#29b8bd] flex items-center justify-center text-white font-bold text-xl uppercase mr-3">
                                                    {review.name.charAt(0)}
                                                </div>
                                                <div className="flex flex-col">
                                                    <h4 className="font-bold text-gray-900 leading-none mb-1">{review.name}</h4>
                                                    <span className="text-xs text-gray-500">{review.date}</span>
                                                </div>
                                                <div className="ml-auto">
                                                    {/* Google Icon Placeholder */}
                                                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                                                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                                                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                                    </svg>
                                                </div>
                                            </div>

                                            {/* Stars and Verified */}
                                            <div className="flex items-center mb-3">
                                                <div className="flex text-[#fb8c00] mr-2">
                                                    {[...Array(5)].map((_, i) => (
                                                        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                    ))}
                                                </div>
                                                <div className="bg-[#4285f4] rounded-full p-0.5">
                                                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                            </div>

                                            {/* Review Text */}
                                            <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
                                                {review.text}
                                            </p>

                                            {/* Read More */}
                                            <button className="mt-auto text-xs font-bold text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-wider">
                                                Read more
                                            </button>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevSlide}
                            className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2.5 shadow-xl border border-gray-100 text-gray-400 hover:text-gray-900 transition-all z-10"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2.5 shadow-xl border border-gray-100 text-gray-400 hover:text-gray-900 transition-all z-10"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Video Testimonials Section (Below Google Reviews) */}
                <div className="mt-32">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black mb-4">Success Stories</h2>
                        <p className="text-xl text-gray-500">Real property journeys from our clients</p>
                    </div>

                    <div className="flex overflow-x-auto pb-12 space-x-8 scrollbar-hide px-4 mask-fade-edges">
                        {siteConfig.videoTestimonials.map((video) => (
                            <div key={video.id} className="flex-shrink-0 w-80 group">
                                <div className="relative aspect-[9/16] bg-gray-100 rounded-3xl overflow-hidden shadow-xl transition-transform duration-500 group-hover:scale-[1.02]">
                                    <img
                                        src={video.image}
                                        alt={video.name}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                                        <div
                                            className="bg-[#29b8bd] w-12 h-12 rounded-full flex items-center justify-center mb-4 cursor-pointer hover:scale-110 transition-transform shadow-lg"
                                            onClick={() => setSelectedVideoId(video.youtubeId || null)}
                                        >
                                            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                        <h4 className="font-bold text-lg md:text-xl mb-1 line-clamp-3 leading-tight">{video.name}</h4>
                                        {video.quote && <p className="text-sm text-gray-100 line-clamp-2">{video.quote}</p>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <VideoModal
                isOpen={!!selectedVideoId}
                onClose={() => setSelectedVideoId(null)}
                videoId={selectedVideoId || ""}
            />
        </section>
    );
};

export default Testimonials;
