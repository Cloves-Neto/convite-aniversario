'use client';

import styles from '@/app/home.module.css';
import { Icon } from '@iconify/react';


export default function Games() {

  return (
    <main className={styles.mainContainer + `flex flex-col`}>
      <img alt='games que vamos jogar pt2' src={'/pages/games-2.jpg'} className='w-full h-screen object-fill' />
      <img alt='games que vamos jogar pt1' src={'/pages/games-1.jpg'} className='w-full h-screen object-fill' />

      <a href='/pato' className='w-8 h-8 absolute top-0 left-0 text-6xl text-[#C2D191]' >
        <Icon icon={'icon-park-solid:back'} />
      </a >

    </main>
  );
}
