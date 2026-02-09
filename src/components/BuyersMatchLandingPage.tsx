import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Hero from './Hero';
import SocialProofStrip from './SocialProofStrip';
import WhoWeHelp from './WhoWeHelp';
import Services from './Services';
import Process from './Process';
import WhyChoose from './WhyChoose';
import CaseStudies from './CaseStudies';
import GoogleReviews from './GoogleReviews';
import Awards from './Awards';
import Blog from './Blog';
import FinalCTA from './FinalCTA';
import StickyCTA from './StickyCTA';
import TopBar from './TopBar';
import Footer from './Footer';
import AboutUsSection from './AboutUs';
import WhatsAppButton from './WhatsAppButton';
import FAQ from './FAQ';
import VideoTestimonials from './VideoTestimonials';

// Subtle section wrapper - fade + slight upward motion
const SectionWrapper = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px", amount: 0.1 }}
        transition={{
            duration: 0.5
        }}
    >
        {children}
    </motion.div>
);

const BuyersMatchLandingPage = () => {
    const [isStickyCTAVisible, setIsStickyCTAVisible] = useState(false);
    const [isFinalCTAInView, setIsFinalCTAInView] = useState(false);
    const [isFooterInView, setIsFooterInView] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const threshold = 600;
            setIsStickyCTAVisible(scrollPosition > threshold && !isFinalCTAInView);
        };

        const finalCtaObserver = new IntersectionObserver(
            ([entry]) => {
                setIsFinalCTAInView(entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0.1,
            }
        );

        const footerObserver = new IntersectionObserver(
            ([entry]) => {
                setIsFooterInView(entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0.1,
            }
        );

        const finalCtaElement = document.getElementById('final-cta');
        const footerElement = document.querySelector('footer');

        if (finalCtaElement) {
            finalCtaObserver.observe(finalCtaElement);
        }

        if (footerElement) {
            footerObserver.observe(footerElement);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (finalCtaElement) finalCtaObserver.unobserve(finalCtaElement);
            if (footerElement) footerObserver.unobserve(footerElement);
        };
    }, [isFinalCTAInView]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="font-sans text-gray-900 w-full overflow-x-hidden">
            {/* Fixed Header */}
            <Navbar scrollToSection={scrollToSection} />

            {/* Hero Section - No wrapper, has its own animation */}
            <Hero scrollToSection={scrollToSection} />

            {/* Social Proof Strip - IMMEDIATE TRUST */}
            <SocialProofStrip />

            {/* High-Conversion Flow - Subtle entrance animations */}
            <SectionWrapper><WhoWeHelp /></SectionWrapper>
            <SectionWrapper><Services /></SectionWrapper>
            <SectionWrapper><Process /></SectionWrapper>
            <SectionWrapper><WhyChoose /></SectionWrapper>
            <SectionWrapper><AboutUsSection /></SectionWrapper>
            <SectionWrapper><CaseStudies /></SectionWrapper>
            <SectionWrapper><GoogleReviews /></SectionWrapper>
            <SectionWrapper><VideoTestimonials /></SectionWrapper>
            <SectionWrapper><Awards /></SectionWrapper>

            {/* Blog - Minimized (SEO only) */}
            <SectionWrapper><Blog /></SectionWrapper>

            {/* FAQ - Address Objections */}
            <SectionWrapper><FAQ /></SectionWrapper>

            {/* Final CTA */}
            <SectionWrapper><FinalCTA /></SectionWrapper>

            {/* Sticky CTA with smooth slide-up animation */}
            <AnimatePresence>
                {isStickyCTAVisible && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{
                            duration: 0.4
                        }}
                    >
                        <StickyCTA />
                    </motion.div>
                )}
            </AnimatePresence>

            <TopBar />
            <Footer scrollToSection={scrollToSection} />

            {/* WhatsApp Button - Hidden when footer is in view */}
            {!isFooterInView && <WhatsAppButton />}
        </div>
    );
};

export default BuyersMatchLandingPage;
