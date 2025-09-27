'use client';

import styles from '@/app/home.module.css';
import { Icon } from '@iconify/react';


export default function Cardapio() {

  return (
    <main className={styles.mainContainer + `flex flex-col`}>
      <video
        playsInline
        loop
        autoPlay
        src={'/pages/cardapio.mp4'}
        className='w-full h-screen object-fill' />

      <a href='/pato' className='w-8 h-8 absolute top-0 left-0 text-6xl text-[#C2D191]' >
        <Icon icon={'icon-park-solid:back'} />
      </a >

    </main>
  );
}
