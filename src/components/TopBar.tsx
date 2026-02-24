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
        <div className={`bg-gradient-to-r from-[#0d2e2f] via-[#0a0a0a] to-[#0d2e2f] border-b border-[#29b8bd]/20 py-4 md:py-2.5 px-4 md:px-6 shadow-lg ${className}`}>
            <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-center gap-3.5 md:gap-0">
                {/* Contact Info */}
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-0 md:space-x-6 text-[11px] md:text-[12px] font-black tracking-widest uppercase">
                    {/* Email */}
                    <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center text-[#29b8bd]/80 hover:text-[#29b8bd] transition-all duration-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#29b8bd] mr-3 animate-pulse shadow-[0_0_8px_#29b8bd]"></span>
                        {siteConfig.contact.email}
                    </a>
                    {/* Phone numbers in a row */}
                    <div className="flex items-center gap-x-5 md:gap-x-6">
                        {siteConfig.contact.phones.map((phone, index) => (
                            <a
                                key={index}
                                href={`tel:+61${phone.replace(/[^0-9]/g, '')}`}
                                className="flex items-center text-gray-400 hover:text-white transition-all duration-300"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mr-3"></span>
                                {phone}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Social Media */}
                <div className="flex items-center space-x-4">
                    <span className="text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase mr-2 hidden lg:block">Follow Us</span>
                    <div className="flex items-center space-x-2">
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
                                    className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] hover:border-[#29b8bd]/30 transition-all duration-300 shadow-sm"
                                >
                                    <Icon className="w-4 h-4 md:w-[18px] md:h-[18px] drop-shadow-md" />
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
