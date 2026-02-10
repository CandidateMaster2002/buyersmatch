import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../config/site';
import { FacebookIcon, InstagramIcon, YouTubeIcon, LinkedInIcon, TikTokIcon, MapsIcon } from './SocialIcons';

interface TopBarProps {
    className?: string;
}

const TopBar: React.FC<TopBarProps> = ({ className = '' }) => {
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
        <div className={`bg-gradient-to-r from-[#0d2e2f] via-[#0a0a0a] to-[#0d2e2f] border-b border-[#29b8bd]/20 py-2.5 px-6 shadow-lg ${className}`}>
            <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">
                {/* Left: Contact Info - Vibrant Brand Styling */}
                <div className="flex items-center space-x-6 text-[11px] md:text-[12px] font-black tracking-widest uppercase">
                    <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center text-[#29b8bd]/80 hover:text-[#29b8bd] transition-all duration-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#29b8bd] mr-3 animate-pulse shadow-[0_0_8px_#29b8bd]"></span>
                        {siteConfig.contact.email}
                    </a>
                    <a href={`tel:${siteConfig.contact.phones[0].replace(/[^0-9+]/g, '')}`} className="flex items-center text-gray-400 hover:text-white transition-all duration-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mr-3 group-hover:bg-white transition-all"></span>
                        {siteConfig.contact.phones[0]}
                    </a>
                </div>

                {/* Right: Social Media - "Vibrant Glass" Style */}
                <div className="flex items-center space-x-4">
                    <span className="text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase mr-2 hidden lg:block">Follow Us</span>
                    <div className="flex items-center space-x-2.5">
                        {siteConfig.socials.map((social) => {
                            const Icon = getSocialIcon(social.name);
                            return (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] hover:border-[#29b8bd]/30 transition-all duration-300 shadow-sm"
                                >
                                    <Icon className="w-[18px] h-[18px] drop-shadow-md" />
                                </motion.a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
