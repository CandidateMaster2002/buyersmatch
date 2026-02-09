import React from 'react';
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
        <div className={`bg-gray-900 border-b border-white/5 py-1 px-4 ${className}`}>
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
                                className="w-9 h-9 flex items-center justify-center transition-transform duration-300 hover:scale-110"
                            >
                                <Icon className="block w-6 h-6 object-contain drop-shadow-sm" />
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default TopBar;
