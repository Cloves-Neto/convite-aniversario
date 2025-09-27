// app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import MobileApp from './components/MobileApp';
import DesktopBlocker from './components/DesktopBlocker';

export default function HomePage() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (isMobile === null) {
    return null;
  }

  return isMobile ? <MobileApp /> : <DesktopBlocker />;
}