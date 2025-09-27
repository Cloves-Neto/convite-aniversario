'use client';

import styles from '@/app/home.module.css';
import { Icon } from '@iconify/react';


export default function Games() {

  return (
    <main className={styles.mainContainer + `flex flex-col`}>
      <img alt='presentes pt1' src={'/pages/presente1.svg'} className='w-full h-screen object-fill' />
      <img alt='presentes pt2' src={'/pages/presente2.svg'} className='w-full h-screen object-fill' />

      <a href='/pato' className='w-8 h-8 absolute top-0 left-0 text-6xl text-[#C2D191]' >
        <Icon icon={'icon-park-solid:back'} />
      </a >

    </main>
  );
}
