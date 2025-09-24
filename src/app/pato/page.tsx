'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '@/app/home.module.css';
import {Icon} from '@iconify/react';


export default function MobileApp() {

  return (
    <main className={styles.mainContainer}>
      <a href='/' className='w-8 h-8 absolute top-0 left-0 text-6xl z-10 text-[#C2D191]' >
        <Icon icon={'icon-park-solid:back'} />
      </a >

      <img alt='pato caminhando no convite' src={'/images/pato.jpg'} className='w-full h-screen absolute top-0 left-0 object-fill' />

      <div className="absolute w-72 h-auto z-10 flex flex-col gap-5 bottom-10 left-1/2 -translate-1/2">
        <Link href="/convite" className="bg-[#FAC7CA] flex items-center justify-evenly gap-4 overflow-hidden max-h-20 text-black text-shadow-amber-50 text-shadow-2xs text-center shadow-[0_10px_8px_0px_rgba(0,0,0,0.5)] text-4xl px-8 rounded-full">
          <img src={"/images/letter.png"} alt="letter icon" className='w-20 h-40 pt-2 object-cover' />
          Convite
        </Link>

        <Link href="/cardapio" className="bg-[#FFFEAF] flex items-center justify-evenly gap-4 overflow-hidden max-h-20 text-black text-shadow-amber-50 text-shadow-2xs text-center shadow-[0_10px_8px_0px_rgba(0,0,0,0.5)] text-4xl px-8 rounded-full">
          <img src={"/images/cake.png"} alt="letter icon" className='w-20 h-40 pt-2 object-cover' />
          Cardápio
        </Link>

        <Link href="/dresscode" className="bg-[#C2D191] flex items-center justify-evenly gap-4 overflow-hidden max-h-20 text-black text-shadow-amber-50 text-shadow-2xs text-center shadow-[0_10px_8px_0px_rgba(0,0,0,0.5)] text-4xl px-4 rounded-full">
          <img src={"/images/dress.png"} alt="letter icon" className='w-20 h-40 pt-2 object-cover' />
          Dress Code
        </Link>

        <Link href="/games" className="bg-[#e0adeb] flex items-center justify-evenly gap-4 overflow-hidden max-h-20 text-black text-shadow-amber-50 text-shadow-2xs text-center shadow-[0_10px_8px_0px_rgba(0,0,0,0.5)] text-4xl px-8 rounded-full">
          <img src={"/images/letter.png"} alt="letter icon" className='w-20 h-40 pt-2 object-cover' />
          Games
        </Link>
      </div>
    </main>
  );
}
