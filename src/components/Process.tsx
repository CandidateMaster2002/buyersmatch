import React from 'react';
import { siteConfig } from '../config/site';
import AnimatedText from './AnimatedText';
import DrawingGuide from './DrawingGuide';

const Process: React.FC = () => {
    return (
        <section id="process" className="py-24 px-4 bg-white scroll-mt-24">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <AnimatedText
                        text="Our 5-Step Process"
                        className="text-4xl md:text-6xl font-black text-gray-900"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto">
                    {/* Main Grid Container */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-4 relative z-10">
                        {siteConfig.processSteps.map((step: any, index: number) => (
                            <div key={index} className="relative group flex flex-col items-center text-center">

                                {/* Connector Arrow (Desktop Only) */}
                                {index < siteConfig.processSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-10 left-[70%] w-[60%] h-12 z-0 pointer-events-none">
                                        <DrawingGuide
                                            className="w-full h-full"
                                            delay={index * 0.3}
                                        />
                                    </div>
                                )}

                                {/* Step Icon/Number Container */}
                                <div className="relative mb-8">
                                    <div className="w-20 h-20 rounded-3xl flex items-center justify-center text-white text-3xl font-black shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 relative z-10"
                                        style={{ backgroundColor: '#29b8bd' }}>
                                        <span className="absolute -top-3 -right-3 w-10 h-10 bg-white text-[#29b8bd] rounded-full text-lg flex items-center justify-center shadow-xl border-4 border-[#29b8bd]/10 font-black">
                                            {index + 1}
                                        </span>
                                        <span className="text-4xl drop-shadow-md">{step.emoji}</span>
                                    </div>

                                    {/* Glowing background effect */}
                                    <div className="absolute inset-0 bg-[#29b8bd]/20 blur-2xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>

                                {/* Content */}
                                <h3 className="font-black text-xl mb-4 text-gray-900 group-hover:text-[#29b8bd] transition-colors">{step.title}</h3>
                                <p className="text-gray-600 font-medium leading-relaxed max-w-[200px] text-sm md:text-base">
                                    {step.desc}
                                </p>

                                {/* Mobile/Tablet Arrow (Visual only) */}
                                {index < siteConfig.processSteps.length - 1 && (
                                    <div className="lg:hidden mt-8 text-[#29b8bd]/30 transform rotate-90">
                                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
                                            <path d="M13.025 1l-2.847 2.828 6.176 6.172H0v4h16.354l-6.176 6.172 2.847 2.828L23.025 12z" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
