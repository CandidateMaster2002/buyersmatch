import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';
import AnimatedText from './AnimatedText';
import pujaVishalImg from '../assets/owners.jpeg';

const AboutUsSection: React.FC = () => {
    return (
        <section id="about" className="py-16 md:py-20 px-4 bg-white scroll-mt-24">
            <div className="container mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="relative">
                            {/* Main Image */}
                            <div className="rounded-3xl overflow-hidden shadow-2xl max-h-[600px] aspect-[4/5]">
                                <img
                                    src={pujaVishalImg}
                                    alt="Puja and Vishal - Founders of BuyersMatch"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#29b8bd] rounded-3xl -z-10 opacity-20"></div>
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-[#29b8bd] to-[#1a8a8e] rounded-full -z-10 opacity-30"></div>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-8 left-8 bg-white rounded-2xl shadow-xl p-4 border-4 border-[#e8f7f7]">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#29b8bd] to-[#1a8a8e] rounded-xl flex items-center justify-center text-2xl">
                                        ⭐
                                    </div>
                                    <div>
                                        <div className="font-black text-gray-900 text-lg">
                                            <AnimatedCounter value={150} suffix="+" />
                                        </div>
                                        <div className="text-gray-600 text-sm font-semibold">Happy Clients</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="order-1 lg:order-2"
                    >
                        {/* Uniform Heading Structure */}
                        <div className="text-left mb-12">
                            <AnimatedText
                                text="About Us"
                                className="text-4xl md:text-6xl font-black text-gray-900 leading-tight"
                            />
                        </div>

                        {/* Mission Statement */}
                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                            <p className="font-semibold text-xl text-gray-900">
                                Founded by Puja and Vishal, at BuyersMatch our mission is to align your property investment perfectly with your unique family situation and goals.
                            </p>

                            <p>
                                We enable you to live a stress-free lifestyle while your investments diligently pave the way for passive income, securing your financial future.
                            </p>

                            {/* Highlighted Box */}
                            <div className="bg-gradient-to-r from-[#29b8bd]/10 to-[#e8f7f7] border-l-4 border-[#29b8bd] rounded-r-2xl p-6 my-8">
                                <p className="font-bold text-[#29b8bd] text-xl mb-3">
                                    Our Secret?
                                </p>
                                <p className="text-gray-800">
                                    We treat every client like a superstar, understanding your goals, preferences, and budget to handpick the best properties just for YOU!
                                </p>
                            </div>

                            <p className="text-gray-800 font-medium">
                                <span className="font-black text-[#29b8bd]">No stress, just smiles!</span> With BuyersMatch, the search for your dream home becomes a joyous ride! Together, we will explore properties, share laughs, and find the one that steals your heart!
                            </p>

                            <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#29b8bd] to-[#1a8a8e]">
                                Let's make your real estate dreams shine bright! ✨
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
