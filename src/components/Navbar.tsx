import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../config/site';
import { openCalendlyPopup } from '../utils/calendly';
import TopBar from './TopBar';

import logo from '../assets/logo_removebg.png';

interface NavbarProps {
    scrollToSection: (id: string) => void;
    scrollTargetRef?: React.RefObject<HTMLDivElement | null>;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection, scrollTargetRef }) => {
    const [activeSection, setActiveSection] = useState<string>('');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const observerOptions = {
            root: scrollTargetRef?.current || null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observer for navbar shrinking - specifically watching hero
        const heroObserver = new IntersectionObserver(
            ([entry]) => {
                // Shrink navbar only when hero is NOT intersecting (covered)
                const isAtTop = scrollTargetRef?.current ? scrollTargetRef.current.scrollTop < 50 : true;

                if (isAtTop) {
                    setIsScrolled(false);
                } else if (!entry.isIntersecting) {
                    // Only shrink when hero is definitely gone
                    setIsScrolled(true);
                } else if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
                    // Only grow when hero is significantly back in view
                    // This ratio check prevents the rapid toggle at the very edge
                    setIsScrolled(false);
                }
            },
            {
                root: scrollTargetRef?.current || null,
                threshold: [0, 0.1, 0.2], // Multiple thresholds for smoother detection
                rootMargin: "0px 0px -50px 0px" // Add buffer to prevent growing pushing hero out of view
            }
        );

        siteConfig.navigation.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        const heroElement = document.getElementById('hero');
        if (heroElement) heroObserver.observe(heroElement);

        return () => {
            observer.disconnect();
            heroObserver.disconnect();
        };
    }, [scrollTargetRef]);

    const handleMobileNavClick = (id: string) => {
        scrollToSection(id);
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="relative z-[100] w-full bg-white">
            {/* Top Bar Header */}
            <div className={`transition-all duration-500 ease-in-out ${isScrolled ? 'max-h-0 opacity-0 overflow-hidden' : 'max-h-20 opacity-100'}`}>
                <TopBar />
            </div>

            {/* Main Navbar */}
            <nav className={`transition-all duration-500 ease-in-out ${isScrolled ? 'bg-white/95 shadow-md py-1' : 'bg-white py-2'
                }`}>
                <div className="container mx-auto px-4 relative">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div
                            className="flex items-center cursor-pointer group"
                            onClick={() => {
                                if (scrollTargetRef?.current) {
                                    scrollTargetRef.current.scrollTo({ top: 0, behavior: 'smooth' });
                                } else {
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }
                            }}
                        >
                            <img
                                src={logo}
                                alt={siteConfig.name}
                                className={`w-auto object-contain transition-all duration-500 group-hover:scale-105 ${isScrolled ? 'h-16 md:h-20' : 'h-32 md:h-36'
                                    }`}
                            />
                        </div>

                        {/* Navigation Links (Desktop) */}
                        <div className="hidden lg:flex items-center space-x-1 bg-gray-100/50 backdrop-blur-sm p-1 rounded-2xl">
                            {siteConfig.navigation.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`px-5 py-1 text-sm font-bold rounded-xl transition-all duration-300 capitalize relative overflow-hidden ${activeSection === item.id
                                        ? 'bg-white text-[#29b8bd] shadow-sm'
                                        : 'text-gray-500 hover:text-gray-900 hover:bg-white/50'
                                        }`}
                                >
                                    {item.label}
                                    {activeSection === item.id && (
                                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#29b8bd] rounded-full"></span>
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* CTA Button (Desktop) */}
                        <div className="hidden md:flex items-center space-x-4">
                            <button
                                onClick={openCalendlyPopup}
                                className="px-6 py-2 bg-[#29b8bd] text-white font-black rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-[#29b8bd]/20 hover:shadow-[#29b8bd]/40 text-sm uppercase tracking-wider"
                            >
                                Get Started
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 text-gray-900 hover:bg-gray-200 transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle mobile menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
                        >
                            <div className="flex flex-col p-4 space-y-4 container mx-auto">
                                {siteConfig.navigation.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => handleMobileNavClick(item.id)}
                                        className={`text-left px-4 py-3 text-base font-bold rounded-xl transition-all duration-300 capitalize ${activeSection === item.id
                                            ? 'bg-gray-50 text-[#29b8bd]'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                            }`}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                                <div className="pt-2 border-t border-gray-100">
                                    <button
                                        onClick={() => {
                                            openCalendlyPopup();
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className="w-full px-6 py-3 bg-[#29b8bd] text-white font-black rounded-xl transition-all duration-300 hover:bg-[#229ea3] active:scale-95 shadow-md text-sm uppercase tracking-wider"
                                    >
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
};

export default Navbar;
