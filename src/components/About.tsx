import React from 'react';
import { siteConfig } from '../config/site';

const About: React.FC = () => {
    return (
        <section id="about" className="py-24 md:py-32 px-4 bg-white relative overflow-hidden scroll-mt-24">
            <div className="container mx-auto">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-black mb-12 text-gray-900">About {siteConfig.name}</h2>
                    <div className="space-y-8 text-lg md:text-xl text-gray-700 leading-relaxed">
                        <p className="relative">
                            <span className="absolute -left-4 top-0 text-6xl text-[#29b8bd]/10 font-serif">"</span>
                            Founded by Puja and Vishal, <span className="font-bold text-[#29b8bd]">{siteConfig.name}</span> is your trusted partner in property buying.
                            We specialize in finding properties that not only meet your needs but also align
                            with your long-term investment goals.
                        </p>
                        <p>
                            Our mission is to transform your property buying journey into a stress-free,
                            enjoyable experience. Whether you're seeking your dream home or building a
                            portfolio for passive income, we provide <span className="bg-yellow-100 px-2 font-bold">superstar treatment</span> every step of the way.
                        </p>
                        <p className="text-gray-500 italic">
                            We believe property buying should be a joyous ride, not a stressful chore.
                            Let us match you with properties that truly fit your lifestyle and investment
                            aspirations.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
