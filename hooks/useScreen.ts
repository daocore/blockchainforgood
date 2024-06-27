  // use client;
import { useState, useEffect } from 'react';

const SM_WIDTH = 640;
const MD_WIDTH = 768;
const LG_WIDTH = 1024;

 export function useScreen() {
  // use client;
  const [screenSize, setScreenSize] = useState(LG_WIDTH);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    isMobile: screenSize < SM_WIDTH,
    isTablet: screenSize >= SM_WIDTH && screenSize < MD_WIDTH,
    isLaptop: screenSize >= MD_WIDTH && screenSize < LG_WIDTH,
    isDesktop: screenSize >= LG_WIDTH,
  };
}
