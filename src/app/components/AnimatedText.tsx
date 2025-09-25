// components/AnimatedText.tsx

'use client';

import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
}

export default function AnimatedText({ text }: AnimatedTextProps) {
  const words = text.split(' ');

  const baseDelay = 0.08;
  let totalCharIndex = 0;

  return (

    <motion.div
      className="flex justify-center items-center flex-wrap gap-x-2"
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {Array.from(word).map((char, charIndex) => {
            const currentDelay = totalCharIndex * baseDelay;
            totalCharIndex++;

            return (
              <motion.span
                key={charIndex}
                animate={{
                  y: ['0%', '-30%', '0%'],
                  transition: {
                    duration: 1.8,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'loop' as const,
                    delay: currentDelay,
                  },
                }}
                className="inline-block text-4xl font-extrabold"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            );
          })}
          {wordIndex < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))
      }
    </motion.div >
  );
}