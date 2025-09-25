'use client';

import Link from 'next/link';
import styles from '@/app/home.module.css';
import { Icon } from '@iconify/react';
import Image from 'next/image';


export default function MobileApp() {

  const width = '30';
  const height = '30';
  const colors = {
    pink: 'bg-[#FAC7CA]',
    green: 'bg-[#C2D191]',
    yellow: 'bg-[#FFFEAF]',
    purple: 'bg-[#e0adeb]'
  }


  return (
    <main className={styles.mainContainer}>
      <Link href='/' className='w-8 h-8 absolute top-0 left-0 text-6xl z-10 text-[#C2D191]' >
        <Icon icon={'icon-park-solid:back'} />
      </Link >

      <Image width={1200} height={720} alt='pato caminhando no convite' src={'/images/pato.jpg'} className='w-screen h-screen' />

      <div className="w-full h-screen z-10 absolute top-0 left-0 flex flex-col justify-end py-40 items-center">
        <Link href="/convite" className={`${colors.pink} scale-75 flex flex-row w-full max-w-72 h-20 overflow-clip px-2 rounded-full shadow-[0_8px_8px_rgba(0,0,0,0.4)] `}>
          <div className='w-1/3 h-full flex items-center justify-center pt-2'>
            <Image width={width} height={height} src={"/images/letter.png"} alt="letter icon" className='w-20' />
          </div>
          <div className='w-2/3 h-full flex items-center justify-start text-4xl text-black text-shadow-2xs text-shadow-amber-50'>
            Convite
          </div>
        </Link>

        <Link href="/convite" className={`${colors.yellow} scale-75 flex flex-row w-full max-w-72 h-20 overflow-clip px-2 rounded-full shadow-[0_8px_8px_rgba(0,0,0,0.4)] `}>
          <div className='w-1/3 h-full flex items-center justify-center pt-2'>
            <Image width={width} height={height} src={"/images/cake.png"} alt="letter icon" className='w-20' />
          </div>
          <div className='w-2/3 h-full flex items-center justify-start text-4xl text-black text-shadow-2xs text-shadow-amber-50'>
            Cardápio
          </div>
        </Link>

        <Link href="/convite" className={`${colors.green} scale-75 flex flex-row w-full max-w-72 h-20 overflow-clip px-2 rounded-full shadow-[0_8px_8px_rgba(0,0,0,0.4)] `}>
          <div className='w-1/3 h-full flex items-center scale-75 justify-center pt-2'>
            <Image width={width} height={height} src={"/images/dress.png"} alt="letter icon" className='w-20' />
          </div>
          <div className='w-2/3 h-full flex items-center justify-start text-4xl text-black text-shadow-2xs text-shadow-amber-50'>
            Dress Code
          </div>
        </Link>

        <Link href="/convite" className={`${colors.purple} scale-75 flex flex-row w-full max-w-72 h-20 overflow-clip px-2 rounded-full shadow-[0_8px_8px_rgba(0,0,0,0.4)] `}>
          <div className='w-1/3 h-full flex items-center justify-center pt-2'>
            <Image width={width} height={height} src={"/images/cake.png"} alt="letter icon" className='w-20' />
          </div>
          <div className='w-2/3 h-full flex items-center justify-start text-4xl text-black text-shadow-2xs text-shadow-amber-50'>
            Games
          </div>
        </Link>

      </div>
    </main>
  );
}
