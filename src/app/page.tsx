// app/page.js
'use client';

import { useState, useEffect } from 'react';
import MobileApp from './components/MobileApp';
import DesktopBlocker from './components/DesktopBlocker';

export default function HomePage() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return isMobile ? <MobileApp /> : <DesktopBlocker />;
}