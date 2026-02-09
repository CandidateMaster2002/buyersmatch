import React from 'react';
import { motion } from 'framer-motion';

interface SquiggleArrowProps {
    className?: string;
    delay?: number;
}

export const SquiggleArrow: React.FC<SquiggleArrowProps> = ({ className, delay = 0 }) => {
    return (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            className={className}
        >
            <motion.path
                d="M20 20 Q 50 10 80 40 T 60 80"
                stroke="#29b8bd"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{
                    duration: 2,
                    delay: delay,
                    ease: "easeInOut"
                }}
            />
            {/* Arrow head */}
            <motion.path
                d="M50 75 L 60 80 L 65 70"
                stroke="#29b8bd"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{
                    duration: 0.5,
                    delay: delay + 1.8,
                    ease: "easeOut"
                }}
            />
        </svg>
    );
};

export default SquiggleArrow;
