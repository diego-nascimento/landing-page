import {
  FullScreenContainer,
  FullWidthContainer,
  NotFullWidthContainer,
} from '@/shared';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <FullWidthContainer>
      <FullScreenContainer
        backgroundColor="white"
        backgroundImages={{
          desktop: {
            url: '/fundo-teste.jpg',
          },
        }}
        paralax={true}
      >
        <div className="flex flex-col justify-center items-center w-full h-full px-5 mt-10 md:mt-20 ">
          <NotFullWidthContainer centered>{children}</NotFullWidthContainer>
        </div>
      </FullScreenContainer>
    </FullWidthContainer>
  );
};
