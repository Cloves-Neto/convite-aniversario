// components/AnimatedText.tsx

'use client';

import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
}

export default function AnimatedText({ text }: AnimatedTextProps) {
  const words = text.split(' ');
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
    }),
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex justify-center items-center flex-wrap gap-x-2"
    >
      {words.map((word, index) => (
        <span key={index} className="inline-block"> 
          {Array.from(word).map((char, charIndex) => (
            <motion.span
              key={charIndex}
              variants={itemVariants}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
}