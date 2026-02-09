import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedTextProps {
    text: string;
    className?: string;
    once?: boolean;
    delay?: number;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
    text,
    className = "",
    once = true,
    delay = 0,
    as: Tag = "h2"
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: (i: number = 1) => ({
            opacity: 1,
            transition: {
                staggerChildren: 0.03,
                delayChildren: delay * i
            },
        }),
    };

    const childVariants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100,
            },
        },
    };

    // Use motion[Tag] dynamically
    const MotionTag = motion[Tag as keyof typeof motion] as any;

    // Split text into words and then characters to prevent word breaking
    const words = text.split(" ");

    return (
        <MotionTag
            ref={ref}
            className={className}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block whitespace-nowrap">
                    {word.split("").map((char, charIndex) => (
                        <motion.span key={charIndex} variants={childVariants} className="inline-block">
                            {char}
                        </motion.span>
                    ))}
                    {/* Add space after word if it's not the last one */}
                    {wordIndex !== words.length - 1 && (
                        <span className="inline-block whitespace-pre"> </span>
                    )}
                </span>
            ))}
        </MotionTag>
    );
};

export default AnimatedText;
