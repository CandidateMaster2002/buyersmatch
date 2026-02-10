import { useState, useEffect, useRef } from 'react';
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
        viewport={{ once: true, amount: 0.05 }}
        transition={{
            duration: 0.5
        }}
    >
        {children}
    </motion.div>
);

const BuyersMatchLandingPage = () => {
    const [isStickyCTAVisible, setIsStickyCTAVisible] = useState(false);
    const [isFooterInView, setIsFooterInView] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = (e: Event) => {
            const target = e.target as HTMLDivElement;
            const scrollPosition = target.scrollTop;
            const threshold = 400;

            // Check if final-cta is in view manually since we're in a custom scroll container
            const finalCta = document.getElementById('final-cta');
            let isFinalCtaVisible = false;
            if (finalCta) {
                const rect = finalCta.getBoundingClientRect();
                // Only hide if we can see a good chunk of the final CTA (e.g., top is 30% up the screen)
                isFinalCtaVisible = rect.top < (window.innerHeight * 0.7);
            }

            setIsStickyCTAVisible(scrollPosition > threshold && !isFinalCtaVisible);
        };

        const footerObserver = new IntersectionObserver(
            ([entry]) => {
                setIsFooterInView(entry.isIntersecting);
            },
            {
                root: scrollContainerRef.current,
                threshold: 0.1,
            }
        );

        const footerElement = document.querySelector('footer');

        if (footerElement) {
            footerObserver.observe(footerElement);
        }

        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('scroll', handleScroll);
            }
            if (footerElement) footerObserver.unobserve(footerElement);
        };
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div
            ref={scrollContainerRef}
            className="h-screen w-full overflow-y-auto overflow-x-hidden scroll-smooth font-sans text-gray-900 bg-white"
        >
            {/* Header stays at the top in its own space and sticks */}
            <div className="sticky top-0 z-[100] w-full bg-white">
                <Navbar scrollToSection={scrollToSection} scrollTargetRef={scrollContainerRef} />
            </div>

            {/* Main Content Area */}
            <main className="relative w-full">
                <Hero scrollToSection={scrollToSection} />
                <SocialProofStrip />
                <SectionWrapper><WhoWeHelp /></SectionWrapper>
                <SectionWrapper><Services /></SectionWrapper>
                <SectionWrapper><Process /></SectionWrapper>
                <SectionWrapper><WhyChoose /></SectionWrapper>
                <SectionWrapper><AboutUsSection /></SectionWrapper>
                <SectionWrapper><CaseStudies /></SectionWrapper>
                <SectionWrapper><GoogleReviews /></SectionWrapper>
                <SectionWrapper><VideoTestimonials /></SectionWrapper>
                <SectionWrapper><Awards /></SectionWrapper>
                <SectionWrapper><FAQ /></SectionWrapper>
                <SectionWrapper><Blog /></SectionWrapper>
                <SectionWrapper><FinalCTA /></SectionWrapper>
                <TopBar />
                <Footer scrollToSection={scrollToSection} />
            </main>

            {/* Sticky CTA takes its own space at the bottom when visible */}
            <AnimatePresence>
                {isStickyCTAVisible && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="sticky bottom-0 z-50 w-full bg-white border-t border-gray-100"
                    >
                        <StickyCTA />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* WhatsApp Button - Positioned fixed to the screen */}
            <div className={`fixed bottom-8 right-6 z-[60] transition-opacity duration-300 ${isFooterInView ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <WhatsAppButton />
            </div>
        </div>
    );
};

export default BuyersMatchLandingPage;
