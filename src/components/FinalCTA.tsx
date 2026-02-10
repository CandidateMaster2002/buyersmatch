import React from 'react';
import { motion } from 'framer-motion';
import { openCalendlyPopup } from '../utils/calendly';
import AnimatedCounter from './AnimatedCounter';
import MagneticButton from './MagneticButton';

const FinalCTA: React.FC = () => {
    return (
        <section id="final-cta" className="py-20 px-4 relative overflow-hidden bg-white scroll-mt-24">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-6xl mx-auto relative"
                >
                    {/* The Premium "Elite" Card */}
                    <div className="relative overflow-hidden rounded-[3.5rem] bg-[#0a0a0a] p-12 md:p-16 lg:p-20 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)] border border-white/[0.08]">

                        {/* Aurora Background Effect */}
                        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-[#29b8bd]/20 rounded-full blur-[120px] pointer-events-none opacity-50"></div>
                        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none opacity-30"></div>

                        {/* Card Content Container */}
                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">

                            {/* Text Group */}
                            <div className="max-w-2xl text-center lg:text-left">
                                <div className="inline-flex items-center space-x-3 mb-6">
                                    <span className="h-[1px] w-8 bg-[#29b8bd]"></span>
                                    <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#29b8bd]">Secure Your Future</span>
                                </div>

                                <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.05] mb-8 tracking-tighter">
                                    The Next Level of <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#29b8bd] via-[#4fd1d9] to-[#29b8bd]">Buying Starts Here.</span>
                                </h2>

                                <p className="text-lg text-gray-400 font-medium max-w-xl leading-relaxed mb-0">
                                    Stop guessing. Join the elite top <span className="text-white">1% of property buyers</span> who secure off-market gems using our data-backed strategy.
                                </p>
                            </div>

                            {/* Action Group */}
                            <div className="flex flex-col items-center lg:items-end gap-8">
                                <MagneticButton>
                                    <button
                                        onClick={openCalendlyPopup}
                                        className="relative group flex items-center justify-center px-12 py-6 bg-white text-[#0a0a0a] font-black rounded-2xl text-xl transition-all duration-300 hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)] active:scale-95"
                                    >
                                        <span className="relative z-10 flex items-center">
                                            Book Free Strategy Session
                                            <svg className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </span>
                                    </button>
                                </MagneticButton>

                                <div className="flex items-center gap-5">
                                    <div className="flex -space-x-4">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="w-11 h-11 rounded-full border-[3px] border-[#0a0a0a] bg-gray-800 flex items-center justify-center text-sm shadow-xl">
                                                <img
                                                    src={`https://i.pravatar.cc/100?u=${i}`}
                                                    alt="Client"
                                                    className="w-full h-full rounded-full grayscale hover:grayscale-0 transition-all duration-300"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-left">
                                        <div className="text-white font-black text-base leading-none mb-1">
                                            <AnimatedCounter value={500} suffix="+" /> Success Stories
                                        </div>
                                        <div className="text-gray-500 text-xs font-bold uppercase tracking-widest">Across Australia</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Subtle outer glow for the section */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-2/3 bg-[#29b8bd]/5 rounded-full blur-[150px] -z-10"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
