import React from 'react';
import { motion } from 'framer-motion';

interface DrawingGuideProps {
    className?: string;
    delay?: number;
}

export const DrawingGuide: React.FC<DrawingGuideProps> = ({ className, delay = 0 }) => {
    return (
        <svg
            viewBox="0 0 200 20"
            fill="none"
            preserveAspectRatio="none"
            className={className}
        >
            <motion.path
                d="M5 15 Q 100 5 195 15"
                stroke="#29b8bd"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.4 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1.5,
                    delay: delay,
                    ease: "easeInOut"
                }}
            />
            {/* Arrow head */}
            <motion.path
                d="M185 10 L 195 15 L 185 20"
                stroke="#29b8bd"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.4 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.5,
                    delay: delay + 1.2,
                    ease: "easeOut"
                }}
            />
        </svg>
    );
};

export default DrawingGuide;
