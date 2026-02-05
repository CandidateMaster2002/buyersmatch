import React from 'react';
import { siteConfig } from '../config/site';

interface StickyCTAProps {
    isVisible?: boolean; // Kept for compatibility but controlled by parent motion wrapper
}

const StickyCTA: React.FC<StickyCTAProps> = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50">
            <div className="container mx-auto px-4 pb-4">
                <div className="bg-white/90 backdrop-blur-md rounded-[2rem] shadow-[0_20px_50px_rgba(41,184,189,0.3)] p-4 md:p-6 mx-auto max-w-4xl border border-[#29b8bd]/20">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="text-center md:text-left">
                            <h3 className="text-xl md:text-2xl font-black text-gray-900 leading-none">What Are You Waiting For?</h3>
                        </div>
                        <a
                            href={siteConfig.contact.calendly}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full md:w-auto px-8 py-3 text-white font-black rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-[#29b8bd]/20 text-center text-sm md:text-base"
                            style={{ backgroundColor: '#29b8bd' }}
                        >
                            Book Free Consultation Today
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StickyCTA;
