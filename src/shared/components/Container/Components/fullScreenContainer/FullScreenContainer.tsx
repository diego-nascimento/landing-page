import { useIsMobile } from '@/shared/hooks/isMobile/useIsMobile';
import React from 'react';
import { imageBackgroundContainerProps } from '../types';

interface Props {
  children?: React.ReactNode;
  backgroundImages: imageBackgroundContainerProps;
  backgroundColor: string;
}

export const FullScreenContainer = (data: Props) => {
  const { isMobile } = useIsMobile();
  return (
    <section
      className={`bg-[${data.backgroundColor}]  w-screen h-full min-h-screen bg-no-repeat bg-center bg-cover`}
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
