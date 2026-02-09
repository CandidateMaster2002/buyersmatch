import React from 'react';
import { motion } from 'framer-motion';

interface HandDrawnCircleProps {
    children: React.ReactNode;
    color?: string;
    delay?: number;
}

export const HandDrawnCircle: React.FC<HandDrawnCircleProps> = ({
    children,
    color = "#29b8bd",
    delay = 1.5
}) => {
    return (
        <span className="relative inline-block px-2">
            <span className="relative z-10">{children}</span>
            <svg
                className="absolute inset-x-0 -inset-y-2 w-[120%] h-[140%] left-1/2 -translate-x-1/2 pointer-events-none z-0"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <motion.path
                    d="M10,50 C10,20 90,20 90,50 C90,80 10,80 10,50 Z"
                    stroke={color}
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="transparent"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.4 }}
                    transition={{
                        duration: 1.2,
                        delay: delay,
                        ease: "easeInOut"
                    }}
                />
            </svg>
        </span>
    );
};

export default HandDrawnCircle;
