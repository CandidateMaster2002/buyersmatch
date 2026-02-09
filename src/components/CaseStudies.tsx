import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/site';
import AnimatedText from './AnimatedText';
import houseSa from '../assets/house_sa.png';
import houseWa from '../assets/house_wa.png';
import houseQld from '../assets/house_qld.png';

const CaseStudies: React.FC = () => {
    const storyImages = [houseSa, houseWa, houseQld];

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
            <div className="relative group">
                <motion.div
                    className="flex gap-8 px-4"
                    animate={{
                        x: [0, -1200], // Adjust based on total width of one set (3 cards * 400px gaps)
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40,
                            ease: "linear",
                        },
                    }}
                >
                    {loopedStories.map((story: any, index: number) => {
                        const imageIndex = index % storyImages.length;
                        return (
                            <div key={index} className="flex-shrink-0 w-[400px] bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 group/card transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                                <div className="h-64 bg-gray-200 relative overflow-hidden">
                                    <img
                                        src={storyImages[imageIndex]}
                                        alt={`${story.state} Property`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-4 left-6">
                                        <p className="font-black text-2xl uppercase tracking-widest text-white drop-shadow-md">{story.state} Property</p>
                                    </div>
                                    <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full font-bold text-sm shadow-sm text-[#29b8bd]">
                                        {story.status}
                                    </div>
                                </div>
                                <div className="p-10">
                                    <div className="grid grid-cols-2 gap-8">
                                        <div>
                                            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Purchase Price</div>
                                            <div className="font-black text-2xl text-gray-900">{story.price}</div>
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Weekly Rent</div>
                                            <div className="font-black text-2xl text-gray-900">{story.rent}</div>
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Rental Yield</div>
                                            <div className="font-black text-2xl text-[#29b8bd]">{story.yield}</div>
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Opportunity</div>
                                            <div className="font-black text-2xl text-gray-900">Off Market</div>
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
        </section>
    );
};

export default CaseStudies;
