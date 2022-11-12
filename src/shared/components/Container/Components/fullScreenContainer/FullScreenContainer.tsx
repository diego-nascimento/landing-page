import { useIsMobile } from '@/shared/hooks/isMobile/useIsMobile';
import React, { useMemo } from 'react';
import { imageBackgroundContainerProps } from '../types';

interface Props {
  children?: React.ReactNode;
  backgroundImages: imageBackgroundContainerProps;
  backgroundColor: string;
  paralax?: boolean;
}

export const FullScreenContainer = ({ paralax = false, ...data }: Props) => {
  const { isMobile } = useIsMobile();

  const paralaxEffect = useMemo(() => (paralax ? 'bg-fixed' : ''), [paralax]);
  return (
    <section
      className={`bg-[${data.backgroundColor}]  w-screen h-full min-h-screen bg-no-repeat bg-center bg-cover ${paralaxEffect}`}
      style={{
        backgroundImage: `url(${
          isMobile
            ? data.backgroundImages.mobile?.url ??
              data.backgroundImages.desktop.url
            : data.backgroundImages.desktop.url
        })`,
      }}
    >
      {data.children}
    </section>
  );
};
