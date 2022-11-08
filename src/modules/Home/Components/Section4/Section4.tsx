import { FullScreenContainer, FullWidthContainer } from '@/shared';
import React from 'react';

export const Section4 = () => {
  return (
    <div className="mt-10 md:mt-20">
      <FullWidthContainer>
        <FullScreenContainer
          backgroundColor="white"
          backgroundImages={{
            desktop: {
              url: 'https://www.elegantthemes.com/images/divi/layouts-layers-fw.jpg',
            },
          }}
        />
      </FullWidthContainer>
    </div>
  );
};
