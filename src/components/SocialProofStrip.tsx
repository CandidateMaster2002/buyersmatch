import React from 'react';
import AnimatedCounter from './AnimatedCounter';
import { siteConfig } from '../config/site';

const SocialProofStrip: React.FC = () => {
    return (
        <section className="py-12 px-4 bg-[#e8f7f7] border-y border-[#29b8bd]/10">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                    {/* Google Reviews */}
                    <div className="flex items-center gap-4">
                        <div className="flex text-yellow-400 text-2xl">
                            ⭐⭐⭐⭐⭐
                        </div>
                        <div className="text-left">
                            <div className="font-black text-gray-900 text-lg">
                                <AnimatedCounter value={80} suffix="+ Google Reviews" />
                            </div>
                            <div className="text-gray-500 text-sm font-medium">5.0/5.0 Average Rating</div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block w-px h-12 bg-gray-200"></div>

                    {/* Award */}
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#29b8bd] to-[#1a8a8e] flex items-center justify-center text-3xl shadow-lg">
                            🏆
                        </div>
                        <div className="text-left">
                            <div className="font-black text-gray-900 text-lg">Rising Star 2024</div>
                            <div className="text-gray-500 text-sm font-medium">Buyer's Agent Institute</div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block w-px h-12 bg-gray-200"></div>

                    {/* Happy Clients */}
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-[#29b8bd]/10 flex items-center justify-center">
                            <svg className="w-8 h-8 text-[#29b8bd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <div className="text-left">
                            <div className="font-black text-gray-900 text-lg">
                                <AnimatedCounter value={siteConfig.stats.totalClients} suffix="+" />
                            </div>
                            <div className="text-gray-500 text-sm font-medium">Properties Secured</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProofStrip;
