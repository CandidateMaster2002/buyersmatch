import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/site';
import AnimatedText from './AnimatedText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath, faCar } from '@fortawesome/free-solid-svg-icons';

const CaseStudies: React.FC = () => {
    const navigate = useNavigate();
    // Duplicate the stories to ensure a smooth infinite loop
    const loopedStories = [...siteConfig.successStories, ...siteConfig.successStories, ...siteConfig.successStories];

    return (
        <section id="case-studies" className="py-24 bg-[#e8f7f7] scroll-mt-24 overflow-hidden">
            <div className="container mx-auto px-4 mb-16">
                <div className="text-center">
                    <AnimatedText
                        text="Results Speak Louder"
                        className="text-4xl md:text-6xl font-black text-gray-900"
                    />
                </div>
            </div>

            {/* Scrolling Container */}
            <div className="relative group cursor-grab active:cursor-grabbing overflow-hidden">
                <motion.div
                    className="flex gap-8 px-4"
                    drag="x"
                    dragConstraints={{ right: 0, left: -2400 }}
                    animate={{
                        x: [0, -1200],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 50,
                            ease: "linear",
                        },
                    }}
                    whileHover={{ transition: { duration: 0 } }}
                    whileDrag={{ transition: { duration: 0 } }}
                >
                    {loopedStories.map((story: any, index: number) => {
                        return (
                            <div key={index} className="flex-shrink-0 w-[500px] bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl pointer-events-none group-active:pointer-events-none">
                                <div className="h-72 bg-gray-200 relative overflow-hidden pointer-events-none">
                                    <img
                                        src={story.image}
                                        alt={`${story.state} Property`}
                                        className="w-full h-full object-cover transition-transform duration-700 pointer-events-none select-none"
                                        onDragStart={(e) => e.preventDefault()}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-6 left-8">
                                        <p className="font-black text-2xl uppercase tracking-widest text-white drop-shadow-md">{story.state}</p>
                                    </div>

                                </div>
                                <div className="p-10 pointer-events-auto">
                                    <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-8 pb-6 border-b border-gray-100">
                                        <div className="flex items-center gap-2">
                                            <FontAwesomeIcon icon={faBed} className="text-[#29b8bd] w-4 h-4" />
                                            <span className="text-gray-900 font-bold text-sm tracking-tight">{story.beds} Bedrooms</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FontAwesomeIcon icon={faBath} className="text-[#29b8bd] w-4 h-4" />
                                            <span className="text-gray-900 font-bold text-sm tracking-tight">{story.baths} Bathrooms</span>
                                        </div>
                                        {story.cars > 0 && (
                                            <div className="flex items-center gap-2">
                                                <FontAwesomeIcon icon={faCar} className="text-[#29b8bd] w-4 h-4" />
                                                <span className="text-gray-900 font-bold text-sm tracking-tight">{story.cars} Parking</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="grid grid-cols-2 gap-y-8 gap-x-4 text-left">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">Purchase Price</span>
                                            <span className="text-2xl font-black text-gray-900 leading-none">{story.price}</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">Weekly Rent</span>
                                            <span className="text-2xl font-black text-gray-900 leading-none">{story.rent}</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">Rental Yield</span>
                                            <span className="text-2xl font-black text-[#29b8bd] leading-none">{story.yield}</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">Purchase</span>
                                            <span className="text-xl font-black text-gray-900 leading-none">{story.status}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </motion.div>

                {/* Gradient Fades */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#e8f7f7] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#e8f7f7] to-transparent z-10 pointer-events-none"></div>
            </div>

            {/* View All Button */}
            <div className="container mx-auto px-4 mt-20 text-center">
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
        </section>
    );
};

export default CaseStudies;
