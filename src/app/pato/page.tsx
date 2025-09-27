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
    purple: 'bg-[#dfb7d2]',
    blue: 'bg-[#b0eae8]',

  }


  return (
    <main className={styles.mainContainer}>
      <Link href='/' className='w-8 h-8 absolute top-0 left-0 text-6xl z-20 text-[#C2D191]' >
        <Icon icon={'icon-park-solid:back'} />
      </Link >

      <video
        autoPlay
        playsInline
        muted
        src='/videos/tela3.mp4'
        className='w-full h-full absolute z-0 top-0 left-0 object-fill'
      />
      <div className="w-full h-screen z-10 absolute top-0 left-0 flex flex-col justify-end gap-3 py-25 items-center">
        <Link href="/convite" className={`${colors.pink} flex flex-row w-full max-w-40 h-14 overflow-clip px-2 rounded-full shadow-[0_8px_8px_rgba(0,0,0,0.4)] `}>
          <div className='w-1/3 h-full flex items-center justify-center pt-2'>
            <Image width={width} height={height} src={"/icons/letter.svg"} alt="letter icon" className='w-20' />
          </div>
          <div className='w-2/3 h-full flex items-center justify-start text-2xl text-black text-shadow-2xs text-shadow-amber-50'>
            Convite
          </div>
        </Link>

        <Link href="/cardapio" className={`${colors.yellow} flex flex-row w-full max-w-40 h-14 overflow-clip px-2 rounded-full shadow-[0_8px_8px_rgba(0,0,0,0.4)] `}>
          <div className='w-1/3 h-full flex items-center justify-center pt-2'>
            <Image width={width} height={height} src={"/icons/cake.svg"} alt="letter icon" className='w-10' />
          </div>
          <div className='w-2/3 h-full flex items-center justify-start text-2xl text-black text-shadow-2xs text-shadow-amber-50'>
            Cardápio
          </div>
        </Link>

        <Link href="/dresscode" className={`${colors.green} flex flex-row w-full max-w-40 h-14 overflow-clip px-2 rounded-full shadow-[0_8px_8px_rgba(0,0,0,0.4)] `}>
          <div className='w-1/3 h-full flex items-center scale-75 justify-center pt-2'>
            <Image width={width} height={height} src={"/icons/dress.svg"} alt="letter icon" className='w-full' />
          </div>
          <div className='w-2/3 h-full flex items-center justify-start text-2xl text-black text-shadow-2xs text-shadow-amber-50'>
            Dress Code
          </div>
        </Link>

        <Link href="/games" className={`${colors.purple} flex flex-row w-full max-w-40 h-14 overflow-clip px-2 rounded-full shadow-[0_8px_8px_rgba(0,0,0,0.4)] `}>
          <div className='w-1/3 h-full flex items-center justify-center pt-2'>
            <Image width={width} height={height} src={"/icons/games.svg"} alt="letter icon" className='w-10' />
          </div>
          <div className='w-2/3 h-full flex items-center justify-start text-2xl text-black text-shadow-2xs text-shadow-amber-50'>
            Games
          </div>
        </Link>

        <Link href="/presente" className={`${colors.blue} flex flex-row w-full max-w-40 h-14 overflow-clip px-2 rounded-full shadow-[0_8px_8px_rgba(0,0,0,0.4)] `}>
          <div className='w-1/3 h-full flex items-center justify-center pt-2'>
            <Image width={width} height={height} src={"/icons/gift.svg"} alt="letter icon" className='w-10 pb-4' />
          </div>
          <div className='w-2/3 h-full flex items-center justify-start text-2xl text-black text-shadow-2xs text-shadow-amber-50'>
            Presente
          </div>
        </Link>
      </div>
    </main>
  );
}
