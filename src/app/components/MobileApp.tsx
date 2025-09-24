'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '@/app/home.module.css';
import AnimatedText from './AnimatedText';

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
          className='w-full h-screen object-cover'
          src="/videos/intro.mp4"
        />
      </div>
    );
  }

  return (
    <main className={styles.mainContainer}>
      <video
        className='w-full h-screen object-cover absolute top-0 left-0 z-5'
        src="/videos/dessa.mp4"
        autoPlay
        loop
        muted
        playsInline />

      <div className="absolute w-full z-10 top-40 left-1/2 -translate-1/2">
        <h1 className={` ${styles.floating} text-[#C2D191] font-doublebass text-7xl w-full flex flex-col gap-4 text-shadow-black text-shadow-2xs`}>
          <div className='flex gap-8 w-full items-center justify-center'>
            <AnimatedText text="Dessa" />
            <AnimatedText text="faz" />
          </div>
          <AnimatedText text="Aniversário" />
        </h1>
      </div>

      <div className="absolute z-10 bottom-40 left-1/2 -translate-1/2">
        <Link href="/pato" className="bg-[#C2D191] text-[#FFFEAF] shadow-[0_10px_8px_0px_rgba(0,0,0,0.9)] text-3xl p-4 border border-gray-700 rounded-full px-10">Abrir Convite</Link>
      </div>
    </main>
  );
}
