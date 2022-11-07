import { useEffect, useMemo, useState } from 'react';

export const useIsMobile = () => {
  const [screenWidth, setScreenWidth] = useState(() => 0);
  useEffect(() => {
    window &&
      document.addEventListener('resize', () => {
        setScreenWidth(document.body.clientWidth);
      });
  }, []);

  const isMobile = useMemo(() => screenWidth < 768, [screenWidth]);

  return { isMobile };
};
