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
    const [isFinalCTAInView, setIsFinalCTAInView] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = (e: Event) => {
            const target = e.target as HTMLDivElement;
            const scrollPosition = target.scrollTop;
            const threshold = 100; // Lower threshold to show sticky CTA earlier

            // Sticky CTA is visible if scanned past threshold AND final CTA is NOT visible
            // We use the state tracked by IntersectionObserver for FinalCTA
            if (!isFinalCTAInView) {
                setIsStickyCTAVisible(scrollPosition > threshold);
            } else {
                setIsStickyCTAVisible(false);
            }
        };

        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll);
        }

        // Observer for Footer (WhatsApp button visibility)
        const footerObserver = new IntersectionObserver(
            ([entry]) => {
                setIsFooterInView(entry.isIntersecting);
            },
            {
                root: scrollContainer,
                threshold: 0.1,
            }
        );

        // Observer for FinalCTA (Sticky CTA visibility)
        const finalCTAObserver = new IntersectionObserver(
            ([entry]) => {
                const isVisible = entry.isIntersecting;
                setIsFinalCTAInView(isVisible);

                // Immediate update based on Intersection to avoid lag
                if (isVisible) {
                    setIsStickyCTAVisible(false);
                } else if (scrollContainer && scrollContainer.scrollTop > 100) {
                    setIsStickyCTAVisible(true);
                }
            },
            {
                root: scrollContainer,
                threshold: 0.1, // Trigger as soon as 10% is visible
                rootMargin: "0px 0px -100px 0px" // Trigger slightly before it hits bottom
            }
        );

        const footerElement = document.querySelector('footer');
        const finalCTAElement = document.getElementById('final-cta');

        if (footerElement) footerObserver.observe(footerElement);
        if (finalCTAElement) finalCTAObserver.observe(finalCTAElement);

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('scroll', handleScroll);
            }
            if (footerElement) footerObserver.unobserve(footerElement);
            if (finalCTAElement) finalCTAObserver.unobserve(finalCTAElement);
        };
    }, [isFinalCTAInView]); // Re-run effect if isFinalCTAInView changes to update scroll listener logic if needed, actually cleaner not to depend on it in scroll listener but use ref or state in closure? 
    // Effect dependency: the scroll listener uses `isFinalCTAInView` from closure. 
    // Better to use a ref for isFinalCTAInView or keep it simple. 
    // Let's rely on the observer callback to set visibility mostly, and scroll listener for top threshold.

    // Correct logic:
    // We need the scroll listener to know `isFinalCTAInView` current value.
    // Since `handleScroll` is defined in useEffect, it captures the initial state.
    // We should use a ref for `isFinalCTAInView` to access fresh value in `handleScroll`.

    // BUT, instead of complex ref, let's keep it simple: 
    // The previous logic was failing because manual calculation was flaky.
    // New logic: 
    // 1. Scroll > 100 -> potential SHOW.
    // 2. FinalCTA visible -> FORCE HIDE.

    // I will rewrite the component slightly to use a Ref for `isFinalCTAInView` so `handleScroll` can read it without re-binding.

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        const container = scrollContainerRef.current;

        if (element && container) {
            // Calculate position manually to account for sticky header
            const elementRect = element.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();

            // Current scroll position
            const currentScrollTop = container.scrollTop;

            // Distance from top of container to element
            const relativeTop = elementRect.top - containerRect.top;

            // Desired Offset: Navbar height (approx 80px) + Extra 20px breathing room
            const offset = 100;

            const targetScrollTop = currentScrollTop + relativeTop - offset;

            container.scrollTo({
                top: targetScrollTop,
                behavior: 'smooth'
            });
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
