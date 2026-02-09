import React from 'react';
import { siteConfig } from '../config/site';
import { openCalendlyPopup } from '../utils/calendly';

const FinalCTA: React.FC = () => {
    return (
        <section id="final-cta" className="py-24 md:py-32 px-4 relative overflow-hidden bg-white scroll-mt-24">
            <div className="container mx-auto relative z-10">
                <div className="max-w-5xl mx-auto bg-gray-50 rounded-[3rem] p-8 md:p-20 shadow-2xl overflow-hidden relative group border border-gray-100">
                    {/* Subtle Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <pattern id="final-cta-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                                <circle cx="20" cy="20" r="1" fill="currentColor" />
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#final-cta-pattern)" />
                        </svg>
                    </div>

                    <div className="text-center relative z-10">
                        <div className="inline-block px-6 py-2 bg-[#29b8bd]/10 rounded-full text-[#29b8bd] text-sm font-black uppercase tracking-[0.3em] mb-8 animate-pulse">
                            Get Started Today
                        </div>

                        <h2 className="text-4xl md:text-7xl font-black text-gray-900 mb-8 leading-[1.1] tracking-tight">
                            Ready to Find Your <span className="text-[#29b8bd]">Perfect Property Match?</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-gray-500 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                            Join hundreds of successful property buyers who stopped guessing and started winning with {siteConfig.name}.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button
                                onClick={openCalendlyPopup}
                                className="w-full sm:w-auto px-12 py-6 bg-[#29b8bd] text-white font-black rounded-2xl text-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(41,184,189,0.3)] flex items-center justify-center group"
                            >
                                Book Your Free Consultation
                                <svg className="w-6 h-6 ml-3 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>

                            <div className="flex items-center gap-4 text-gray-400 font-bold">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs text-gray-600">
                                            👤
                                        </div>
                                    ))}
                                </div>
                                <span className="text-sm">Join 500+ Happy Clients</span>
                            </div>
                        </div>
                    </div>

                    {/* Background Decorative Element */}
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#29b8bd]/5 rounded-full blur-3xl group-hover:bg-[#29b8bd]/10 transition-colors duration-700"></div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
