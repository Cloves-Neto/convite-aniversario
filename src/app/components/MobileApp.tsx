'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '@/app/home.module.css';
import AnimatedText from './AnimatedText';
import { motion } from 'motion/react';

export default function MobileApp() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className={styles.splashScreen}>

        <video
          autoPlay
          muted
          playsInline
          className='w-full h-screen object-fill'
          src="/videos/tela1.mp4"
        />
      </div>
    );
  }

  return (
    <main className={styles.mainContainer}>
      <video
        className='w-full h-screen object-fill absolute top-0 left-0 z-5'
        src="/videos/tela2.mp4"
        autoPlay
        loop
        muted
        playsInline />

      <motion.div className="absolute w-full h-screen z-20 flex items-end justify-center py-40">
        <Link href="/pato" className="bg-[#C2D191] text-[#FFFEAF] animate-bounce shadow-[0_10px_8px_0px_rgba(0,0,0,0.9)] text-3xl px-4 py-2 border border-gray-700 rounded-full px-10">
          Abrir Convite
        </Link>
      </motion.div>
    </main>
  );
}
