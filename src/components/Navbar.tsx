import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/site';
import { FacebookIcon, InstagramIcon, YouTubeIcon, LinkedInIcon, TikTokIcon, MapsIcon } from './SocialIcons';

interface NavbarProps {
    scrollToSection: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
    const [activeSection, setActiveSection] = useState<string>('');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        const observerOptions = {
            root: null,
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

        siteConfig.navigation.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        window.addEventListener('scroll', handleScroll);
        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const getSocialIcon = (name: string) => {
        switch (name.toLowerCase()) {
            case 'facebook': return FacebookIcon;
            case 'instagram': return InstagramIcon;
            case 'youtube': return YouTubeIcon;
            case 'linkedin': return LinkedInIcon;
            case 'tiktok': return TikTokIcon;
            case 'maps': return MapsIcon;
            default: return FacebookIcon;
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-[100]">
            {/* Top Bar Header */}
            <div className={`transition-all duration-300 bg-gray-900 border-b border-white/5 py-2 px-4 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'}`}>
                <div className="container mx-auto flex flex-wrap justify-between items-center text-xs md:text-sm font-medium">
                    {/* Left: Contact Info */}
                    <div className="flex items-center space-x-6 text-gray-300">
                        <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center hover:text-white transition-colors">
                            <svg className="w-4 h-4 mr-2 text-[#29b8bd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            {siteConfig.contact.email}
                        </a>
                        <a href={`tel:${siteConfig.contact.phones[0]}`} className="flex items-center hover:text-white transition-colors">
                            <svg className="w-4 h-4 mr-2 text-[#29b8bd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            {siteConfig.contact.phones[0]}
                        </a>
                    </div>
                    {/* Right: Social Media */}
                    <div className="flex items-center space-x-3">
                        {siteConfig.socials.map((social) => {
                            const Icon = getSocialIcon(social.name);

                            return (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
          w-9 h-9 
          flex items-center justify-center
          transition-transform duration-300
          hover:scale-110
        "
                                >
                                    <Icon
                                        className="
            block
            w-6 h-6
            object-contain
            drop-shadow-sm
          "
                                    />
                                </a>
                            );
                        })}
                    </div>

                </div>
            </div>

            {/* Main Navbar */}
            <nav className={`transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-white py-5'
                }`}>
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div
                            className="flex items-center space-x-3 cursor-pointer group"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#29b8bd] to-[#1a8a8e] flex items-center justify-center shadow-lg shadow-[#29b8bd]/20 group-hover:rotate-6 transition-transform">
                                <span className="text-white font-bold text-xl">{siteConfig.logoText}</span>
                            </div>
                            <span className="text-2xl font-extrabold tracking-tight text-gray-900">{siteConfig.name}</span>
                        </div>

                        {/* Navigation Links */}
                        <div className="hidden lg:flex items-center space-x-1 bg-gray-100/50 backdrop-blur-sm p-1 rounded-2xl border border-gray-200/50">
                            {siteConfig.navigation.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`px-5 py-2 text-sm font-bold rounded-xl transition-all duration-300 capitalize relative overflow-hidden ${activeSection === item.id
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

                        {/* CTA Button */}
                        <div className="hidden md:flex items-center space-x-4">
                            <a
                                href={siteConfig.contact.calendly}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-[#29b8bd] text-white font-black rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-[#29b8bd]/20 hover:shadow-[#29b8bd]/40 text-sm uppercase tracking-wider"
                            >
                                Get Started
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 text-gray-900">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
