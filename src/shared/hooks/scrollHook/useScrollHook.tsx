import { useEffect, useMemo, useState } from 'react';

export const useScrollHook = (pointNumber: number = 20) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);

    window && document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  const scrolled = useMemo(
    () => scrollPosition > pointNumber,
    [scrollPosition, pointNumber],
  );

  return {
    scrolled,
  };
};
