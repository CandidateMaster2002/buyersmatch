import React from 'react';
import { siteConfig } from '../config/site';
import { openCalendlyPopup } from '../utils/calendly';

interface StickyCTAProps {
    isVisible?: boolean; // Kept for compatibility but controlled by parent motion wrapper
}

const StickyCTA: React.FC<StickyCTAProps> = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50">
            <div className="container mx-auto px-2 pb-2">
                <div className="bg-white/95 backdrop-blur-xl rounded-[1.5rem] shadow-[0_15px_40px_rgba(41,184,189,0.25)] p-2 md:p-3 mx-auto max-w-4xl border border-white/40 overflow-hidden">
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-6 px-1">
                        {/* Left: Connect on Call */}
                        <a
                            href={`tel:${siteConfig.contact.phones[0].replace(/\s+/g, '')}`}
                            className="flex items-center space-x-2 md:space-x-3 group no-underline"
                        >
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-[#29b8bd]/10 flex items-center justify-center group-hover:bg-[#29b8bd] group-hover:rotate-12 transition-all duration-300 shadow-sm">
                                <svg className="w-4 h-4 md:w-5 md:h-5 text-[#29b8bd] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[8px] md:text-[10px] font-black text-[#29b8bd] uppercase tracking-wider leading-none mb-0.5 whitespace-nowrap">Connect on Call</span>
                                <span className="text-sm md:text-base font-black text-gray-900 group-hover:text-[#29b8bd] transition-colors tracking-tight whitespace-nowrap">{siteConfig.contact.phones[0]}</span>
                            </div>
                        </a>

                        {/* Right: Book CTA */}
                        <button
                            onClick={openCalendlyPopup}
                            className="flex-shrink-0 px-4 md:px-8 py-2 md:py-3 bg-[#29b8bd] text-white font-black rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-[#29b8bd]/20 hover:shadow-[#29b8bd]/40 text-center text-[10px] md:text-sm uppercase tracking-wider flex items-center justify-center space-x-2"
                        >
                            <span className="whitespace-nowrap">Book Free Consultation</span>
                            <svg className="hidden sm:block w-3 h-3 md:w-4 md:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StickyCTA;
