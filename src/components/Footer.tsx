import React from 'react';
import { siteConfig } from '../config/site';

interface FooterProps {
    scrollToSection?: (id: string) => void;
}

const Footer: React.FC<FooterProps> = () => {
    return (
        <footer className="bg-gray-900 text-gray-500 py-8 px-4 border-t border-white/5">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between text-sm font-bold gap-6">
                    {/* Copyright */}
                    <div className="flex items-center">
                        <span>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
                    </div>

                    {/* Legal Links */}
                    <div className="flex items-center space-x-8">
                        <a href="#" className="hover:text-[#29b8bd] transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-[#29b8bd] transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-[#29b8bd] transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
