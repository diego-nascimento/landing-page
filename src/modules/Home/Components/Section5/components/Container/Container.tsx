import { FullWidthContainer, NotFullWidthContainer } from '@/shared';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <FullWidthContainer>
      <div className="bg-[#6300D7]  w-full py-10 md:py-20 flex justify-center ">
        <NotFullWidthContainer>{children}</NotFullWidthContainer>
      </div>
    </FullWidthContainer>
  );
};
